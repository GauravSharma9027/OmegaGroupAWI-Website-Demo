import React from 'react'
import Hero from '../components/Pages/Home/Hero'
import WhoWeAre from '../components/Pages/Home/WhoWeAre'
import OurBusinesses from '../components/Pages/Home/OurBusinesses'
import SustainabilityMissionSection from '../components/Pages/Home/SustainabilityMissionSection'
import CareersPreview from '../components/Pages/Home/CareersPreview'

const Home = () => {
    return (
        <div className='space-y-16'>
            <Hero
                variant="video"
                // videoSrc="https://videos.pexels.com/video-files/3184339/3184339-hd.mp4"
                posterSrc="https://marketingaccesspass.com/wp-content/uploads/2015/10/Podcast-Website-Design-Background-Image.jpg"
                heading="Engineering trust. Building scale."
                subheading="Infrastructure, clean energy, mining, retail, and global trade."
                primaryCta={{ label: "Explore Our Businesses", to: "/businesses" }}
                secondaryCta={{ label: "Contact Us", to: "/contact" }}
                align="left"
            />
            <WhoWeAre
                heading="We build trust at scale."
                paragraphs={[
                    "Omega Group is a diversified corporate enterprise trusted across infrastructure, clean energy, mining, retail, and global trade.",
                    "We combine engineering rigor with governance and sustainability, delivering projects that strengthen communities and create long-term value.",
                    "With a presence across multiple geographies and a pipeline of strategic investments, we operate with precision, integrity, and accountability."
                ]}
                values={[
                    "Integrity & governance",
                    "Scalable execution",
                    "Innovation & sustainability",
                    "Partnership & impact"
                ]}
                visual={{
                    type: "image",
                    src: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
                    alt: "Senior leadership meeting in a modern corporate boardroom"
                }}
            />
            <OurBusinesses />
            <SustainabilityMissionSection/>
            <CareersPreview/>
        </div>
    )
}

export default Home
