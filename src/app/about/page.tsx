import BackgroundImage from "../components/BackgroundImage";

export default function AboutPage() {
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center py-16 px-4">
            <BackgroundImage src="/FG8kvpd7bVw3vUuedgo7fXDiofk.jpg" alt="About Background" />
            <main className="relative z-10 max-w-2xl text-center text-white">
                <header className="flex flex-col items-center mb-8">
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white text-center mb-2">About Maysoon Media</h1>
                </header>
                <section className="max-w-2xl text-center text-lg text-white">
                    <p className="mb-4">Maysoon Media is a creative production studio rooted in Vancouver, offering a wide array of creative services. Our expertise spans artist management, music production/direction, music videos, digital content, and a variety of other services. We are passionate about media that moves you.</p>
                    <p>Maysoon Media is now <a href="https://rhythmi.ai" className="text-blue-300 hover:text-blue-200 hover:underline" target="_blank" rel="noopener noreferrer">rhythmi.ai</a>.</p>
                </section>
            </main>
        </div>
    );
} 