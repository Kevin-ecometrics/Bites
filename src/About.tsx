import React from 'react';
import Navbar from './components/Navbar';
import HeroAbout from './pages/about/HeroAbout';
import AboutSection from './pages/about/About';
import Reviews from './pages/about/Reviews';
import FooterAbout from './pages/about/FooterAbout';
import FooterText from './components/FooterText';

const About: React.FC = () => {
    return (
        <div>
            <Navbar />
            <HeroAbout  />
            <AboutSection />
            <Reviews />
            <FooterAbout />
            <FooterText className='bg-[#6BBAE9]'  hoverColor='hover:text-pink-400'/>
        </div>
    );
};

export default About;