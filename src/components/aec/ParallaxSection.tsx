import { useRef, useEffect, useState } from "react";
import heroImage from "@/assets/aec-hero.jpg";

export function ParallaxSection() {
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffsetY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="relative h-[500px] overflow-hidden flex items-center justify-center">
            {/* Background Image Container */}
            <div
                className="absolute inset-0 w-full h-[150%] -top-[25%] bg-cover bg-center will-change-transform"
                style={{
                    backgroundImage: `url(${heroImage})`,
                    transform: `translate3d(0, ${offsetY * 0.15}px, 0)` // Smoother parallax rate
                }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-brand-navy/60 mix-blend-multiply" />
            <div className="absolute inset-0 bg-black/20" /> {/* Extra darken for text legibility */}

            {/* Content */}
            <div className="relative z-10 container text-center px-4">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl drop-shadow-xl animate-fade-in-up">
                    Building the Future
                </h2>
                <p className="mt-6 text-xl leading-relaxed text-white/95 max-w-2xl mx-auto drop-shadow-lg font-medium">
                    With over 20 years of excellence, we deliver engineering solutions that stand the test of time.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                        href="#contact"
                        className="rounded-full bg-brand-orange px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-brand-orange/90 hover:scale-105 hover:shadow-orange-500/25 active:scale-95"
                    >
                        Start Your Project
                    </a>
                </div>
            </div>
        </section>
    );
}
