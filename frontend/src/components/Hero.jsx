import React from 'react'
import textS from '../assets/textS.svg'
import stk from '../assets/stk.svg'
import Vector from '../assets/Vector.svg'
import Star from '../assets/Star.svg'
import Sticker from '../assets/Sticker.svg'
import Group from '../assets/Group.svg'
import { Button } from "@/components/ui/button"
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className=' flex flex-col relative'>

      <div className='flex justify-between pl-48 pr-20'>
        <img src={stk} alt="text" className='w-[80px] h-[80px] translate-y-4  ' />
        <img src={textS} alt="sticker" className='w-[150px] h-[150px] mr-6 ' />
      </div>

      <div className='  title flex flex-row items-center justify-center -translate-y-16 relative'>

        <div class=" w-[337px] h-[252px] bg-[#dbddfd] rounded-[100%]   filter blur-[75px] absolute -top-40 left-[25%] z-0"></div>

        <h1 className='text-[#000000] text-center text-8xl font-[620] -tracking-[.05em] relative z-20'>
          <span className="text-shadow" style={{ textShadow: '2px 4px 4px rgba(0, 0, 0, 0.5)' }}>I</span>
          <span className="text-shadow" style={{ textShadow: '2px 4px 4px rgba(0, 0, 0, 0.5)' }}>D</span>
          <span className="text-shadow" style={{ textShadow: '2px 4px 4px rgba(0, 0, 0, 0.5)' }}>E</span>
          <span className="text-shadow" style={{ textShadow: '2px 4px 4px rgba(0, 0, 0, 0.5)' }}>A</span>
          <span className="text-shadow" style={{ textShadow: '2px 4px 4px rgba(0, 0, 0, 0.5)' }}>L</span>
        </h1>


        <div className='flex flex-row -translate-x-20 relative z-20'>
          <img src={Vector} alt='' className='w-[90px] h-[90px] translate-x-14 -translate-y-4 z-30' />
          <h1 className='text-[#262F98] text-center text-8xl font-[620] -tracking-[.05em] relative z-20'>
            <span className="text-shadow" style={{ textShadow: '2px 4px 4px rgba(0, 0, 0, 0.5)' }}>E</span>
            <span className="text-shadow" style={{ textShadow: '2px 4px 4px rgba(0, 0, 0, 0.5)' }}>S</span>
            <span className="text-shadow" style={{ textShadow: '2px 4px 4px rgba(0, 0, 0, 0.5)' }}>I</span>
          </h1>
        </div>


      </div>


      <div className=' flex flex-row justify-center'>

        <div class="cercle2 w-[400px] h-[300px] bg-[#dbddfd] rounded-[100%] filter blur-[75px] absolute left-[-6%] top-56 z-0"></div>
        <img src={Sticker} alt='sticker' className='w-[375px] h-[375px] -translate-y-32 translate-x-20' />

        <div className=' soustitre -translate-x-40 w-full -translate-y-4 '>
          <h1 className='text-[#000000] slogan font-[420] '>
            Libérez votre <span className='text-[#262F98]'>créativité</span><img src={Star} alt='star' className='w-[17px] h-[17px] inline translate-y-2 ml-1' />faites<br />
            naître l'innovation avec Idealesi
          </h1>
        </div>

      </div>

      <div className='flex items-center justify-center translate-y-[-13rem] relative'>

        <Link to='/register'>
          <Button className='relative z-20 w-[230px] h-[70px] rounded-[40px] py-6 bg-gradient-to-r from-[#27319C] to-[#0E1136] flex items-center justify-between px-5 shadow-lg hover:scale-105'>
            <span className="font-semibold text-white text-[25px]" style={{ fontFamily: 'Product Sans ' }}>Get started</span>
            <div className=' rounded-[100%] w-10 h-10 bg-white'>
              <GoArrowRight className=" absolute text-black w-8 h-8 mt-1 ml-1 z-10 " style={{ marginRight: '2rem' }} />
            </div>
          </Button>

        </Link>
        <img src={Group} className='absolute right-32 w-[170px] h-[170px] z-20' />
        <div class="w-[400px] h-[280px] bg-[#dbddfd] rounded-[100%]   filter blur-[85px] absolute z-0 -right-8 -top-16"></div>

      </div>

    </div>
  )
}

export default Hero