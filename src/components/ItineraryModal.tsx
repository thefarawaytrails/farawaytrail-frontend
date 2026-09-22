'use client';

import Image from 'next/image';
import { Expedition } from '@/data/expeditions';
import { X, MapPin, Clock, Compass } from 'lucide-react';

interface ItineraryModalProps {
  expedition: Expedition | null;
  onClose: () => void;
  onBook: () => void;
}

export default function ItineraryModal({ expedition, onClose, onBook }: ItineraryModalProps) {
  if (!expedition) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#22252A]/70 backdrop-blur-md animate-fadeIn">
      <div className="bg-white border border-[#8C7A6B]/20 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#FAF7F2]/90 border border-[#8C7A6B]/20 flex items-center justify-center text-[#22252A] hover:bg-[#22252A] hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Hero Banner */}
        <div className="relative h-64 sm:h-72 w-full">
          <Image
            src={expedition.image}
            alt={expedition.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#22252A]/95 via-[#22252A]/40 to-transparent flex flex-col justify-end p-6 sm:p-8">
            <h2 className="heading-font text-2xl sm:text-3xl font-extrabold text-white mb-2">
              {expedition.title}
            </h2>
            <div className="flex flex-wrap gap-4 text-xs font-bold text-[#C38D46]">
              <span className="flex items-center gap-1"><MapPin size={14} /> {expedition.location}</span>
              <span className="flex items-center gap-1"><Clock size={14} /> {expedition.duration}</span>
              <span className="flex items-center gap-1"><Compass size={14} /> {expedition.difficulty}</span>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8">
          <h3 className="heading-font text-lg font-bold text-[#22252A] mb-6">
            Day-by-Day Keralam Expedition Itinerary
          </h3>

          <div className="space-y-6 mb-8">
            {expedition.itinerary.map((step, idx) => (
              <div key={idx} className="relative pl-6 border-l-2 border-[#C38D46]">
                <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-[#C38D46]" />
                <span className="text-xs font-extrabold text-[#C38D46] uppercase tracking-wider block">
                  {step.day}
                </span>
                <h4 className="heading-font text-base font-bold text-[#22252A] mt-0.5 mb-1">
                  {step.title}
                </h4>
                <p className="text-sm text-[#626A72]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="flex items-center justify-between pt-6 border-t border-[#8C7A6B]/20">
            <div>
              <span className="text-xs font-semibold text-[#626A72] block">Package Price</span>
              <span className="heading-font text-2xl font-extrabold text-[#22252A]">
                ${expedition.price.toLocaleString()}
              </span>
            </div>
            <button
              onClick={onBook}
              className="px-6 py-3 rounded-md text-sm font-bold text-white bg-[#22252A] hover:bg-[#C38D46] transition-all shadow-md"
            >
              Book This Trail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
