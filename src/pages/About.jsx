// AboutPage.jsx
import { motion } from "framer-motion";
import WhoWeAreAbout from "../components/Pages/About/WhoWeAreAbout";
import FutureOfEngineering from "../components/Pages/About/FutureOfEngineering";
import GlobalFootprint from "../components/Pages/About/GlobalFootPrint";
import HeroAbout from "../components/Pages/About/HeroAbout";



export default function About() {

    return (
        <div className="bg-gray-50 text-gray-900">
            {/* hero section */}
            <HeroAbout />
            {/* WHO WE ARE */}
            <WhoWeAreAbout id="whoWeAre" />
            {/* FUTURE OF ENGINEERING */}
            <FutureOfEngineering />
            {/* GLOBAL FOOTPRINT */}
            <GlobalFootprint />
        </div>
    );
}



