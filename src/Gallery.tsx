import React from 'react';
import Gallery from './pages/gallery/Gallery';
// import Footer from './pages/index/Footer';
import Navbar from './components/Navbar';

const Galery: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Gallery />
            {/* <Footer /> */}
        </div>
    );
};

export default Galery;