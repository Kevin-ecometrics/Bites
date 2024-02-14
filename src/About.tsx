import React from 'react';
import Navbar from './components/Navbar';
import HeroAbout from './pages/HeroAbout';
import AboutSection from './pages/About';
import Reviews from './pages/Reviews';
import FooterAbout from './pages/FooterAbout';
import FooterText from './pages/FooterText';

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