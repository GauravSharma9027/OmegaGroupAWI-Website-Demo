import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const SHORT_BUSINESSES = [
    {
        id: "infra",
        title: "Infrastructure",
        description:
            "Large-scale EPC and infrastructure programs with disciplined delivery and measurable impact.",
        image: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg",
    },
    {
        id: "energy",
        title: "Clean Energy",
        description:
            "Utility-scale renewables engineered for performance, reliability, and sustainability.",
        image: "https://images.pexels.com/photos/3183171/pexels-photo-3183171.jpeg",
    },
    {
        id: "retail",
        title: "Retail & Distribution",
        description:
            "Modern retail ecosystems and distribution networks delivering scale and customer trust.",
        image: "https://images.pexels.com/photos/4481258/pexels-photo-4481258.jpeg",
    },
];

export default function HomeBusinesses() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: false,
            mirror: true,
            easing: "ease-in-out",
        });
    }, []);

    return (
        <section
            className="relative bg-gradient-to-b from-gray-50 to-white"
            aria-labelledby="home-businesses-heading"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* Section Header */}
                <div className="text-center mb-14" data-aos="fade-up">
                    <p className="text-xs uppercase tracking-[0.2em] text-emerald-600">
                        OUR BUSINESSES
                    </p>
                    <h2
                        id="home-businesses-heading"
                        className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
                        data-aos="zoom-in"
                    >
                        Diverse Verticals. Global Scale.
                    </h2>
                    <p
                        className="mt-4 max-w-2xl mx-auto text-gray-700 text-base md:text-lg"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        We operate across multiple industries with discipline, innovation,
                        and long-term vision.
                    </p>
                </div>

                {/* Business Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SHORT_BUSINESSES.map((item, idx) => (
                        <article
                            key={item.id}
                            className="group relative rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md transition-all duration-700 ease-in-out hover:shadow-xl hover:-translate-y-1"
                            data-aos="fade-up"
                            data-aos-delay={idx * 200}
                        >
                            <div className="h-56 sm:h-64 md:h-72 relative">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {item.title}
                                </h3>
                                <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>

                {/* CTA Button */}
                <div
                    className="mt-14 text-center"
                    data-aos="fade-up"
                    data-aos-delay="600"
                >
                    <Link
                        to="/our-businesses"
                        className="inline-flex items-center px-8 py-3 rounded-md bg-emerald-600 text-white font-medium shadow-lg transition duration-700 ease-in-out hover:bg-emerald-700 hover:-translate-y-0.5"
                    >
                        View All Businesses
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