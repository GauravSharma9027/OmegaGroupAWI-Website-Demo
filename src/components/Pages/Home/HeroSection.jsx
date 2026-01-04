// HeroSection.jsx
import React from "react";
import './HeroSection'

const labels = [
    { text: "POWER T&D", top: "20%", left: "10%" },
    { text: "BUILDINGS & FACTORIES", top: "25%", left: "35%" },
    { text: "WATER", top: "15%", left: "55%" },
    { text: "RAILWAYS", top: "20%", left: "70%" },
    { text: "URBAN INFRASTRUCTURE", top: "30%", left: "85%" },
    { text: "OIL & GAS", top: "50%", left: "90%" },
];

const HeroSection = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                className="absolute w-full h-full object-cover"
            >
                <source src="/earth-rotation.mp4" type="video/mp4" />
            </video>

            {/* Overlay for darkening */}
            <div className="absolute w-full h-full bg-black/40"></div>

            {/* Labels Animation */}
            {labels.map((label, index) => (
                <span
                    key={index}
                    className="absolute text-white font-semibold opacity-0 animate-label"
                    style={{
                        top: label.top,
                        left: label.left,
                        animationDelay: `${index * 0.5}s`,
                    }}
                >
                    {label.text}
                </span>
            ))}

            {/* Central Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">
                    A leading Global Engineering and Construction company
                </h1>
                <p className="text-white text-lg md:text-2xl mb-8">
                    Listed in India with a diversified portfolio of projects worldwide.
                </p>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                    KNOW MORE
                </button>
            </div>
        </div>
    );
};

export default HeroSection;
