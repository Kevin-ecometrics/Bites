import React from 'react';
import Gallery from './pages/Gallery';
import Footer from './pages/Footer';
import Navbar from './components/Navbar';

const Galery: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Gallery />
            <Footer />
        </div>
    );
};

export default Galery;