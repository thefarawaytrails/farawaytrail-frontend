'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Expedition } from '@/data/expeditions';
import { MapPin, Clock, Star, Compass } from 'lucide-react';

interface ExpeditionGridProps {
  expeditions: Expedition[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  onOpenItinerary: (expedition: Expedition) => void;
}

export default function ExpeditionGrid({
  expeditions,
  selectedCategory,
  onSelectCategory,
  onOpenItinerary,
}: ExpeditionGridProps) {
  const categories = [
    { id: 'all', label: 'All Keralam Trails' },
    { id: 'mountain', label: '🏔️ Mountain Treks' },
    { id: 'backwaters', label: '🛶 Backwaters & Houseboats' },
    { id: 'coastal', label: '🌊 Coastal & Cliffs' },
    { id: 'wildlife', label: '🐘 Jungle Safaris' },
    { id: 'cultural', label: '🏛️ Culture & Adventure' },
  ];

  return (
    <section id="expeditions" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#C38D46] block mb-2">
          KERALAM PACKAGES
        </span>
        <h2 className="heading-font text-3xl sm:text-4xl font-extrabold text-[#22252A] mb-4">
          Handcrafted Keralam Expeditions
        </h2>
        <p className="text-base text-[#626A72]">
          Discover high-altitude tea ridge hikes, tranquil backwater lagoon trails, coastal red cliff sunsets, and tiger reserve bamboo rafting.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
              selectedCategory === cat.id
                ? 'bg-[#22252A] text-white shadow-md'
                : 'bg-white text-[#626A72] border border-[#8C7A6B]/20 hover:border-[#C38D46] hover:text-[#22252A]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      {expeditions.length === 0 ? (
        <div className="text-center py-16">
          <h3 className="text-xl font-bold text-[#22252A] mb-2">No Keralam Trails Found</h3>
          <p className="text-sm text-[#626A72]">
            Try searching for Munnar, Alleppey, Varkala, Thekkady, or Ponmudi.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expeditions.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#8C7A6B]/20 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col group"
            >
              {/* Image & Badges */}
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-[#22252A]/90 text-white">
                  {item.category}
                </span>
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-extrabold bg-[#FAF7F2]/95 text-[#22252A] flex items-center gap-1 shadow-sm">
                  <Star className="w-3.5 h-3.5 fill-[#C38D46] text-[#C38D46]" /> {item.rating} ({item.reviewsCount})
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-xs font-bold text-[#C38D46] uppercase tracking-wider flex items-center gap-1 mb-2">
                  <MapPin className="w-3.5 h-3.5" /> {item.location}
                </div>
                <h3 className="heading-font text-xl font-extrabold text-[#22252A] mb-3 group-hover:text-[#C38D46] transition-colors">
                  {item.title}
                </h3>

                <div className="flex gap-4 text-xs font-semibold text-[#8C7A6B] mb-4 pb-4 border-b border-[#8C7A6B]/15">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {item.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Compass className="w-3.5 h-3.5" /> {item.difficulty}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#626A72] mb-6 line-clamp-2">
                  {item.description}
                </p>

                {/* Footer */}
                <div className="mt-auto flex items-center justify-between pt-2">
                  <div>
                    <span className="text-[10px] font-semibold text-[#626A72] block">Package From</span>
                    <span className="heading-font text-xl font-extrabold text-[#22252A]">
                      ${item.price.toLocaleString()}
                    </span>
                  </div>
                  <button
                    onClick={() => onOpenItinerary(item)}
                    className="px-4 py-2 rounded-md text-xs font-bold text-white bg-[#22252A] hover:bg-[#C38D46] transition-colors"
                  >
                    View Trail Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
