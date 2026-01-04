// src/components/CareersScroll.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const CARDS = [
    {
        id: "engineering",
        title: "Engineering Team",
        description: "Driving scalable technology solutions that power global operations.",
        image: "https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg",
    },
    {
        id: "marketing",
        title: "Marketing & Communications",
        description: "Building global brand impact with insight-driven storytelling.",
        image: "https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg",
    },
    {
        id: "sustainability",
        title: "Sustainability",
        description: "Advancing social & environmental responsibility with measurable outcomes.",
        image: "https://images.pexels.com/photos/1230157/pexels-photo-1230157.jpeg",
    },
    {
        id: "operations",
        title: "Operations & Delivery",
        description: "Executing disciplined programs from planning to performance at scale.",
        image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
    },
];

export default function CareersScroll() {
    const scrollRef = useRef(null);
    const intervalRef = useRef(null);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        const autoScroll = () => {
            if (!container || paused) return;
            container.scrollLeft -= 1; // right-to-left
            if (container.scrollLeft <= 0) {
                container.scrollLeft = container.scrollWidth - container.clientWidth;
            }
        };

        intervalRef.current = setInterval(autoScroll, 20); // smoother, smaller step
        return () => clearInterval(intervalRef.current);
    }, [paused]);

    return (
        <section className="relative bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    {/* Left Content */}
                    <div className="lg:col-span-5">
                        <p className="text-xs uppercase tracking-[0.2em] text-emerald-700/80">
                            JOIN OUR MISSION
                        </p>
                        <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                            Build a Better Future With Us
                        </h2>
                        <p className="mt-5 text-gray-700 text-base md:text-lg leading-relaxed">
                            We’re a serious, long-term enterprise where talented people build real impact.
                            Explore roles across engineering, operations, sustainability, and more—grow your career
                            while contributing to something larger.
                        </p>
                        <div className="mt-8">
                            <Link
                                to="/careers"
                                className="inline-flex items-center rounded-md px-6 py-3
                           bg-emerald-600 text-white font-medium
                           shadow-lg transition duration-700 ease-in-out
                           hover:bg-emerald-700 hover:-translate-y-0.5 hover:shadow-xl
                           focus:outline-none focus:ring-2 focus:ring-emerald-400"
                            >
                                Explore Careers
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

                    {/* Right Auto-Scroll Cards */}
                    <div className="lg:col-span-7">
                        <div
                            ref={scrollRef}
                            className="flex gap-6 overflow-x-hidden"
                        >
                            {CARDS.map((card) => (
                                <article
                                    key={card.id}
                                    className="flex-shrink-0 w-72 rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md transition duration-700 ease-in-out hover:shadow-xl hover:-translate-y-1"
                                    onMouseEnter={() => setPaused(true)}
                                    onMouseLeave={() => setPaused(false)}
                                >
                                    <div className="h-40 relative">
                                        <img
                                            src={card.image}
                                            alt={card.title}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
                                    </div>
                                    <div className="p-5">
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            {card.title}
                                        </h3>
                                        <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                                            {card.description}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}