import React from 'react'
import EtatAv from '../assets/EtatAv.svg'
import CircleEA from '../assets/CircleEA.svg'
import  RectangleEA from '../assets/RectangleEA.svg'
import  EA1 from '../assets/1EA.svg'
import  EA2 from '../assets/2EA.svg'
import  EA3 from '../assets/3EA.svg'

const Avancement = () => {
  return (
    <div className='flex flex-col '>
      <div className='flex flex-row items-center justify-center'>
        <img src={CircleEA} alt='CircleEA' className='translate-x-[82%] w-40 h-40'/>
        <h1 className='text-5xl font-semibold z-10 tracking-tight text-center'>Etat d'avancement</h1>
        <img src={RectangleEA} alt='RectangleEA' className=' -translate-x-[85%] translate-y-[5%] w-64 h-64'/>
      </div>
      <div className='flex flex-row justify-around -translate-y-[3%]'>
        <div className='-translate-y-[15%] translate-x-[15%]'>
          <img src={EtatAv} alt='EtatAv' className='h-[85%] w-[85%]'/>
        </div>
        <div className='flex flex-col gap-y-[6%] translate-x-[15%]'>
          <div className='flex flex-col'>
            <div className='flex flex-row items-center text-center gap-x-3'>
              <img src={EA1} alt='EA1' className='w-[60px] h-[60px]'/>
              <h1 className='text-center font-semibold text-xl'>Collecte</h1>
            </div>
            <div className='text-center'>
              <h3 className='w-3/5 text-lg'>Stimulez la créativité en utilisant des méthodes de brainstorming et de réflexion.</h3>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-row items-center text-center gap-x-3'>
              <img src={EA2} alt='EA2' className='w-[60px] h-[60px]'/>
              <h1 className='text-center font-semibold text-xl'>Collecte</h1>
            </div>
            <div className='text-center'>
              <h3 className='w-3/5 text-lg'>Stimulez la créativité en utilisant des méthodes de brainstorming et de réflexion.</h3>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-row items-center text-center gap-x-3'>
              <img src={EA3} alt='EA3' className='w-[60px] h-[60px]'/>
              <h1 className='text-center font-semibold text-xl'>Collecte</h1>
            </div>
            <div className='text-center'>
              <h3 className='w-3/5 text-lg'>Stimulez la créativité en utilisant des méthodes de brainstorming et de réflexion.</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Avancement