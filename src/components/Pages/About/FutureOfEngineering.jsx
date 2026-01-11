import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FutureOfEngineering() {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-out", once: false, mirror: true });
    }, []);

    const points = [
        { icon: "🤖", title: "Innovation", desc: "AI-powered automation and digital twins." },
        { icon: "🌱", title: "Sustainability", desc: "Low-carbon materials and lifecycle efficiency." },
        { icon: "🌍", title: "Global Impact", desc: "Standards-driven execution across regions." },
    ];

    return (
        <section className="relative bg-gray-900 text-white py-24 px-6 md:px-10">
            {/* Background image */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1600&auto=format&fit=crop"
                    alt="Futuristic smart city"
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
            </div>

            {/* Content overlay */}
            <div className="relative max-w-5xl mx-auto text-center" data-aos="fade-up">
                <div className="flex justify-center items-center">
                    <div
                        className="w-fit backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 hover:shadow-lg transition"
                        data-aos="fade-up" >
                        <p className="text-xs tracking-[0.18em] uppercase text-white font-bold">
                            THE FUTURE OF ENGINEERING
                        </p>
                    </div>
                </div>
                <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                    Building Intelligent, Sustainable Systems for Tomorrow
                </h2>
                <p className="mt-6 text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
                    We engineer the next chapter of infrastructure—where data, design, and execution converge.
                    Our solutions combine automation, advanced analytics, and sustainability to deliver
                    smarter, resilient systems at scale.
                </p>
            </div>

            {/* Key points */}
            <div className="relative mt-12 grid sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {points.map((pt, idx) => (
                    <div
                        key={pt.title}
                        className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 hover:shadow-lg hover:shadow-indigo-500/40 transition"
                        data-aos="fade-up"
                        data-aos-delay={200 + idx * 150}
                    >
                        <span className="text-3xl">{pt.icon}</span>
                        <h3 className="mt-3 text-xl font-semibold">{pt.title}</h3>
                        <p className="mt-2 text-gray-300 text-sm">{pt.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
