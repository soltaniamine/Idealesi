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
import Bg1S2 from '../assets/Bg1S2.svg'
const Description = () => {
  return (
    <div className='flex flex-col relative -translate-y-[10%] w-[95vw] translate-x-[5vw]'>
      <div className='grid grid-cols-[11.5vw_1fr_11.5vw]'>
        <div className='flex flex-col justify-between'>
          <img src={shape2} alt="shape2" className='w-[40px]'/>
          <img src={Lightning} alt="Lightning" className='w-[35px]'/>
        </div>
        <div className='flex flex-col items-center -translate-x-[5%]'>
          <h1 className='text-center absolute top-0 text-3xl font-semibold'>Exploration Collaborative de la Cartographie Cérébrale<br/>pour l'ESI : Analysez Ensemble</h1>
          <img src={khrbichaDJ} alt='khrbichaDJ' className='w-[40%] top-[4.5rem] absolute'/>
          <h6 className='text-center w-[85%] text-xl mt-32 font-medium'>Idealesi est une plateforme web dédiée aux étudiants de l'École Nationale d'Informatique (ESI), conçue pour les soutenir dans leurs enseignants. </h6>
        </div>
        <div>
          <img src={sun} alt="sun" className='w-[30px]'/>
          <img src={shape2} alt="shape2" className='w-[40px]'/>
        </div>
      </div>
      <div className='grid grid-cols-[5vw_1fr] mt-10'>
        <div>
          <img src={LaatD} alt="LaatD" className='w-[60px] h-[60px] translate-x-[80%] -translate-y-[50%]'/>
        </div>
        <div className='grid grid-cols-[1fr_1fr_1fr_5vw] gap-10'>
          <div className='bg-[#818BE3] flex flex-col rounded-xl items-center p-3'>
            <img src={Profile} alt="Profile" className='w-[12rem] -translate-y-[10%]'/>
            <h3 className='text-xl font-semibold -translate-y-[130%]'>Enseignants</h3>
            <h6 className='text-center tracking-tighter -translate-y-[30%]'>Stimulez la créativité en utilisant des méthodes .Stimulez la créativité en utilisant des méthodes de brainstorming .</h6>
          </div>
          <div className='bg-[#818BE3] flex flex-col rounded-xl items-center p-3'>
            <img src={LogoIdealesi} alt="LogoIdealesi" className='w-[10rem] -translate-y-[10%]'/>
            <h3 className='text-xl font-semibold -translate-y-[100%]'>Commuanité</h3>
            <h6 className='text-center tracking-tighter -translate-y-[10%]'>Stimulez la créativité en utilisant des méthodes .Stimulez la créativité en utilisant des méthodes de brainstorming .</h6>
          </div>
          <div className='bg-[#818BE3] flex flex-col rounded-xl items-center p-3'>
            <img src={Student} alt="Student" className='w-[9rem] -translate-y-[4%]'/>
            <h3 className='text-xl font-semibold -translate-y-[60%]'>Etudiants</h3>
            <h6 className='text-center tracking-tighter translate-y-[5%]'>Stimulez la créativité en utilisant des méthodes .Stimulez la créativité en utilisant des méthodes de brainstorming .</h6>
          </div>
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