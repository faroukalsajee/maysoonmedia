"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const featuredImages = [
  "/s70XtDhoKyVlfvkbNMi5eOkg.jpg",
  "/zu3Hb6lI05zSAtIkaV6PRC3l1w4.jpg",
  "/cYioLBZFZi0fz8w81ATqb7zD90.jpg",
  "/t8w4WKE99KSbFYOSg2pL630oQ.jpg",
  "/tjVjllXXrazr8a4bbHqYD5l8Hw.jpg",
];

export default function Home() {
  // Simple auto-advancing carousel
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % featuredImages.length);
    }, 3500);
    return () => clearTimeout(timeoutRef.current!);
  }, [current]);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Hero Section */}
      <div className="absolute inset-0 z-0">
        <Image
          src={featuredImages[current]}
          alt="Featured background"
          fill
          className="object-cover w-full h-full opacity-60 scale-105 transition-all duration-1000"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
      </div>
      <header className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] w-full text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-4 animate-slide-up">Maysoon Media</h1>
        <p className="text-2xl md:text-3xl text-gray-200 italic mb-8 animate-fade-in delay-200">media that moves you</p>
      </header>
      {/* Carousel Section */}
      <section className="relative z-10 w-full max-w-3xl mt-8 flex flex-col items-center">
        <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-2xl border-4 border-white/10">
          {featuredImages.map((img, idx) => (
            <Image
              key={img}
              src={img}
              alt={`Featured ${idx + 1}`}
              fill
              className={`object-cover w-full h-full absolute transition-opacity duration-1000 ${current === idx ? 'opacity-100' : 'opacity-0'}`}
              priority={idx === 0}
            />
          ))}
        </div>
        <div className="flex gap-2 mt-4">
          {featuredImages.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${current === idx ? 'bg-white' : 'bg-white/40'}`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>
      <footer className="relative z-10 mt-24 text-center text-gray-400 text-sm pb-8">
        &copy; {new Date().getFullYear()} Maysoon Media. All rights reserved. <br />
        Maysoon Media is now <a href="https://rhythmi.ai" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">rhythmi.ai</a>
      </footer>
      {/* Animations */}
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 1.2s ease both; }
        .animate-slide-up { animation: slide-up 1.2s cubic-bezier(.4,0,.2,1) both; }
        .delay-200 { animation-delay: 0.2s; }
      `}</style>
    </div>
  );
}
