import Image from "next/image";

export default function About() {
    return (
        <div className="min-h-screen bg-[#F5F5F5] flex flex-col items-center justify-center px-4 py-12">
            <header className="flex flex-col items-center mb-8">
                <Image src="/Logo.svg" alt="Maysoon Media Logo" width={80} height={80} className="mb-4" />
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 text-center mb-2">About Maysoon Media</h1>
            </header>
            <section className="max-w-2xl text-center text-lg text-gray-700">
                <p className="mb-4">Maysoon Media is a creative production studio rooted in Vancouver, offering a wide array of creative services. Our expertise spans artist management, music production/direction, music videos, digital content, and a variety of other services. We are passionate about media that moves you.</p>
                <p>Maysoon Media is now <a href="https://rhythmi.ai" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">rhythmi.ai</a>.</p>
            </section>
        </div>
    );
} 