import Navbar from './Navbar.jsx';
import { Outlet } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import vec from '../assets/vec.svg'

const LayoutWithNavbar = () => {
    const [scrollOpacity, setScrollOpacity] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const maxScroll = 350; // Adjust this value to determine when the navbar should be fully opaque
            const opacity = Math.min(scrollPosition / maxScroll, 1);
            setScrollOpacity(opacity);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
        <div style={{ backgroundColor: `rgba(255, 255, 255, ${scrollOpacity})`, backgroundImage: `url(${vec})`, backgroundSize: '105%' }} className='bg-white  bg-opacity-10 shadow-md bg-center  sm:pr-16 pr-6 flex justify-center items-center sticky top-0 z-10'>
            <div className=' xl:max-w-[1600px] w-full md'>
                <Navbar scrollOpacity={scrollOpacity} />
            </div>
        </div>
        <Outlet /> 
        </div>
    )
}
export default LayoutWithNavbar


