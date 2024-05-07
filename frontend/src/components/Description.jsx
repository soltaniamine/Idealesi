import React from 'react'
import khrbichaDB from '../assets/khrbichaDB.svg'
import khrbichaDJ from '../assets/khrbichaDJ.svg'
import Lightning from '../assets/Lightning.svg'
import sun from '../assets/sun.svg'
import shape2 from '../assets/shape2.svg'
import LaatD from '../assets/LaatD.svg'
import Profile from '../assets/Profile.svg'
import LogoIdealesi from '../assets/LogoIdealesi.svg'
import Student from '../assets/Student.svg'
import loulou from '../assets/loulou.svg'
import yellow from '../assets/yellow.svg'
import blue from '../assets/blue.svg'
import Bg1S2 from '../assets/Bg1S2.svg'
const Description = () => {

  return (
    <div className='flex flex-col relative -translate-y-[10%] w-[95vw] translate-x-[5vw] '>

      <div className=' toppart grid grid-cols-[11.5vw_1fr_11.5vw]'>

        <div className='topright flex flex-col justify-between'>
          <img src={shape2} alt="shape2" className='w-[40px]' />
          <img src={Lightning} alt="Lightning" className='w-[35px] mb-3' />
        </div>

        <div className=' flex flex-col items-center -translate-x-[5%]'>
          <h1 className='text-center absolute top-0 text-3xl font-semibold'  style={{ fontFamily: 'Product Sans ', fontSize:'33px' }}>Exploration Collaborative de la Cartographie Cérébrale<br />pour l'ESI : Analysez Ensemble</h1>
          <img src={khrbichaDJ} alt='khrbichaDJ' className='w-[55%] top-[4.7rem] absolute drop-shadow-lg ' />
          <h6 className='text-center w-[85%] text-xl mt-32 font-medium' style={{ fontFamily: 'Product Sans ', fontSize:'24px' }}>Idealesi est une plateforme web dédiée aux étudiants de l'École Nationale d'Informatique (ESI), conçue pour les soutenir dans leurs enseignants. </h6>
        </div>

        <div>
          <img src={sun} alt="sun" className='w-[30px] ml-16' />
          <img src={shape2} alt="shape2" className='w-[40px] mt-20' />
        </div>

      </div>

      <div className='grid grid-cols-[5vw_1fr] mt-10'>

        <div>
          <img src={LaatD} alt="LaatD" className='w-[60px] h-[60px] translate-x-[80%] -translate-y-[50%] drop-shadow-md relative z-20 ' />
        </div>

        <div className='relative z-10 grid grid-cols-[1fr_1fr_1fr_5vw] gap-10 drop-shadow-lg'>

          <div className='bg-[#818BE3] border-black border-dashed border-2 flex flex-col rounded-xl border-dashed-custom items-center p-4'style={{ borderSpacing: '16px' }}>
            <img src={Profile} alt="Profile" className='w-[12rem] drop-shadow-md -translate-y-[10%]' />
            <h3 className='text-xl font-semibold -translate-y-[130%]'style={{ fontFamily: 'Product Sans ', fontSize:'27px' }}>Enseignants</h3>
            <h6 className='text-center tracking-tighter -translate-y-[10%]'style={{ fontFamily: 'Product Sans ', fontSize:'24px' }}>Stimulez la créativité en utilisant des méthodes .Stimulez la créativité en utilisant des méthodes de brainstorming .</h6>
          </div>
          
          <div className='bg-[#818BE3] flex flex-col   border-black border-dashed border-2 rounded-xl items-center p-4'>
            <img src={LogoIdealesi} alt="LogoIdealesi" className='w-[10rem] drop-shadow-md -translate-y-[9%]' />
            <h3 className='text-xl font-semibold pt-3 -translate-y-[90%]'style={{ fontFamily: 'Product Sans ', fontSize:'27px' }}>Commuanité</h3>
            <h6 className='text-center tracking-tighter -translate-y-[10%]'style={{ fontFamily: 'Product Sans ', fontSize:'24px' }}>Stimulez la créativité en utilisant des méthodes .Stimulez la créativité en utilisant des méthodes de brainstorming .</h6>
          </div>

          <div className='bg-[#818BE3] flex flex-col  border-black border-dashed border-2 rounded-xl items-center p-4'>
            <img src={Student} alt="Student" className='w-[9rem] drop-shadow-lg -translate-y-[0%] mt-2' />
            <h3 className='text-xl font-semibold ml-3 -translate-y-[20%]'style={{ fontFamily: 'Product Sans ', fontSize:'27px' }}>Etudiants</h3>
            <h6 className='text-center tracking-tighter translate-y-[10%]'style={{ fontFamily: 'Product Sans ', fontSize:'24px' }}>Stimulez la créativité en utilisant des méthodes .Stimulez la créativité en utilisant des méthodes de brainstorming .</h6>
          </div>

        </div>
         
         <div className='buttompart'>
         <img src={yellow} alt="yellow" className='w-[40px] mt-1' />
         <div class=" w-[337px] h-[252px] bg-[#d4d7fc] rounded-[100%]   filter blur-[60px] absolute buttom-0 left-[74%] z-0"></div>
         <div class=" w-[400px] h-[300px] bg-[#d4d7fc] rounded-[100%]   filter blur-[30px] absolute top-[55%]  "></div>

         <img src={shape2} alt="shape2" className='w-[40px] absolute right-9  drop-shadow-md' />
         <img src={Lightning} alt="Lightning" className='w-[35px] absolute right-56 drop-shadow-md' />
         <img src={loulou} alt="tkhrbicha"  className='absolute right-0 top-[80%] z-20 drop-shadow-md'/>
         <img src={shape2} alt="shape2" className='w-[40px] absolute left-[20%] drop-shadow-md' />
         <img src={blue} alt="blue" className='w-[40px] absolute left-[40%] drop-shadow-md' />

         </div>

      </div>

    </div>

  )
}

export default Description
/*<div className='bg-[#818BE3] relative h-[90vh] w-[70vw] flex flex-col items-center justify-center mx-auto my-auto rounded-[2rem]'>
      <img src={LaatD} alt='LattD' className='w-[65px] h-[65px] absolute top-0 left-0 -translate-x-3 -translate-y-5'/>
      <h1 className='text-center absolute top-20 text-3xl font-semibold'>Exploration Collaborative de la Cartographie Cérébrale<br/>pour l'ESI : Analysez Ensemble</h1>
      <img src={khrbichaDJ} alt='khrbichaDJ' className='w-[55%] top-[9.5rem] absolute'/>
      <h6 className='text-center w-[85%] text-xl mt-28 font-medium'> 
        Idealesi est une plateforme web dédiée aux étudiants de l'École Nationale d'Informatique (ESI),
        conçue pour les soutenir dans leurs divers projets académiques tels que les travaux pratiques,
        les présentations, les travaux dirigés, les différentes activités organisées dans les clubs scientifiques,
        ainsi que les réunions avec les enseignants. Spécifiquement axée sur la phase cruciale d'idéation,
        Idealesi offre une interface interactive et collaborative. Elle encourage ainsi la communauté étudiante
        et professorale à partager, collecter et manipuler des idées de manière efficace et dynamique."
      </h6>
      <img src={khrbichaDB} alt='khrbichaDB' className='w-[30%] absolute bottom-0 right-0 translate-x-20 translate-y-5'/>
    </div>*/