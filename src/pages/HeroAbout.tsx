import React from 'react';

type HeroAboutProps = {
    title?: string;
};

const HeroAbout: React.FC<HeroAboutProps> = ({title}) => {
    return (
        <main className='relative'>
            <div className='absolute inset-0 bg-black bg-opacity-50'></div>
            <img src="/src/assets/hero_about.png" className='w-screen h-[550px]' alt="" />
            <div className='absolute inset-0 flex items-center justify-center'>
                <h1 className='text-white text-6xl font-poppins font-bold'>
                    {title}
                </h1>
            </div>
        </main>
    );
};
export default HeroAbout;