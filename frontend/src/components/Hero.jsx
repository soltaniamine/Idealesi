import React from 'react'
import textS from '../assets/textS.svg'
import stk from '../assets/stk.svg'
import Vector from '../assets/Vector.svg'
import Star from '../assets/Star.svg'
import Sticker from '../assets/Sticker.svg'
import Group from '../assets/Group.svg'
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-between pl-48 pr-20'>
        <img src={stk} alt="text" className='w-[80px] h-[80px] translate-y-4'/>
        <img src={textS} alt="sticker" className='w-[150px] h-[150px]'/>
      </div>
      <div className='flex flex-row items-center justify-center -translate-y-16'>
        <h1 className='text-[#000000] text-center text-8xl font-[620] -tracking-[.05em]'>IDEAL</h1>
        <div className='flex flex-row -translate-x-20'>
        <img src={Vector} alt='' className='w-[90px] h-[90px] translate-x-14 -translate-y-4'/>
        <h1 className='text-[#262F98] text-center text-8xl font-[620] -tracking-[.05em]'>ESI</h1>
        </div>
      </div>
      <div className='flex flex-row justify-center'>
        <img src={Sticker} alt='sticker' className='w-[375px] h-[375px] -translate-y-32 translate-x-20'/>
        <div className=' -translate-x-40 w-full -translate-y-4'>
        <h1 className='text-[#000000] slogan font-[420]'>
          Libérez votre <span className='text-[#262F98]'>créativité</span><img src={Star} alt='star' className='w-[17px] h-[17px] inline translate-y-2 ml-1'/>faites<br/>
          naître l'innovation avec Idealesi
        </h1>
        </div>
      </div>
      <div className='flex items-center justify-center translate-y-[-13rem] relative'>
        <Link to='/register'><Button className='rounded-full py-6'>Get started</Button></Link>
        <img src={Group} className='absolute right-32 w-[170px] h-[170px]'/>
      </div>
    </div>
  )
}

export default Hero