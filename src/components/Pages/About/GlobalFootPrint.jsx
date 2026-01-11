import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";

const GlobalFootprint = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false, mirror: true, easing: "ease-out" });
    }, []);

    return (
        <section className="bg-gray-50 py-20 relative overflow-hidden">
            <div className="px-6 md:px-12 items-center">

                {/* <div>
                    <p className="text-xs tracking-[0.18em] uppercase text-emerald-700/80">Global Footprint</p>
                    <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
                        Connecting innovation and engineering excellence across the globe
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed space-y-4 mt-4">
                        <p> Our presence spans multiple continents, enabling us to deliver
                            cutting-edge solutions worldwide. From engineering hubs to global
                            partnerships, we leverage our expertise to make an international
                            impact.</p>

                        <p>With offices and projects spanning multiple continents, we leverage our global presence to deliver
                            localized solutions informed by international best practices. Our diverse team collaborates across
                            borders to drive innovation, sustainability, and impact in every endeavor.
                        </p>
                    </p>
                </div> */}
                <div data-aos="fade-up">
                    <p className="text-xs tracking-[0.18em] uppercase text-emerald-700/80" data-aos="fade-up">
                        Global Footprint
                    </p>
                    <h2 className="mt-5 text-3xl md:text-5xl font-bold text-gray-900" data-aos="fade-up">
                        Connecting innovation and engineering excellence across the globe
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed space-y-4 mt-4" data-aos="fade-up">
                        <p data-aos="fade-up" >
                            Our presence spans multiple continents, enabling us to deliver
                            cutting-edge solutions worldwide. From engineering hubs to global
                            partnerships, we leverage our expertise to make an international
                            impact.
                        </p>
                        <p data-aos="fade-up" >
                            With offices and projects spanning multiple continents, we leverage our global presence to deliver
                            localized solutions informed by international best practices. Our diverse team collaborates across
                            borders to drive innovation, sustainability, and impact in every endeavor.
                        </p>
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Image Section */}
                    <div className="" data-aos="fade-right">
                        <img
                            src="https://www.nicepng.com/png/detail/35-351325_world-map-png-transparent-background-high-resolution-world.png"
                            alt="Global Footprint Map"
                            className="w-full h-72 object-cover aspect-square rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    {/* Statistics Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div
                            className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center"
                            data-aos="fade-up"
                        >
                            <h4 className="text-3xl font-bold text-blue-600 mb-2">
                                <CountUp end={25} duration={2} />+
                            </h4>
                            <p className="text-gray-600 text-center text-nowrap">Offices Worldwide</p></div>
                        <div
                            className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <h4 className="text-3xl font-bold text-blue-600 mb-2">
                                <CountUp end={120} duration={2} />+
                            </h4>
                            <p className="text-gray-600 text-center text-nowrap">Projects Globally</p>
                        </div>
                        <div
                            className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <h4 className="text-3xl font-bold text-blue-600 mb-2">
                                <CountUp end={50} duration={2} />+
                            </h4>
                            <p className="text-gray-600 text-center">International Partnerships</p>
                        </div>
                        <div
                            className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <h4 className="text-3xl font-bold text-blue-600 mb-2">
                                <CountUp end={10} duration={2} />+
                            </h4>
                            <p className="text-gray-600 text-center text-nowrap">Innovation Hubs</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Optional Background Shapes */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 opacity-20 rounded-full -z-10"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 opacity-20 rounded-full -z-10"></div>
        </section>
    );
};

export default GlobalFootprint;

