import React from 'react'
import EdealEsiIcon from '../assets/EdealEsiIcon.svg'
import FacebookIcon from '../assets/FacebookIcon.svg'
import InstagramIcon from '../assets/InstagramIcon.svg'
import GithubIcon from '../assets/GithubIcon.svg'
import LinkedinIcon from '../assets/LinkedinIcon.svg'




const Footer = () => {
  return (
    <div id="Footer" className=" bg-[#242F9B] text-white py-16 px-[5vw] relative ">
      <div className="flex justify-between items-start">

        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <img src={EdealEsiIcon} alt="EdealEsi Icon" className="w-12 h-12" />
            <h1 className="text-3xl font-semibold">Idealesi</h1>
          </div>
          <p className="text-sm">
            Libérez votre créativité faites<br />
            naître l'innovation avec Idealesi
          </p>

          <div className="flex space-x-4">
            <img src={FacebookIcon} alt="Facebook Icon" className="w-6 h-6" />
            <img src={InstagramIcon} alt="Instagram Icon" className="w-6 h-6" />
            <img src={GithubIcon} alt="Github Icon" className="w-6 h-6" />
            <img src={LinkedinIcon} alt="Linkedin Icon" className="w-6 h-6" />
          </div>

        </div>

        <div className="text-sm mr-10 mt-4">
          <h1 className="font-semibold text-xl">Address</h1>
          <p>
            Ecole Nationale Supérieure<br />
            d'Informatique (ESI ex.INI), Alger,<br />
            Oued Smar 16309
          </p>
        </div>
        
        <div className="text-sm">
          <h1 className="font-semibold">Phone</h1>
          <p>+2136736748476</p>
          <h1 className="font-semibold mt-4">Email</h1>
          <p>idealesi@gmail.com</p>
        </div>

      </div>
    </div>
  );
};

export default Footer