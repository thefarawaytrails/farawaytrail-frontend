import Image from 'next/image';

export default function Testimonials() {
  const reviews = [
    {
      quote:
        'Trekking Meesapulimala tea ridge at dawn in Munnar with THE FARAWAY TRAILS was breathtaking. The tea estate glamping was pure magic!',
      name: 'Ananya Nair',
      trip: 'Munnar Tea Hills Trek • Nov 2025',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    {
      quote:
        'Our private Alleppey houseboat voyage was out of this world. Watching the sunset over Vembanad Lake while enjoying fresh Karimeen fish pollichathu is unforgettable.',
      name: 'Rahul & Priya Menon',
      trip: 'Alleppey Backwaters • Jan 2026',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    {
      quote:
        'The Periyar bamboo rafting and Varkala red cliff walk combined the best of jungle wildlife and Arabian sea relaxation. Best travel agency in Keralam!',
      name: 'David & Clara Smith',
      trip: 'Thekkady & Varkala Trail • Feb 2026',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    },
  ];

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#C38D46] block mb-2">
          TRAVELER TESTIMONIALS
        </span>
        <h2 className="heading-font text-3xl sm:text-4xl font-extrabold text-[#22252A] mb-4">
          What Explorers Say About Our Keralam Trails
        </h2>
        <p className="text-base text-[#626A72]">
          Memories from travelers who walked the hills, backwaters, and coastlines of Keralam.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-[#8C7A6B]/20 p-8 rounded-2xl shadow-sm flex flex-col justify-between"
          >
            <p className="text-sm text-[#1F2226] italic mb-6 leading-relaxed">
              "{item.quote}"
            </p>
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#C38D46]">
                <Image src={item.avatar} alt={item.name} fill className="object-cover" />
              </div>
              <div>
                <h4 className="heading-font text-base font-bold text-[#22252A]">
                  {item.name}
                </h4>
                <span className="text-xs font-medium text-[#8C7A6B]">
                  {item.trip}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
