import React from 'react'
import EdealEsiIcon from '../assets/EdealEsiIcon.svg'
import FacebookIcon from '../assets/FacebookIcon.svg'
import InstagramIcon from '../assets/InstagramIcon.svg'
import GithubIcon from '../assets/GithubIcon.svg'
import LinkedinIcon from '../assets/LinkedinIcon.svg'

const Footer = () => {
  return (
    <div className='bg-[#242F9B] py-10'>
    <div className='grid grid-cols-3 w-[90vw] translate-x-[5vw]'>
      <div className='flex flex-col'>
        <div className='flex flex-row items-center'>
          <img src={EdealEsiIcon} alt="EdealEsiIcon" className='w-[3rem]'/>
          <h1 className='text-white text-3xl font-semibold'>Idealesi</h1>
        </div>
        <div>
          Libérez votre créativité   faites<br />
          naître l'innovation avec Idealesi
        </div>
        <div className='flex flex-row'>
          <img src={FacebookIcon} alt="FacebookIcon" />
          <img src={InstagramIcon} alt="InstagramIcon" />
          <img src={GithubIcon} alt="GithubIcon" />
          <img src={LinkedinIcon} alt="LinkedinIcon" />
        </div>
      </div>
      <div className='flex flex-col'>
        <h1>Address</h1>
        <h6>Ecole Nationale Supérieure<br/>d'Informatique (ESI ex.INI), Alger,<br/> Oued Smar 16309</h6>
      </div>
      <div className='flex flex-col'>
        <h1>Phone</h1>
        <h6>+2136736748476</h6>
        <h1>Email</h1>
        <h6>idealesi@gmail.com</h6>
      </div>
    </div>
    </div>
  )
}

export default Footer