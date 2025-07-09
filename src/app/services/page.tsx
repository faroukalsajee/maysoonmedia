"use client";

import BackgroundImage from "../components/BackgroundImage";

const services = [
    {
        title: "Artist Management",
        description: "Comprehensive artist development and career management services to help artists reach their full potential.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
    },
    {
        title: "Music Production & Direction",
        description: "Professional music production services from concept to final mix, ensuring your vision comes to life.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
            </svg>
        ),
    },
    {
        title: "Music Videos",
        description: "Creative music video production that captures the essence of your music and tells your story visually.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        title: "Digital Content",
        description: "Engaging digital content creation for social media, websites, and digital platforms to amplify your presence.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 12l2 2 4-4" />
            </svg>
        ),
    },
    {
        title: "Creative Direction",
        description: "Strategic creative direction to develop your unique brand identity and artistic vision.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
            </svg>
        ),
    },
    {
        title: "Event Production",
        description: "Full-service event production for concerts, launches, and special events that create unforgettable experiences.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
        ),
    },
];

export default function ServicesPage() {
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center py-16 px-4">
            <BackgroundImage src="/fBAEOh274KMZL6jOHpUR24qk8.jpg" alt="Services Background" />
            <main className="relative z-10 max-w-2xl text-center text-white">
                <header className="flex flex-col items-center mb-12">
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white text-center mb-2">Our Services</h1>
                    <p className="text-lg text-white text-center max-w-2xl">
                        Comprehensive creative production services to bring your vision to life
                    </p>
                </header>

                <section className="w-full max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <div className="text-blue-600 mb-4">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <h2 className="text-2xl font-semibold text-white mb-4">Ready to Get Started?</h2>
                        <p className="text-white mb-6 max-w-2xl mx-auto">
                            Maysoon Media is now <a href="https://rhythmi.ai" className="text-blue-300 hover:text-blue-200 hover:underline font-medium" target="_blank" rel="noopener noreferrer">rhythmi.ai</a>.
                            Contact us to discuss your project and how we can help bring your creative vision to life.
                        </p>
                        <a
                            href="https://rhythmi.ai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                        >
                            Visit rhythmi.ai
                        </a>
                    </div>
                </section>
            </main>
        </div>
    );
} 