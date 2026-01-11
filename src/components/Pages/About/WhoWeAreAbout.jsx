// import React, { useEffect, useRef, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// export default function WhoWeAreAbout() {
//     const [current, setCurrent] = useState(0);
//     const images = [
//         {
//             src: "https://images.unsplash.com/photo-1581090700227-4c4d1a3f3f3b?q=80&w=1600&auto=format&fit=crop",
//             alt: "Engineers collaborating in a modern workspace",
//             caption: "Precision in design. Clarity in delivery.",
//         },
//         {
//             src: "https://images.unsplash.com/photo-1581091012184-7c54a0b14c1a?q=80&w=1600&auto=format&fit=crop",
//             alt: "Robotics and automation environment",
//             caption: "Systems engineered for scale.",
//         },
//         {
//             src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1600&auto=format&fit=crop",
//             alt: "Smart city infrastructure at dusk",
//             caption: "Infrastructure that endures.",
//         },
//     ];

//     useEffect(() => {
//         const id = setInterval(() => setCurrent((p) => (p + 1) % images.length), 5000);
//         return () => clearInterval(id);
//     }, [images.length]);

//     const highlights = [
//         { icon: "🌐", title: "Global Presence" },
//         { icon: "⚙️", title: "Engineering Rigor" },
//         { icon: "♻️", title: "Sustainability" },
//         { icon: "🤝", title: "Trusted Partnerships" },
//     ];

//     return (
//         <section className="relative bg-white py-20 px-6 md:px-10" aria-labelledby="who-we-are-heading">
//             <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
//                 {/* Text column */}
//                 <div className="lg:col-span-6 xl:col-span-5" data-aos="fade-up">
//                     <p className="text-xs tracking-[0.18em] uppercase text-emerald-700/80">WHO WE ARE</p>
//                     <h2
//                         id="who-we-are-heading"
//                         className="mt-3 font-montserrat font-bold text-gray-900 tracking-tight leading-tight text-3xl sm:text-4xl md:text-5xl"
//                     >
//                         Engineering Excellence, Global Vision, Lasting Impact
//                     </h2>
//                     <div className="mt-5 space-y-4">
//                         <p className="text-gray-700 text-base md:text-lg leading-relaxed">
//                             We are a global engineering and technology partner shaping infrastructures that define tomorrow. Our approach blends
//                             technical mastery, disciplined governance, and human-centered design.
//                         </p>
//                         <p className="text-gray-700 text-base md:text-lg leading-relaxed">
//                             We deliver solutions built to perform at scale—resilient, secure, and aligned with international standards—so clients
//                             move from complexity to clarity.
//                         </p>
//                     </div>

//                     {/* Highlights */}
//                     <div className="mt-8 grid grid-cols-2 gap-6">
//                         {highlights.map((item, idx) => (
//                             <div
//                                 key={item.title}
//                                 className="flex items-center gap-3 rounded-lg border border-gray-200 p-4 transition duration-500 ease-in-out hover:border-emerald-500 hover:bg-emerald-50 hover:shadow-lg"
//                                 data-aos="fade-up"
//                                 data-aos-delay={200 + idx * 150}
//                             >
//                                 <span className="text-xl">{item.icon}</span>
//                                 <p className="text-gray-800 font-medium">{item.title}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Image Carousel */}
//                 <div className="lg:col-span-6 ">
//                     <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 h-[25rem] sm:h-[27rem]">
//                         {images.map((img, idx) => (
//                             <img
//                                 key={img.src}
//                                 src={img.src}
//                                 alt={img.alt}
//                                 className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-[2000ms] ease-in-out ${current === idx ? "opacity-100 scale-100" : "opacity-0 scale-105"
//                                     }`}
//                                 loading="lazy"
//                             />
//                         ))}
//                         {/* Overlay caption */}
//                         <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/50 to-transparent p-4">
//                             <p className="text-white/90 text-lg font-bold">{images[current].caption}</p>
//                         </div>
//                         {/* Navigation dots */}
//                         <div className="absolute bottom-4 right-4 flex gap-2">
//                             {images.map((_, idx) => (
//                                 <button
//                                     key={idx}
//                                     onClick={() => setCurrent(idx)}
//                                     className={`w-3 h-3 rounded-full transition duration-500 ease-in-out ${current === idx ? "bg-emerald-500" : "bg-white/60 hover:bg-white"
//                                         }`}
//                                     aria-label={`Slide ${idx + 1}`}
//                                 />
//                             ))}
//                         </div>
//                     </div>

//                     {/* Micro stats */}
//                     <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4" data-aos="fade-up">
//                         <Stat label="Years of Experience" value="20+" accent="emerald" />
//                         <Stat label="Global Locations" value="50+" accent="emerald" />
//                         <Stat label="Projects Delivered" value="300+" accent="emerald" />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// function Stat({ label, value, accent = "emerald" }) {
//     const colorClass = accent === "emerald" ? "text-emerald-600" : "text-indigo-600";
//     return (
//         <div className="rounded-xl border border-gray-200/80 p-4 bg-white transition-shadow duration-500 ease-in-out hover:shadow-lg">
//             <p className="text-xs uppercase tracking-wide text-gray-500 text-nowrap">{label}</p>
//             <p className={`mt-1 text-2xl font-semibold ${colorClass} text-nowrap`}>{value}</p>
//         </div>
//     );
// }\

import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhoWeAreAbout() {
    const [current, setCurrent] = useState(0);

    const images = [
        {
            src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            alt: "Engineers collaborating in a modern workspace",
            caption: "Precision in design. Clarity in delivery.",
        },
        {
            src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
            alt: "Robotics and automation environment",
            caption: "Systems engineered for scale.",
        },
        {
            src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1600&auto=format&fit=crop",
            alt: "Smart city infrastructure at dusk",
            caption: "Infrastructure that endures.",
        },
    ];

    useEffect(() => {
        // ✅ AOS initialization
        AOS.init({ duration: 1000, once: false, mirror: true, easing: "ease-out-cubic" });

        const id = setInterval(() => setCurrent((p) => (p + 1) % images.length), 5000);
        return () => clearInterval(id);
    }, [images.length]);

    const highlights = [
        { icon: "🌐", title: "Global Presence" },
        { icon: "⚙️", title: "Engineering Rigor" },
        { icon: "♻️", title: "Sustainability" },
        { icon: "🤝", title: "Trusted Partnerships" },
    ];

    return (
        <section className="relative bg-white py-20 px-6 md:px-10" aria-labelledby="who-we-are-heading">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                {/* Text column */}
                <div className="lg:col-span-6 xl:col-span-5">
                    <p className="text-xs tracking-[0.18em] uppercase text-emerald-700/80 " data-aos="fade-up">WHO WE ARE</p>
                    <h2
                        id="who-we-are-heading"
                        className="mt-3 font-montserrat font-bold text-gray-900 tracking-tight leading-tight text-3xl sm:text-4xl md:text-5xl"
                        data-aos="fade-up"
                    >
                        Engineering Excellence, Global Vision, Lasting Impact
                    </h2>
                    <div className="mt-5 space-y-4">
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed" data-aos="fade-up">
                            We are a global engineering and technology partner shaping infrastructures that define tomorrow. Our approach blends
                            technical mastery, disciplined governance, and human-centered design.
                        </p>
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed" data-aos="fade-up">
                            We deliver solutions built to perform at scale—resilient, secure, and aligned with international standards—so clients
                            move from complexity to clarity.
                        </p>
                    </div>

                    {/* Highlights */}
                    <div className="mt-8 grid grid-cols-2 gap-6">
                        {highlights.map((item, idx) => (
                            <div
                                key={item.title}
                                className="flex items-center gap-3 rounded-lg border border-gray-200 p-4 transition duration-500 ease-in-out hover:border-emerald-500 hover:bg-emerald-50 hover:shadow-lg"
                                data-aos="fade-up"
                                data-aos-delay={200 + idx * 150}
                            >
                                <span className="text-xl">{item.icon}</span>
                                <p className="text-gray-800 font-medium">{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Image Carousel */}
                <div className="lg:col-span-6 ">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 h-[25rem] sm:h-[27rem]" data-aos="fade-up">
                        {images.map((img, idx) => (
                            <img
                                key={img.src}
                                src={img.src}
                                alt={img.alt}
                                className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-[2000ms] ease-in-out ${current === idx ? "opacity-100 scale-100" : "opacity-0 scale-105"
                                    }`}
                                loading="lazy"
                            />
                        ))}
                        {/* Overlay caption */}
                        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                            <p className="text-white/90 text-lg font-bold">{images[current].caption}</p>
                        </div>
                        {/* Navigation dots */}
                        <div className="absolute bottom-4 right-4 flex gap-2">
                            {images.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrent(idx)}
                                    className={`w-3 h-3 rounded-full transition duration-500 ease-in-out ${current === idx ? "bg-emerald-500" : "bg-white/60 hover:bg-white"
                                        }`}
                                    aria-label={`Slide ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Micro stats */}
                    <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4" data-aos="fade-up">
                        <Stat label="Years of Experience" value="20+" accent="emerald" />
                        <Stat label="Global Locations" value="50+" accent="emerald" />
                        <Stat label="Projects Delivered" value="300+" accent="emerald" />
                    </div>
                </div>
            </div>
        </section>
    );
}

function Stat({ label, value, accent = "emerald" }) {
    const colorClass = accent === "emerald" ? "text-emerald-600" : "text-indigo-600";
    return (
        <div className="rounded-xl border border-gray-200/80 p-4 bg-white transition-shadow duration-500 ease-in-out hover:shadow-lg" data-aos="fade-up">
            <p className="text-xs uppercase tracking-wide text-gray-500 text-nowrap">{label}</p>
            <p className={`mt-1 text-2xl font-semibold ${colorClass} text-nowrap`}>{value}</p>
        </div>
    );
}

