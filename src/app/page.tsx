"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Hero Section */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/s70XtDhoKyVlfvkbNMi5eOkg.jpg"
          alt="Featured background"
          fill
          className="object-cover w-full h-full opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
      </div>
      <header className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] w-full text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-4">Maysoon Media</h1>
        <p className="text-2xl md:text-3xl text-gray-200 italic mb-8">media that moves you</p>
      </header>
      {/* Featured Image Section */}
      <section className="relative z-10 w-full max-w-3xl mt-8 flex flex-col items-center">
        <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-2xl border-4 border-white/10">
          <Image
            src="/zu3Hb6lI05zSAtIkaV6PRC3l1w4.jpg"
            alt="Featured work"
            fill
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </section>
      <footer className="relative z-10 mt-24 text-center text-gray-400 text-sm pb-8">
        &copy; {new Date().getFullYear()} Maysoon Media. All rights reserved. <br />
        Maysoon Media is now <a href="https://rhythmi.ai" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">rhythmi.ai</a>
      </footer>
    </div>
  );
}
