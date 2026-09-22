import { TreePine, Ship, ShieldCheck, Sparkles } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <TreePine className="w-8 h-8 text-[#C38D46]" />,
      title: 'Native Malayali Guides',
      desc: 'Local naturalists, tea plantation historians, and certified Western Ghat mountain trek leaders.',
    },
    {
      icon: <Ship className="w-8 h-8 text-[#C38D46]" />,
      title: 'Private Eco Houseboats',
      desc: 'Authentic solar-assisted wooden Kettuvallam houseboats serving fresh Karimeen & traditional Keralam Sadhya.',
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#C38D46]" />,
      title: 'Responsible Eco Tourism',
      desc: 'Direct support to tribal forest cooperatives, spice farming communities, and wildlife habitat conservation.',
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#C38D46]" />,
      title: '100% Flexible Itineraries',
      desc: 'Customized to your group size, whether romantic honeymoon, solo trekking, or family holiday.',
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-[#F7EEDF]/40 border-y border-[#8C7A6B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#C38D46] block mb-2">
            THE FARAWAY ADVANTAGE
          </span>
          <h2 className="heading-font text-3xl sm:text-4xl font-extrabold text-[#22252A] mb-4">
            Why Explore Keralam With Us
          </h2>
          <p className="text-base text-[#626A72]">
            Born in Keralam, our agency combines deep local knowledge of Western Ghat secret trails with premium comfort and safety.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#8C7A6B]/20 p-8 rounded-2xl text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="w-16 h-16 rounded-full bg-[#F7EEDF] flex items-center justify-center mx-auto mb-6">
                {item.icon}
              </div>
              <h3 className="heading-font text-lg font-bold text-[#22252A] mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-[#626A72] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
