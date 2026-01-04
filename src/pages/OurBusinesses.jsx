// src/components/OurBusinesses.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/* Config-driven data (replace with API/JSON as needed) */
const BUSINESS_VERTICALS = [
    {
        id: "infrastructure",
        title: "Infrastructure",
        description:
            "Large-scale EPC and infrastructure programs with disciplined delivery, governance, and measurable impact.",
        image:
            "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg",
        cta: { label: "Explore", to: "/businesses/infrastructure" },
    },
    {
        id: "clean-energy",
        title: "Clean Energy",
        description:
            "Utility-scale renewables across solar and wind, engineered for performance, reliability, and sustainability.",
        image:
            "https://images.pexels.com/photos/885350/pexels-photo-885350.jpeg",
        cta: { label: "Explore", to: "/businesses/clean-energy" },
    },
    {
        id: "mining",
        title: "Mining & Resources",
        description:
            "Resource operations with safety-first processes, technology integration, and long-term stakeholder value.",
        image:
            "https://images.pexels.com/photos/532178/pexels-photo-532178.jpeg",
        cta: { label: "Explore", to: "/businesses/mining" },
    },
    {
        id: "retail",
        title: "Retail & Distribution",
        description:
            "Modern retail ecosystems and distribution networks delivering scale, efficiency, and customer trust.",
        image:
            "https://images.pexels.com/photos/4481258/pexels-photo-4481258.jpeg",
        cta: { label: "Explore", to: "/businesses/retail" },
    },
    {
        id: "global-trade",
        title: "Global Trade",
        description:
            "Cross-border trade and supply chains executed with compliance, risk management, and operational precision.",
        image:
            "https://images.pexels.com/photos/262353/pexels-photo-262353.jpeg",
        cta: { label: "Explore", to: "/businesses/global-trade" },
    },
    {
        id: "technology",
        title: "Technology & Solutions",
        description:
            "Enterprise technology, automation, and platforms enabling data-driven decisions and scalable operations.",
        image:
            "https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg",
        cta: { label: "Explore", to: "/businesses/technology" },
    },
];

/* Reusable card component */
function BusinessCard({ item, inView }) {
    return (
        <article
            className={`group relative rounded-2xl overflow-hidden border border-gray-200/80 bg-white
                  shadow-[0_18px_50px_rgba(20,40,60,0.08)]
                  transition-all duration-500 ease-out
                  ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            aria-labelledby={`${item.id}-title`}
        >
            {/* Visual */}
            <div className="relative h-56 sm:h-64 md:h-72">
                <img
                    src={item.image}
                    alt={`${item.title} visual`}
                    className="absolute inset-0 h-full w-full object-cover
                     transition-transform duration-700 ease-out
                     group-hover:scale-[1.04]"
                    loading="lazy"
                />
                {/* Overlay gradient for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative p-5 sm:p-6">
                <h3
                    id={`${item.id}-title`}
                    className="font-montserrat font-semibold text-gray-900 text-xl"
                >
                    {item.title}
                </h3>
                <p className="mt-2 text-gray-700 text-sm sm:text-base leading-relaxed">
                    {item.description}
                </p>

                {/* CTA */}
                {item.cta?.to && (
                    <div className="mt-5">
                        <Link
                            to={item.cta.to}
                            className="inline-flex items-center rounded-md px-4 py-2
                         bg-emerald-600 text-white text-sm font-medium
                         shadow-[0_10px_30px_rgba(11,34,64,0.16)]
                         transition-all duration-300 ease-in-out
                         hover:bg-emerald-700 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(11,34,64,0.2)]
                         focus:outline-none focus:ring-2 focus:ring-emerald-400"
                            aria-label={`${item.cta.label} ${item.title}`}
                        >
                            {item.cta.label}
                            <svg
                                className="ml-2 h-4 w-4"
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
                )}
            </div>

            {/* Hover elevation and reveal layer */}
            <div
                className="pointer-events-none absolute inset-0 opacity-0
                   transition-opacity duration-500 ease-out
                   group-hover:opacity-100"
            >
                <div className="absolute inset-0 ring-1 ring-emerald-600/10 rounded-2xl" />
                <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_80%_120%,rgba(31,163,124,0.16),transparent)]" />
            </div>
        </article>
    );
}

/* Section component */
export default function OurBusinesses({
    label = "OUR BUSINESSES",
    heading = "Scale with discipline. Verticals with conviction.",
    items = BUSINESS_VERTICALS,
}) {
    const sectionRef = useRef(null);
    const [reveal, setReveal] = useState(false);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([entry]) => setReveal(entry.isIntersecting),
            { threshold: 0.12 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative bg-white"
            aria-labelledby="our-businesses-heading"
        >
            {/* Subtle background depth */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 to-white" />
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(800px_240px_at_20%_0%,rgba(31,163,124,0.06),transparent)]" />

            <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
                {/* Section header */}
                <div
                    className={`transition-all duration-700 ease-out
                      ${reveal ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                >
                    {label && (
                        <p className="text-xs tracking-[0.18em] uppercase text-emerald-700/80">
                            {label}
                        </p>
                    )}
                    <h2
                        id="our-businesses-heading"
                        className="mt-3 font-montserrat font-bold text-gray-900 leading-tight
                       text-3xl sm:text-4xl md:text-5xl"
                    >
                        {heading}
                    </h2>
                    <p className="mt-4 max-w-3xl text-gray-700 text-base md:text-lg leading-relaxed">
                        Multiple well-structured verticals executed with governance, technology, and scale. Each domain is managed
                        with disciplined processes and long-term accountability.
                    </p>
                </div>

                {/* Cards grid */}
                <div
                    className={`mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8
                      transition-all duration-700 ease-out
                      ${reveal ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    role="list"
                    aria-label="Business verticals"
                >
                    {items.map((item) => (
                        <BusinessCard key={item.id} item={item} inView={reveal} />
                    ))}
                </div>
            </div>
        </section>
    );
}