import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#22252A] text-[#FAF7F2] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16 pb-16 border-b border-white/10">
          {/* Brand Col */}
          <div>
            <Link href="#" className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 rounded-md overflow-hidden border border-white/20">
                <Image
                  src="/images/thefarawaytrails-logo.jpg"
                  alt="THE FARAWAY TRAILS Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="brand-font text-base font-extrabold tracking-widest text-white uppercase">
                  THE FARAWAY TRAILS
                </span>
                <span className="text-[9px] font-bold tracking-[0.2em] text-[#C38D46] uppercase">
                  EXPEDITIONS — KERALAM HQ
                </span>
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Keralam's premier expedition travel agency. Crafting unforgettable journeys across Munnar tea hills, Alleppey backwaters, Varkala cliffs, and Periyar jungles.
            </p>
          </div>

          {/* Destinations Col */}
          <div>
            <h4 className="heading-font text-base font-bold text-white mb-4">
              Keralam Destinations
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/70">
              <li><Link href="#expeditions" className="hover:text-[#C38D46] transition-colors">Munnar & Anamudi Ridge</Link></li>
              <li><Link href="#expeditions" className="hover:text-[#C38D46] transition-colors">Alleppey Houseboat Cruise</Link></li>
              <li><Link href="#expeditions" className="hover:text-[#C38D46] transition-colors">Varkala Red Cliff Strolls</Link></li>
              <li><Link href="#expeditions" className="hover:text-[#C38D46] transition-colors">Periyar Bamboo Rafting</Link></li>
              <li><Link href="#expeditions" className="hover:text-[#C38D46] transition-colors">Ponmudi Golden Peak Trek</Link></li>
              <li><Link href="#expeditions" className="hover:text-[#C38D46] transition-colors">Jatayu Rock & Vagamon Pines</Link></li>
            </ul>
          </div>

          {/* Quick Links Col */}
          <div>
            <h4 className="heading-font text-base font-bold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/70">
              <li><Link href="#expeditions" className="hover:text-[#C38D46] transition-colors">Explore Keralam Packages</Link></li>
              <li><Link href="#why-us" className="hover:text-[#C38D46] transition-colors">The Keralam Advantage</Link></li>
              <li><Link href="#planner" className="hover:text-[#C38D46] transition-colors">Custom Trip Request</Link></li>
              <li><Link href="#testimonials" className="hover:text-[#C38D46] transition-colors">Traveler Reviews</Link></li>
              <li><Link href="#contact" className="hover:text-[#C38D46] transition-colors">Contact Keralam HQ</Link></li>
            </ul>
          </div>

          {/* HQ Contact Col */}
          <div>
            <h4 className="heading-font text-base font-bold text-white mb-4">
              Keralam HQ Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-white/70 mb-6">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C38D46] shrink-0 mt-0.5" />
                <span>MG Road, Kowdiar, Thiruvananthapuram, Keralam</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C38D46] shrink-0" />
                <span>+91 471 234 5678 / +91 98470 12345</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C38D46] shrink-0" />
                <span>keralam@thefarawaytrails.com</span>
              </p>
            </div>

            <h5 className="text-xs font-bold uppercase tracking-wider text-[#C38D46] mb-2">
              Keralam Trail Updates
            </h5>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border border-white/20 rounded px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#C38D46]"
              />
              <button className="px-3 py-1.5 rounded text-xs font-bold text-white bg-[#C38D46] hover:bg-[#A87532] transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <span>© 2026 THE FARAWAY TRAILS Expeditions & Travel Agency (Keralam). All Rights Reserved.</span>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white/80 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white/80 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white/80 transition-colors">Keralam Eco Guidelines</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
