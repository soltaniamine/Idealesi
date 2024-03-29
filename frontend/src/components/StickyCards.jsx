import { projects } from '../Data/data'
import Card from './Card'
import { useScroll } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import khrbicha from '../assets/khrbicha.svg'
import khrbicha2 from '../assets/khrbicha2.svg'
import RectangleJPhman from '../assets/RectangleJPhman.svg'
import JRainbow from '../assets/JRainbow.svg'

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  return (
    <main ref={container} className="main">
      <div className='flex flex-row items-center justify-center'>
        <div className='absolute left-0 top-32'>
          <img src={khrbicha} alt='khrbicha' className=' w-28 h-28'/>
        </div>
        <div className='flex flex-row items-center justify-center self-center translate-x-[8%]'>
          <div><img src={JRainbow} alt='JRainbow' className=' w-24 h-24 translate-x-[45%]'/></div>
          <div className='z-10'><h1 className='text-3xl font-bold tracking-tight text-center'>Les phases de manipulation des idées</h1></div>
          <div><img src={RectangleJPhman} alt='RectangleJPhman' className=' w-[17rem] h-[17rem] -translate-x-[102%] translate-y-[4%]'/></div>
        </div>
      </div>
      {
        projects.map( (project, i) => {
          const targetScale = 1 - ( (projects.length - i) * 0.05);
          return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
        })
      }
      <div className='absolute right-0 bottom-0'>
          <img src={khrbicha2} alt='khrbicha2' className=' w-28 h-28'/>
        </div>
    </main>
  )
}