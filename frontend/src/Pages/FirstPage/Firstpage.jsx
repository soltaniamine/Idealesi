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
import './Firstpage.css'
function Firstpage() {

  return (
    <div className=' '>
      <div className='sm:pr-16 pr-6 flex justify-center items-center'>
        <div className='xl:max-w-[1280px] w-full'>
          <Navbar />
        </div>
      </div>
      <div className=' flex justify-center items-start pt-10'>
        <div className='xl:max-w-[1280px] w-full'>
          <Hero />
        </div>
      </div>
      <div className=''>
        <div className=''>
          <Description />
          <Avancement />
          <Collecte />
          <Reflexion />
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
