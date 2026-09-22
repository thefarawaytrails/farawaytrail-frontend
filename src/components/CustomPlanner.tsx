'use client';

import { useState, FormEvent } from 'react';
import { Send, MapPin, Calendar, Users, Hotel } from 'lucide-react';

interface CustomPlannerProps {
  onSuccess: (msg: string) => void;
}

export default function CustomPlanner({ onSuccess }: CustomPlannerProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dest, setDest] = useState('');
  const [date, setDate] = useState('');
  const [group, setGroup] = useState('solo');
  const [style, setStyle] = useState('luxury');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSuccess(
      `🐘 Custom Keralam Itinerary Requested! Our local Keralam trail experts will contact ${name} within 24 hours for ${dest || 'your custom tour'}.`
    );
    setName('');
    setEmail('');
    setDest('');
    setDate('');
    setNotes('');
  };

  return (
    <section id="planner" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-white border border-[#8C7A6B]/20 rounded-3xl p-8 sm:p-12 shadow-xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#C38D46] block mb-2">
            YOUR PERSONAL KERALAM JOURNEY
          </span>
          <h2 className="heading-font text-3xl sm:text-4xl font-extrabold text-[#22252A] mb-3">
            Plan Your Custom Keralam Trip
          </h2>
          <p className="text-sm sm:text-base text-[#626A72]">
            Want to combine Munnar mountain treks with Alleppey houseboats or Varkala cliffs? Request a custom itinerary built just for you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="text-xs font-bold text-[#22252A] block mb-1.5">
                Your Full Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full bg-[#FAF7F2] border border-[#8C7A6B]/20 rounded-md px-3.5 py-2.5 text-sm text-[#22252A] focus:outline-none focus:border-[#C38D46] focus:bg-white font-medium"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-[#22252A] block mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
                className="w-full bg-[#FAF7F2] border border-[#8C7A6B]/20 rounded-md px-3.5 py-2.5 text-sm text-[#22252A] focus:outline-none focus:border-[#C38D46] focus:bg-white font-medium"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-[#22252A] block mb-1.5 flex items-center gap-1">
                <MapPin size={14} className="text-[#C38D46]" /> Favorite Destinations
              </label>
              <input
                type="text"
                required
                value={dest}
                onChange={(e) => setDest(e.target.value)}
                placeholder="Munnar, Alleppey, Varkala..."
                className="w-full bg-[#FAF7F2] border border-[#8C7A6B]/20 rounded-md px-3.5 py-2.5 text-sm text-[#22252A] focus:outline-none focus:border-[#C38D46] focus:bg-white font-medium"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-[#22252A] block mb-1.5 flex items-center gap-1">
                <Calendar size={14} className="text-[#C38D46]" /> Travel Month & Year
              </label>
              <input
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="November 2026"
                className="w-full bg-[#FAF7F2] border border-[#8C7A6B]/20 rounded-md px-3.5 py-2.5 text-sm text-[#22252A] focus:outline-none focus:border-[#C38D46] focus:bg-white font-medium"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-[#22252A] block mb-1.5 flex items-center gap-1">
                <Users size={14} className="text-[#C38D46]" /> Group Type
              </label>
              <select
                value={group}
                onChange={(e) => setGroup(e.target.value)}
                className="w-full bg-[#FAF7F2] border border-[#8C7A6B]/20 rounded-md px-3.5 py-2.5 text-sm text-[#22252A] focus:outline-none focus:border-[#C38D46] focus:bg-white font-medium"
              >
                <option value="solo">Solo Explorer</option>
                <option value="couple">Honeymoon / Couple</option>
                <option value="family">Family Holiday</option>
                <option value="friends">Group of Friends (4+)</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-[#22252A] block mb-1.5 flex items-center gap-1">
                <Hotel size={14} className="text-[#C38D46]" /> Preferred Stay Style
              </label>
              <select
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="w-full bg-[#FAF7F2] border border-[#8C7A6B]/20 rounded-md px-3.5 py-2.5 text-sm text-[#22252A] focus:outline-none focus:border-[#C38D46] focus:bg-white font-medium"
              >
                <option value="luxury">Luxury Plantation Resorts & Houseboats</option>
                <option value="homestay">Heritage Eco Homestays & Teahouses</option>
                <option value="camping">Western Ghats Forest Camps</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-[#22252A] block mb-1.5">
              Special Requests / Ayurvedic Spa / Food Preferences
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Tell us if you want traditional Ayurveda treatments, spice garden visits, or surf lessons..."
              className="w-full bg-[#FAF7F2] border border-[#8C7A6B]/20 rounded-md px-3.5 py-2.5 text-sm text-[#22252A] focus:outline-none focus:border-[#C38D46] focus:bg-white font-medium resize-none"
            />
          </div>

          <div className="text-center pt-2">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md text-sm font-bold text-white bg-[#22252A] hover:bg-[#C38D46] transition-all shadow-md"
            >
              <Send size={16} /> Request Custom Keralam Itinerary 🌴
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
