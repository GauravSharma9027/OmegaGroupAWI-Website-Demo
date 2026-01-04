// src/components/Hero.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero({
  videoSrc = "https://videos.pexels.com/video-files/3184339/3184339-hd.mp4",
  posterSrc = "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
  heading = "Engineering Trust. Building Scale.",
  subheading = "Diversified corporate group across infrastructure, clean energy, mining, retail, and global trade.",
  primaryCta = { label: "Explore Our Businesses", to: "/businesses" },
  secondaryCta = { label: "Contact Us", to: "/contact" },
}) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: false,   // allow re-trigger
      mirror: true,  // reverse animation on scroll out
    });
  }, []);

  return (
    <section className="relative min-h-screen isolate">
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          className="h-full w-full object-cover"
          src={videoSrc}
          poster={posterSrc}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(1000px_400px_at_20%_20%,rgba(31,163,124,0.18),transparent)]" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center min-h-screen">
        <h1
          className="font-montserrat font-bold text-white text-4xl sm:text-5xl md:text-6xl leading-tight"
          data-aos="fade-up"
        >
          {heading}
        </h1>
        <p
          className="mt-4 max-w-2xl text-white/85 text-lg md:text-xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {subheading}
        </p>

        {/* CTAs */}
        <div
          className="mt-8 flex flex-wrap gap-4"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Link
            to={primaryCta.to}
            className="inline-flex items-center px-6 py-3 rounded-md bg-emerald-600 text-white font-medium shadow-lg transition duration-700 ease-in-out transform hover:-translate-y-0.5 hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-400"
          >
            {primaryCta.label}
          </Link>
          <Link
            to={secondaryCta.to}
            className="inline-flex items-center px-6 py-3 rounded-md bg-white/10 text-white font-medium border border-white/20 backdrop-blur transition duration-700 ease-in-out transform hover:-translate-y-0.5 hover:bg-white/20 focus:ring-2 focus:ring-white/50"
          >
            {secondaryCta.label}
          </Link>
        </div>

        {/* Trust Stats */}
        <div
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 text-white/80"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div>
            <p className="text-xs uppercase tracking-wide">Current & pipeline</p>
            <p className="text-2xl font-semibold">USD 300M+</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide">Global presence</p>
            <p className="text-2xl font-semibold">50+ locations</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide">Renewables target</p>
            <p className="text-2xl font-semibold">3 GW by FY26</p>
          </div>
        </div>
      </div>
    </section>
  );
}