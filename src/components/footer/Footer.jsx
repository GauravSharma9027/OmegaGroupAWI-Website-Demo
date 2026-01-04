// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-blue-950 mt-20">
            {/* Top Grid */}
            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-5 gap-10">
                {/* Company Info */}
                <div className="md:col-span-2">
                    <h3 className="font-montserrat font-bold text-xl text-green-600">OMEGA GROUP</h3>
                    <p className="mt-4 text-sm text-white/80 leading-relaxed">
                        A visionary consortium delivering excellence across infrastructure,
                        clean energy, mining, retail, and global trade.
                    </p>
                    <div className="mt-6 flex gap-4">
                        {/* Social Icons */}
                        <Link
                            to="#"
                            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-600 transition"
                            aria-label="LinkedIn"
                        >
                            <svg
                                className="w-5 h-5 text-white"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0zM8 8h4.8v2.2h.07c.67-1.2 2.3-2.47 4.74-2.47 5.07 0 6 3.34 6 7.68V24h-5v-7.2c0-1.72-.03-3.93-2.4-3.93-2.4 0-2.77 1.87-2.77 3.8V24H8z" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-semibold text-white">Quick Links</h4>
                    <ul className="mt-4 space-y-2 text-sm text-white/80">
                        <li>
                            <Link to="/about" className="hover:text-emerald-400 transition">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/businesses"
                                className="hover:text-emerald-400 transition"
                            >
                                Our Businesses
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/sustainability"
                                className="hover:text-emerald-400 transition"
                            >
                                Sustainability
                            </Link>
                        </li>
                        <li>
                            <Link to="/csr" className="hover:text-emerald-400 transition">
                                CSR
                            </Link>
                        </li>
                        <li>
                            <Link to="/careers" className="hover:text-emerald-400 transition">
                                Careers
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h4 className="font-semibold text-white">Resources</h4>
                    <ul className="mt-4 space-y-2 text-sm text-white/80">
                        <li>
                            <Link
                                to="/investors"
                                className="hover:text-emerald-400 transition"
                            >
                                Investors
                            </Link>
                        </li>
                        <li>
                            <Link to="/media" className="hover:text-emerald-400 transition">
                                News & Media
                            </Link>
                        </li>
                        <li>
                            <Link to="/privacy" className="hover:text-emerald-400 transition">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link to="/terms" className="hover:text-emerald-400 transition">
                                Terms of Use
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="font-semibold text-white">Contact</h4>
                    <ul className="mt-4 space-y-2 text-sm text-white/80">
                        <li>India: +91 11 4163 0318</li>
                        <li>UAE: +971 54 376 3729</li>
                        <li>info@omegainfram.com</li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-white/70 flex flex-col md:flex-row justify-between items-center">
                    <p>
                        © {new Date().getFullYear()} Omega Group Corporation. All rights
                        reserved.
                    </p>
                    <div className="flex gap-4 mt-3 md:mt-0">
                        <Link to="/sitemap" className="hover:text-emerald-400 transition">
                            Sitemap
                        </Link>
                        <Link to="/support" className="hover:text-emerald-400 transition">
                            Support
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}