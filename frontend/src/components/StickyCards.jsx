import { projects } from '../Data/data'
import Card from './Card'
import { useScroll } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import khrbicha from '../assets/khrbicha.svg'
import khrbicha2 from '../assets/khrbicha2.svg'
import RectangleJPhman from '../assets/RectangleJPhman.svg'
import JRainbow from '../assets/JRainbow.svg'
import bgsticky from '../assets/bgsticky.svg'

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  return (
    <main ref={container} className="main bg-cover  mb-9" style={{ backgroundImage: `url(${bgsticky})` }}>

      <div className='flex flex-row items-center justify-center'>

        <div className='absolute left-0 top-36 buttom-11 drop-shadow-md '>
          <div class=" w-[337px] h-[252px] bg-[#d4d7fc] rounded-[100%] filter blur-[60px] absolute -z-10"></div>
          <img src={khrbicha} alt='khrbicha'  />
        </div>

        <div className='flex flex-row items-center justify-center self-center translate-x-[8%] translate-y-16'>
          <div><img src={JRainbow} alt='JRainbow' className=' h-24 translate-x-[40%]' /></div>
          <div className='z-10'><h1 className='text-4xl font-bold tracking-tight text-center drop-shadow-lg' style={{ fontFamily: `Product sans` }}>Les phases de manipulation des idées</h1></div>
          <div><img src={RectangleJPhman} alt='RectangleJPhman' className=' w-[17rem] h-[17rem] drop-shadow-md -translate-x-[102%] translate-y-[5%]' /></div>
        </div>

      </div>

      {
        projects.map((project, i) => {
          const targetScale = 1 - ((projects.length - i) * 0.05);
          return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale} />
        })
      }


      <div className='absolute right-0 -bottom-12 drop-shadow-md'>
        <div class=" w-[337px] h-[252px] bg-[#d4d7fc] rounded-[100%]   filter blur-[60px] absolute -z-10"></div>
        <img src={khrbicha2} alt='khrbicha2' />
      </div>
    </main>
  )
}