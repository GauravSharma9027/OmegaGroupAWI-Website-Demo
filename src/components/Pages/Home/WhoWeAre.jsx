import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhoWeAre({
    label = "WHO WE ARE",
    heading = "A global enterprise built on trust.",
    paragraphs = [
        "Omega Group is a diversified corporate organization with execution across infrastructure, clean energy, mining, retail, and global trade.",
        "We operate with engineering rigor, governance, and sustainability—delivering measurable impact and long-term value for partners, communities, and investors.",
        "Our footprint spans multiple geographies, supported by experienced leadership, disciplined processes, and a pipeline focused on scale."
    ],
    highlights = [
        { icon: "🌐", title: "Global Presence" },
        { icon: "⚡", title: "Scalable Execution" },
        { icon: "♻️", title: "Sustainability Focus" },
        { icon: "🤝", title: "Trusted Partnerships" }
    ],
}) {
    const sectionRef = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1200, easing: "ease-in-out", once: false, mirror: true });
        const el = sectionRef.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            { threshold: 0.18 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    const images = [
        {
            src: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
            alt: "Corporate leadership meeting"
        },
        {
            src: "https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg",
            alt: "Modern office skyline"
        },
        {
            src: "https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg",
            alt: "Team collaboration in workspace"
        }
    ];
    const [current, setCurrent] = useState(0);

    // Auto change every 5s
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section ref={sectionRef} className="relative bg-white" aria-labelledby="who-we-are-heading">
            {/* <div className="h-px bg-gray-200/70" /> */}

            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                    {/* Text column */}
                    <div
                        className={`lg:col-span-6 xl:col-span-5 transform transition-all duration-700 ease-in-out`}
                        data-aos="fade-up"
                    >
                        {label && (
                            <p className="text-xs tracking-[0.18em] uppercase text-emerald-700/80" data-aos="fade-right">
                                {label}
                            </p>
                        )}

                        <h2
                            id="who-we-are-heading"
                            className="mt-3 font-montserrat font-bold text-gray-900 leading-tight text-3xl sm:text-4xl md:text-5xl"
                            data-aos="zoom-in"
                        >
                            {heading}
                        </h2>

                        <div className="mt-5 space-y-4">
                            {paragraphs.map((text, idx) => (
                                <p
                                    key={idx}
                                    className="text-gray-700 text-base md:text-lg leading-relaxed"
                                    data-aos="fade-up"
                                    data-aos-delay={200 + idx * 150}
                                >
                                    {text}
                                </p>
                            ))}
                        </div>

                        {/* Highlights */}
                        <div className="mt-8 grid grid-cols-2 gap-6">
                            {highlights.map((item, idx) => (
                                <div
                                    key={item.title}
                                    className="flex items-center gap-3 rounded-lg border border-gray-200 p-4 transition duration-700 ease-in-out hover:border-emerald-500 hover:shadow-lg"
                                    data-aos="fade-up"
                                    data-aos-delay={400 + idx * 150}
                                >
                                    <span className="text-xl">{item.icon}</span>
                                    <p className="text-gray-800 font-medium">{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image Carousel */}
                    <div className="lg:col-span-6">
                        <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 h-96">
                            {images.map((img, idx) => (
                                <img
                                    key={idx}
                                    src={img.src}
                                    alt={img.alt}
                                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-[2000ms] ease-in-out
                    ${current === idx ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
                                    loading="lazy"
                                />
                            ))}

                            {/* Overlay caption */}
                            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/40 to-transparent p-4">
                                <p className="text-white/90 text-lg font-bold">Trusted execution. Measurable impact.</p>
                            </div>

                            {/* Navigation dots */}
                            <div className="absolute bottom-4 right-4 flex gap-2">
                                {images.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrent(idx)}
                                        className={`w-3 h-3 rounded-full transition duration-500 ease-in-out ${current === idx ? "bg-emerald-500" : "bg-white/50 hover:bg-white"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Micro stats */}
                        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4" data-aos="fade-up" data-aos-delay="600">
                            <Stat label="Years of experience" value="20+" />
                            <Stat label="Global locations" value="50+" />
                            <Stat label="Projects delivered" value="300+" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* Subcomponent: Stat */
function Stat({ label, value }) {
    return (
        <div className="rounded-xl border border-gray-200/80 p-3 sm:p-4 bg-white transition-shadow duration-700 ease-in-out hover:shadow-lg">
            <p className="text-xs uppercase tracking-wide text-gray-500">{label}</p>
            <p className="mt-1 text-2xl font-semibold text-gray-900">{value}</p>
        </div>
    );
}