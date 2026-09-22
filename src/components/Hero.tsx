'use client';

import { useState, FormEvent } from 'react';
import { Search, Compass, MapPin, Award, Users, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onSearch: (category: string, query: string) => void;
}

export default function Hero({ onSearch }: HeroProps) {
  const [destination, setDestination] = useState('');
  const [category, setCategory] = useState('all');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(category, destination);
    const target = document.getElementById('expeditions');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAF7F2]/60 via-[#FAF7F2]/90 to-[#FAF7F2] relative overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30 mix-blend-multiply"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=2000&q=80')"
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F7EEDF] border border-[#C38D46]/40 text-[#C38D46] text-xs sm:text-sm font-bold uppercase tracking-widest mb-6 shadow-sm">
          <Compass className="w-4 h-4 text-[#C38D46]" />
          <span>GOD'S OWN COUNTRY — KERALAM</span>
        </div>

        {/* Hero Title */}
        <h1 className="heading-font text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#22252A] leading-tight mb-6">
          Explore Keralam's Uncharted Peaks & Backwaters With{' '}
          <span className="brand-font text-[#C38D46] block sm:inline mt-2 sm:mt-0">
            THE FARAWAY TRAILS
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-[#626A72] max-w-3xl mx-auto mb-10 font-medium">
          Handcrafted tea garden treks in Munnar, private houseboat cruises in Alleppey, red cliff beach walks in Varkala, and wild elephant safaris in Periyar.
        </p>

        {/* Search Widget Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-[#8C7A6B]/20 rounded-2xl p-4 sm:p-5 shadow-lg max-w-4xl mx-auto mb-14 text-left grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold uppercase tracking-wider text-[#8C7A6B] flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#C38D46]" /> Keralam Trail
            </label>
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Munnar, Alleppey, Varkala..."
              className="bg-[#FAF7F2] border border-[#8C7A6B]/20 rounded-md px-3 py-2 text-sm text-[#22252A] focus:outline-none focus:border-[#C38D46] focus:bg-white font-medium transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold uppercase tracking-wider text-[#8C7A6B]">
              Experience Type
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-[#FAF7F2] border border-[#8C7A6B]/20 rounded-md px-3 py-2 text-sm text-[#22252A] focus:outline-none focus:border-[#C38D46] focus:bg-white font-medium transition-colors"
            >
              <option value="all">All Experiences</option>
              <option value="mountain">🏔️ Mountain & Tea Treks</option>
              <option value="backwaters">🛶 Backwaters & Houseboats</option>
              <option value="coastal">🌊 Coastal & Red Cliffs</option>
              <option value="wildlife">🐘 Wildlife & Bamboo Rafting</option>
              <option value="cultural">🏛️ Culture & Heritage</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-bold uppercase tracking-wider text-[#8C7A6B]">
              Duration
            </label>
            <select className="bg-[#FAF7F2] border border-[#8C7A6B]/20 rounded-md px-3 py-2 text-sm text-[#22252A] focus:outline-none focus:border-[#C38D46] focus:bg-white font-medium transition-colors">
              <option value="any">Any Duration</option>
              <option value="weekend">3 Days Weekend</option>
              <option value="week">4-7 Days Complete Trail</option>
              <option value="extended">Extended Keralam Trail</option>
            </select>
          </div>

          <div className="flex items-end">
            <button
              type="submit"
              className="w-full h-[42px] bg-[#22252A] hover:bg-[#C38D46] text-white font-bold text-sm rounded-md transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <Search className="w-4 h-4" /> Search Trails
            </button>
          </div>
        </form>

        {/* Live Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-4 border-t border-[#8C7A6B]/15">
          <div className="flex flex-col items-center">
            <span className="heading-font text-2xl sm:text-3xl font-extrabold text-[#22252A]">100%</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#8C7A6B] mt-1">Keralam Focused</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="heading-font text-2xl sm:text-3xl font-extrabold text-[#22252A]">4.97/5</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#8C7A6B] mt-1">Traveler Rating</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="heading-font text-2xl sm:text-3xl font-extrabold text-[#22252A]">8,400+</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#8C7A6B] mt-1">Happy Explorers</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="heading-font text-2xl sm:text-3xl font-extrabold text-[#22252A]">Native</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#8C7A6B] mt-1">Malayali Guides</span>
          </div>
        </div>
      </div>
    </section>
  );
}
