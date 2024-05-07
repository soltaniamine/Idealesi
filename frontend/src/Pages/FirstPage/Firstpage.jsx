import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Description from '../../components/Description'
import Avancement from '../../components/Avancement'
import Collecte from '../../components/Collecte'
import Reflexion from '../../components/Reflexion'
import Manipulation from '../../components/Manipulation'
import StickyCards from '../../components/StickyCards'
import Testimonials from '../../components/Testimonials'
import Footer from '../../components/Footer'
import vec from '../../assets/vec.svg'
import methode from '../../assets/methode.svg'


import './Firstpage.css'
function Firstpage() {

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
    <div className=' '>
      
      <div className=' flex justify-center items-start pt-10 bg-center bg-cover  ' style={{ backgroundImage: `url(${vec})` }}>
        <div className='  xl:max-w-[1280px] w-full'>
          <Hero />
        </div>
      </div>

      <div className=''>
        <div className=''>
          <div className='  bg-cover bg-left-top' style={{ backgroundImage: `url(${vec})` }}>
            <Description />
            <Avancement />
          </div>

          <div className=' rounded-b-[98px] mb-9 bg-cover' style={{ backgroundImage: `url(${methode})` }}>
            <Collecte />
            <Reflexion />
          </div>
          <Manipulation />
          <StickyCards />
          <Testimonials />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Firstpage
