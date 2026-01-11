import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BgImg from "../../../assets/HeroBgImg.jpg";
const HeroAbout = () => {
    useEffect(() => {
        AOS.init({ duration: 1200, once: true, easing: "ease-out-cubic" });
    }, []);

    return (
        <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-gray-950">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={BgImg}
                    alt="Engineering Innovation"
                    className="w-full h-full object-cover object-center"
                />
            </div>
            {/* Content */}
            <div className="relative max-w-6xl mx-auto px-6 md:px-12 text-center">
                <p
                    className="text-sm tracking-[0.25em] uppercase text-emerald-400 mb-6"
                    data-aos="fade-up"
                >
                    About Us
                </p>
                <h1
                    className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-lg"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    Engineering Excellence, Global Vision, Lasting Impact
                </h1>
                <p
                    className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    We are a global engineering and technology partner shaping infrastructures that define tomorrow.
                    Our approach blends technical mastery, disciplined governance, and human-centered design —
                    delivering solutions that perform at scale and endure over time.
                </p>

                {/* CTA */}
                <div
                    className="mt-10 flex justify-center gap-6"
                >
                    <a
                        href="#who-we-are"
                        className="px-8 py-3 border-2 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-semibold shadow-xl hover:scale-105 transition-transform duration-500"
                    >
                        Discover More
                    </a>
                    {/* <button
                        onClick={() =>
                            document.getElementById("who-we-are")?.scrollIntoView({ behavior: "smooth" })
                        }
                        // className="px-8 py-3 rounded-lg border border-gray-400 text-gray-300 hover:text-white hover:border-white transition"
                        className="px-8 py-3 w-fit backdrop-blur-md bg-white/10 border-2 border-white rounded-xl hover:shadow-lg transition"
                    >
                        Scroll ↓
                    </button> */}
                </div>
            </div>
        </section>
    );
};

export default HeroAbout;


