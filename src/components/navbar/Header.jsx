import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // if using React Router
import Logo from '../../assets/Logo.jpeg';
const menuData = [
    {
        title: "Home",
        href: "/",
        sections: [],
    },
    {
        title: "About Us",
        href: "/about",
        sections: [
            { title: "Company Overview", href: "/about#overview" },
            { title: "Vision & Mission", href: "/about#vision" },
            { title: "Leadership", href: "/about#leadership" },
            { title: "Timeline / Journey", href: "/about#timeline" },
        ],
    },
    {
        title: "Our Businesses",
        href: "/businesses",
        sections: [
            { title: "Infrastructure", href: "/businesses#infra" },
            { title: "Energy & Renewables", href: "/businesses#energy" },
            { title: "Mining & Minerals", href: "/businesses#mining" },
            { title: "Retail & E‑Com", href: "/businesses#retail" },
            { title: "Trading & Exports", href: "/businesses#trading" },
        ],
    },
    {
        title: "Sustainability",
        href: "/sustainability",
        sections: [
            { title: "Environment", href: "/sustainability#environment" },
            { title: "Innovation", href: "/sustainability#innovation" },
            { title: "Carbon Offset", href: "/sustainability#carbon" },
        ],
    },
    {
        title: "CSR",
        href: "/csr",
        sections: [
            { title: "Community Development", href: "/csr#community" },
            { title: "Education", href: "/csr#education" },
            { title: "Skills & Livelihoods", href: "/csr#skills" },
        ],
    },
    {
        title: "Investors",
        href: "/investors",
        sections: [
            { title: "Financial Reports", href: "/investors#reports" },
            { title: "Shareholder Info", href: "/investors#shareholders" },
            { title: "Corporate Governance", href: "/investors#governance" },
        ],
    },
    {
        title: "News & Media",
        href: "/media",
        sections: [
            { title: "Press Releases", href: "/media#press" },
            { title: "Gallery", href: "/media#gallery" },
            { title: "In the News", href: "/media#news" },
        ],
    },
    {
        title: "Careers",
        href: "/careers",
        sections: [
            { title: "Open Positions", href: "/careers#jobs" },
            { title: "Life at Omega", href: "/careers#life" },
            { title: "Graduate Programs", href: "/careers#graduates" },
        ],
    },
    {
        title: "Contact Us",
        href: "/contact",
        sections: [
            { title: "India Office", href: "/contact#india" },
            { title: "UAE Office", href: "/contact#uae" },
            { title: "General Enquiries", href: "/contact#enquiries" },
        ],
    },
];

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [hoverIndex, setHoverIndex] = useState(null);
    const location = useLocation(); // current route

    return (
        <header className="fixed top-0 inset-x-0 z-50 bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-14 h-14 rounded-[50rem]" >
                        <img src={Logo} alt="Omega Group Logo" className="rounded-[50rem]"/>
                    </div>
                    <span className="font-bold text-gray-900">OMEGA GROUP</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex gap-6 pr-6">
                    {menuData.map((item, i) => {
                        const isActive = location.pathname === item.href;
                        return (
                            <div
                                key={item.title}
                                className="relative"
                                onMouseEnter={() => setHoverIndex(i)}
                                onMouseLeave={() => setHoverIndex(null)}
                            >
                                <Link
                                    to={item.href}
                                    className={`text-sm lg:text-xs py-1  font-medium uppercase transition text-nowrap ${isActive
                                        ? "text-emerald-600 border-b-2 border-emerald-600"
                                        : "text-gray-800 hover:text-emerald-600"
                                        }`}
                                >
                                    {item.title}
                                </Link>
                                {item.sections.length > 0 && (
                                    <div
                                        className={`absolute left-0 top-full mt-2 bg-white border rounded shadow transition-all duration-300 ${hoverIndex === i
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 pointer-events-none translate-y-2"
                                            }`}
                                    >
                                        <div className="p-3 grid gap-2">
                                            {item.sections.map((sec) => (
                                                <Link
                                                    key={sec.title}
                                                    to={sec.href}
                                                    className="text-sm text-nowrap text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 px-2 py-1 rounded"
                                                >
                                                    {sec.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </nav>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="lg:hidden p-2"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d={
                                mobileOpen
                                    ? "M6 18L18 6M6 6l12 12"
                                    : "M4 6h16M4 12h16M4 18h16"
                            }
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Drawer */}
            {mobileOpen && (
                <div className="lg:hidden fixed inset-0 z-40">
                    {/* Overlay */}
                    <div
                        className="absolute inset-0 bg-black/40 transition-opacity duration-300"
                        onClick={() => setMobileOpen(false)}
                    />
                    {/* Drawer */}
                    <div className="absolute right-0 top-0 h-full w-72 bg-white shadow-xl transform transition-transform duration-300 ease-in-out translate-x-0">
                        <div className="flex justify-between items-center p-4 border-b">
                            <span className="font-bold text-gray-900">Menu</span>
                            <button
                                onClick={() => setMobileOpen(false)}
                                className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            >
                                <svg
                                    className="w-6 h-6 text-gray-800"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="p-6 space-y-4">
                            {menuData.map((item, i) => {
                                const isActive = location.pathname === item.href;
                                return (
                                    <div
                                        key={item.title}
                                        className="group"
                                        onMouseEnter={() => setHoverIndex(i)}
                                        onMouseLeave={() => setHoverIndex(null)}
                                    >
                                        <a
                                            href={item.href}
                                            className={`block font-medium px-2 py-2 rounded transition ${isActive
                                                ? "text-emerald-600 border-l-4 border-emerald-600 bg-emerald-50"
                                                : "text-gray-900 hover:text-emerald-600 hover:bg-gray-50"
                                                }`}
                                        >
                                            {item.title}
                                        </a>
                                        {item.sections.length > 0 && (
                                            <div
                                                className={`pl-4 mt-1 space-y-1 transition-all duration-300 ease-in-out ${hoverIndex === i
                                                    ? "opacity-100 max-h-40"
                                                    : "opacity-0 max-h-0 overflow-hidden"
                                                    }`}
                                            >
                                                {item.sections.map((sec) => (
                                                    <a
                                                        key={sec.title}
                                                        href={sec.href}
                                                        className="block text-sm text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 px-2 py-1 rounded"
                                                    >
                                                        {sec.title}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}