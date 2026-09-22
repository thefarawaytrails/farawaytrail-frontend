'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-[#8C7A6B]/20 ${
        isScrolled
          ? 'bg-[#FAF7F2]/98 backdrop-blur-md py-3 shadow-md'
          : 'bg-[#FAF7F2]/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link href="#" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 rounded-md overflow-hidden shadow-sm border border-[#8C7A6B]/30 group-hover:scale-105 transition-transform">
            <Image
              src="/images/thefarawaytrails-logo.jpg"
              alt="THE FARAWAY TRAILS Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="brand-font text-lg sm:text-xl font-extrabold tracking-widest text-[#22252A] uppercase leading-none">
              THE FARAWAY TRAILS
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.22em] text-[#C38D46] uppercase mt-1">
              EXPEDITIONS — KERALAM
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#expeditions"
            className="text-sm font-semibold text-[#626A72] hover:text-[#22252A] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C38D46] hover:after:w-full after:transition-all"
          >
            Keralam Trails
          </Link>
          <Link
            href="#why-us"
            className="text-sm font-semibold text-[#626A72] hover:text-[#22252A] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C38D46] hover:after:w-full after:transition-all"
          >
            Why Choose Us
          </Link>
          <Link
            href="#planner"
            className="text-sm font-semibold text-[#626A72] hover:text-[#22252A] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C38D46] hover:after:w-full after:transition-all"
          >
            Custom Trip
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-semibold text-[#626A72] hover:text-[#22252A] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C38D46] hover:after:w-full after:transition-all"
          >
            Reviews
          </Link>
          <Link
            href="#contact"
            className="text-sm font-semibold text-[#626A72] hover:text-[#22252A] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C38D46] hover:after:w-full after:transition-all"
          >
            Contact HQ
          </Link>
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="#expeditions"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-md text-sm font-bold text-white bg-[#22252A] hover:bg-[#C38D46] transition-all shadow-sm hover:shadow-md"
          >
            Book A Keralam Trail
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[#22252A] hover:text-[#C38D46] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#8C7A6B]/20 px-6 py-6 flex flex-direction-col gap-4 shadow-xl animate-fadeIn">
          <Link
            href="#expeditions"
            onClick={() => setMobileOpen(false)}
            className="text-base font-bold text-[#22252A] hover:text-[#C38D46] py-2 border-b border-[#8C7A6B]/10"
          >
            Keralam Trails
          </Link>
          <Link
            href="#why-us"
            onClick={() => setMobileOpen(false)}
            className="text-base font-bold text-[#22252A] hover:text-[#C38D46] py-2 border-b border-[#8C7A6B]/10"
          >
            Why Choose Us
          </Link>
          <Link
            href="#planner"
            onClick={() => setMobileOpen(false)}
            className="text-base font-bold text-[#22252A] hover:text-[#C38D46] py-2 border-b border-[#8C7A6B]/10"
          >
            Custom Trip
          </Link>
          <Link
            href="#testimonials"
            onClick={() => setMobileOpen(false)}
            className="text-base font-bold text-[#22252A] hover:text-[#C38D46] py-2 border-b border-[#8C7A6B]/10"
          >
            Reviews
          </Link>
          <Link
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="text-base font-bold text-[#22252A] hover:text-[#C38D46] py-2"
          >
            Contact HQ
          </Link>
          <Link
            href="#expeditions"
            onClick={() => setMobileOpen(false)}
            className="mt-2 text-center py-3 rounded-md text-sm font-bold text-white bg-[#22252A] hover:bg-[#C38D46] transition-all"
          >
            Book A Keralam Trail
          </Link>
        </div>
      )}
    </header>
  );
}
