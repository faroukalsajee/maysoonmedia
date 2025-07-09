"use client";

import BackgroundImage from "../components/BackgroundImage";

export default function MusicPage() {
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center py-16 px-4">
            <BackgroundImage src="/m4vFDOXE9F4PMsnUUCGgY2F0rE.jpg" alt="Music Background" />
            <main className="relative z-10 max-w-2xl text-center text-white">
                <header className="flex flex-col items-center mb-8">
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white text-center mb-2">Maysoon Music</h1>
                    <p className="text-lg text-gray-300 text-center">Official YouTube Channel</p>
                </header>

                <section className="w-full max-w-4xl">
                    {/* Featured Video */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-white text-center">Featured Video</h2>
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
                            <iframe
                                src="https://www.youtube.com/embed/tEts_V1FLVc"
                                title="Maysoon Music Featured Video"
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>

                    {/* Channel Info */}
                    <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-8">
                        <h3 className="text-xl font-semibold mb-4 text-white">About Maysoon Music</h3>
                        <p className="text-gray-300 mb-4">
                            Discover the latest music productions, artist collaborations, and behind-the-scenes content from Maysoon Media&apos;s music division.
                        </p>
                        <a
                            href="https://www.youtube.com/c/MaysoonMusic"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors"
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                            Visit Channel
                        </a>
                    </div>
                </section>
            </main>
        </div>
    );
} 