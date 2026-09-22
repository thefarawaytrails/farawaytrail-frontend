'use client';

import { useState, FormEvent } from 'react';
import { Expedition } from '@/data/expeditions';
import { X, Calendar, Users, DollarSign } from 'lucide-react';

interface BookingModalProps {
  expedition: Expedition | null;
  onClose: () => void;
  onSuccess: (message: string) => void;
}

export default function BookingModal({ expedition, onClose, onSuccess }: BookingModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [guests, setGuests] = useState(1);
  const [date, setDate] = useState('');

  if (!expedition) return null;

  const totalPrice = expedition.price * guests;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const refCode = `FT-KL-${Math.floor(100000 + Math.random() * 900000)}`;
    onSuccess(
      `🌴 Swagatham ${name}! Your Keralam trail booking inquiry for "${expedition.title}" has been confirmed! Reference: #${refCode}`
    );
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#22252A]/70 backdrop-blur-md animate-fadeIn">
      <div className="bg-white border border-[#8C7A6B]/20 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#FAF7F2] border border-[#8C7A6B]/20 flex items-center justify-center text-[#22252A] hover:bg-[#22252A] hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        <h2 className="heading-font text-2xl font-extrabold text-[#22252A] mb-1">
          Keralam Booking Request
        </h2>
        <p className="text-sm font-bold text-[#C38D46] mb-6">
          {expedition.title}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-bold text-[#22252A] block mb-1">Full Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jane Smith"
              className="w-full bg-[#FAF7F2] border border-[#8C7A6B]/20 rounded-md px-3.5 py-2.5 text-sm text-[#22252A] focus:outline-none focus:border-[#C38D46] focus:bg-white font-medium"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-[#22252A] block mb-1">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="jane@example.com"
              className="w-full bg-[#FAF7F2] border border-[#8C7A6B]/20 rounded-md px-3.5 py-2.5 text-sm text-[#22252A] focus:outline-none focus:border-[#C38D46] focus:bg-white font-medium"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-[#22252A] block mb-1">Phone / WhatsApp</label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 98765 43210"
              className="w-full bg-[#FAF7F2] border border-[#8C7A6B]/20 rounded-md px-3.5 py-2.5 text-sm text-[#22252A] focus:outline-none focus:border-[#C38D46] focus:bg-white font-medium"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-[#22252A] block mb-1 flex items-center gap-1">
                <Users size={14} /> Guests
              </label>
              <input
                type="number"
                min={1}
                max={20}
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
                className="w-full bg-[#FAF7F2] border border-[#8C7A6B]/20 rounded-md px-3.5 py-2.5 text-sm text-[#22252A] focus:outline-none focus:border-[#C38D46] focus:bg-white font-medium"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-[#22252A] block mb-1 flex items-center gap-1">
                <Calendar size={14} /> Start Date
              </label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-[#FAF7F2] border border-[#8C7A6B]/20 rounded-md px-3.5 py-2.5 text-sm text-[#22252A] focus:outline-none focus:border-[#C38D46] focus:bg-white font-medium"
              />
            </div>
          </div>

          {/* Total Price Box */}
          <div className="bg-[#F7EEDF] border border-[#8C7A6B]/20 rounded-md p-4 flex items-center justify-between mt-4">
            <span className="text-sm font-bold text-[#22252A]">Estimated Total:</span>
            <span className="heading-font text-2xl font-extrabold text-[#22252A]">
              ${totalPrice.toLocaleString()}
            </span>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 mt-2 rounded-md text-sm font-bold text-white bg-[#22252A] hover:bg-[#C38D46] transition-all shadow-md"
          >
            Confirm Booking Inquiry 🌴
          </button>
        </form>
      </div>
    </div>
  );
}
