'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ExpeditionGrid from '@/components/ExpeditionGrid';
import WhyChooseUs from '@/components/WhyChooseUs';
import CustomPlanner from '@/components/CustomPlanner';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import ItineraryModal from '@/components/ItineraryModal';
import BookingModal from '@/components/BookingModal';
import { KERALAM_EXPEDITIONS, Expedition } from '@/data/expeditions';
import { CheckCircle2 } from 'lucide-react';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeItinerary, setActiveItinerary] = useState<Expedition | null>(null);
  const [activeBooking, setActiveBooking] = useState<Expedition | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleHeroSearch = (category: string, query: string) => {
    setSelectedCategory(category);
    setSearchQuery(query);
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 5000);
  };

  const filteredExpeditions = KERALAM_EXPEDITIONS.filter((exp) => {
    const matchesCategory = selectedCategory === 'all' || exp.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !q ||
      exp.title.toLowerCase().includes(q) ||
      exp.location.toLowerCase().includes(q) ||
      exp.description.toLowerCase().includes(q);

    return matchesCategory && matchesQuery;
  });

  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      <Navbar />

      <Hero onSearch={handleHeroSearch} />

      <ExpeditionGrid
        expeditions={filteredExpeditions}
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          setSearchQuery('');
        }}
        onOpenItinerary={(exp) => setActiveItinerary(exp)}
      />

      <WhyChooseUs />

      <CustomPlanner onSuccess={showToast} />

      <Testimonials />

      <Footer />

      {/* Modals */}
      <ItineraryModal
        expedition={activeItinerary}
        onClose={() => setActiveItinerary(null)}
        onBook={() => {
          setActiveBooking(activeItinerary);
          setActiveItinerary(null);
        }}
      />

      <BookingModal
        expedition={activeBooking}
        onClose={() => setActiveBooking(null)}
        onSuccess={showToast}
      />

      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#22252A] text-white border border-[#C38D46] px-5 py-4 rounded-xl shadow-2xl flex items-center gap-3 max-w-md animate-bounce">
          <CheckCircle2 className="w-6 h-6 text-[#C38D46] shrink-0" />
          <p className="text-xs sm:text-sm font-medium leading-snug">{toastMessage}</p>
        </div>
      )}
    </main>
  );
}
