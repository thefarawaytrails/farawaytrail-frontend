import type { Metadata } from "next";
import { Cinzel, Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "THE FARAWAY TRAILS | Keralam Travel & Expeditions Agency",
  description: "THE FARAWAY TRAILS is Keralam's premier travel agency. Discover Munnar mountain treks, Alleppey backwaters, Varkala cliff walks, and Periyar jungle safaris.",
  icons: {
    icon: "/images/thefarawaytrails-logo.jpg",
    apple: "/images/thefarawaytrails-logo.jpg",
  },
  openGraph: {
    title: "THE FARAWAY TRAILS | Keralam Travel & Expeditions",
    description: "Explore Keralam's Western Ghats peaks, backwaters, spice plantations, and coastal red cliffs.",
    images: ["/images/thefarawaytrails-logo.jpg"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cinzel.variable} ${outfit.variable} ${plusJakartaSans.variable} body-font antialiased bg-[#FAF7F2] text-[#1F2226]`}
      >
        {children}
      </body>
    </html>
  );
}
