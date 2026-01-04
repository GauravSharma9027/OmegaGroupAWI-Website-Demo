// 
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SustainabilityMission() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false, mirror: true , easing: "ease-out-cubic" });
    }, []);

    return (
        <section
            className="relative w-full h-[75vh] md:h-[85vh] overflow-hidden"
            aria-labelledby="sustainability-heading"
        >
            {/* Full-width background image */}
            <img
                src="https://images.pexels.com/photos/1230157/pexels-photo-1230157.jpeg"
                alt="Sustainability visual"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

            {/* Content overlay */}
            <div
                className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 h-full flex flex-col justify-center"
                data-aos="fade-up"
            >
                <p
                    className="text-xs uppercase tracking-[0.25em] text-emerald-400"
                    data-aos="fade-right"
                >
                    SUSTAINABILITY MISSION
                </p>
                <h2
                    id="sustainability-heading"
                    className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl"
                    data-aos="zoom-in"
                >
                    Committed to Responsible Growth
                </h2>
                <p
                    className="mt-6 text-white/90 text-lg leading-relaxed max-w-2xl"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    We integrate environmental responsibility, ethical practices, and long-term sustainable growth into every decision we make. Our mission is to create value while protecting the planet and empowering communities.
                </p>

                {/* CTA */}
                <div className="mt-8" data-aos="fade-up" data-aos-delay="400">
                    <Link
                        to="/sustainability"
                        className="inline-flex text-nowrap items-center rounded-md px-7 py-3
                       bg-emerald-600 text-white font-medium
                       shadow-lg transition-all duration-300 ease-in-out
                       hover:bg-emerald-700 hover:-translate-y-0.5
                       focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    >
                        Explore Our Sustainability Approach
                        <svg
                            className="ml-2 h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                        >
                            <path
                                d="M5 12h12M12 5l7 7-7 7"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}