import React from 'react';
import Navbar from './components/Navbar';
import HeroContact from './components/Hero';
import Form from "./pages/contact/Form"
import Map from './components/Map';
import Footer from './components/Footer';
import FooterText from './components/FooterText';
const ContactPage: React.FC = () => {
    return (
        <main>
            <Navbar />
            <HeroContact title='Contacto' />
            <Form />
            <Map />
            <Footer />
            <FooterText className='bg-[#FE81BD]' hoverColor='hover:text-blue-400' />
        </main>
    );
};

export default ContactPage;