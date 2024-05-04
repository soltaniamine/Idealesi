import React from 'react'
import EtatAv from '../assets/EtatAv.svg'
import CircleEA from '../assets/CircleEA.svg'
import RectangleEA from '../assets/RectangleEA.svg'
import EA1 from '../assets/1EA.svg'
import EA2 from '../assets/2EA.svg'
import EA3 from '../assets/3EA.svg'

const Avancement = () => {
  return (
    <div className='flex flex-col '>

      <div className='flex flex-row items-center justify-center mb-12 '>
        <img src={CircleEA} alt='CircleEA' className='translate-x-[82%] w-40 h-40 drop-shadow-md' />
        <h1 className='text-5xl font-semibold tracking-tight text-center ' style={{ fontFamily: `Product sans` }}>Etat d'avancement</h1>
        <img src={RectangleEA} alt='RectangleEA' className=' -translate-x-[85%] translate-y-[5%] w-64 h-64 -z-10 drop-shadow-xl' />
      </div>

      <div className='flex flex-row justify-around -translate-y-[3%]'>


        <div className='-translate-y-[15%] translate-x-[15%]'>
          <div class=" w-[337px] h-[252px] bg-[#d4d7fc] filter blur-[60px] absolute -left-32 Bottom-0 -z-10"></div>
          <img src={EtatAv} alt='EtatAv' className='h-[85%] w-[85%]' />
        </div>

        <div className='flex flex-col gap-y-[6%] translate-x-[15%]'>

          <div className='flex flex-col'>

            <div className='flex flex-row items-center text-center gap-x-3'>
              <img src={EA1} alt='EA1' className='w-[60px] h-[60px] drop-shadow-md' />
              <h1 className='text-center font-semibold text-2xl drop-shadow-lg' style={{ fontFamily: `Product sans` }}>Collecte</h1>
            </div>

            <div className='text-center'>
              <h3 className='w-3/5 text-lg  ' style={{ fontFamily: `Product sans` }}>Stimulez la créativité en utilisant des méthodes de brainstorming et de réflexion.</h3>
            </div>

          </div>

          <div className='flex flex-col'>
            <div className='flex flex-row items-center text-center gap-x-3'>
              <img src={EA2} alt='EA2' className='w-[60px] h-[60px]' />
              <h1 className='text-center font-semibold text-2xl' style={{ fontFamily: `Product sans` }}>Manipulation</h1>
            </div>

            <div className='text-center'>
              <h3 className='w-3/5 text-lg' style={{ fontFamily: `Product sans` }}>Organisez visuellement vos idées pour une meilleure compréhension.</h3>
            </div>
          </div>

          <div className='flex flex-col'>

            <div className='flex flex-row items-center text-center gap-x-3'>
              <img src={EA3} alt='EA3' className='w-[60px] h-[60px]' />
              <h1 className='text-center font-semibold text-2xl' style={{ fontFamily: `Product sans` }}>Décision Finale</h1>
              <div class=" w-[337px] h-[252px] bg-[#d4d7fc] filter blur-[70px] absolute bottom-32 right-0 -z-10"></div>

            </div>

            <div className='text-center'>
              <h3 className='w-3/5 text-lg ' style={{ fontFamily: `Product sans` }}>Facilitez la prise de décision en tenant compte des évaluations et priorités établies.</h3>
            </div>

          </div>


        </div>
      </div>
    </div>
  )
}

export default Avancement