import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import Sidebar from "../Home/Sidebar";
import education from '../../../assets/Acceuil/TypeProjet/image 23.svg';
import club from '../../../assets/Acceuil/TypeProjet/idee-de-genie 1.svg';
import rectangleclaire from '../../../assets/Acceuil/TypeProjet/rectangleclaire.svg';
import tkharbicha from '../../../assets/Acceuil/TypeProjet/tkharbicha.svg';
import triangle from '../../../assets/Acceuil/TypeProjet/triangle.svg';
import cercle from '../../../assets/Acceuil/TypeProjet/cercle.svg';
import './TypeProjet.css'
import photo from "../../../assets/Acceuil/TypeProjet/profile.png";
import { Link } from 'react-router-dom';
import Notification from "../notification-et-profile/notification";
import Profilee from "../notification-et-profile/profile";

const TypeProjet = ({ buttonColor }) => {
  const [stIsHovered, changeBlur1] = useState(true);
  const [ndIsHovered, changeBlur2] = useState(true);
  const [showNotification, setShowNotification] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  
  // Récupérer les données de l'URL
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const uid = params.get('uid');
  const technique = params.get('tech');

  const handleButtonClick = () => {
    setShowNotification(prevState => !prevState);
  };
  const handleProfileClick = () => {
    setShowProfile(prevState => !prevState);
  };

  return (
    <div className="grid grid-cols-6 bg-mypurple mt-[1,1%] ">
      <Sidebar className="col-span-1" buttonColor={buttonColor}></Sidebar>

      <div className=" bg-mypurple h-screen col-span-5  mt-[1,1%] ">
        <div className="bg-white h-[98.9%] mt-[1.1%] rounded-tl-2xl">
          <div className="relative w-full h-[9%] border-b-2 text-black  flex justify-end  items-center ">
            <div className=" w-32 flex  mt-2 items-center justify-around mr-5 mb-3 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
              </svg>
              <button onClick={handleButtonClick}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>
              </button>
                 {showNotification && 
                 <div className="absolute right-4 top-16 notification z-50 h-[20%] w-[40%] ">
                  <Notification/>
                  </div>
                  }
                <button onClick={handleProfileClick}>
                    <div className="w-10 h-10 overflow-hidden rounded-full ">
                      <img src={photo} alt="" />
                    </div>
                </button>
                {showProfile && 
                 <div className="absolute  ml-[76%] mt-[18%]  z-50 h-[20%] w-[100%] ">
                  <Profilee/>
                  </div>
                }
            </div>
          </div>

          <div className=" recent w-[96,5%] h-[90%] ml-8 mr-8  ">
            <div className="posssss flex mb-4 w-100  ">
              <h1 className=" text-3xl mt-8 border-b-2 border-yellow-200 ">Selectionner le type de votre projet</h1>
              <img className=" sou w-16 h-16 mr-40" src={tkharbicha} />
            </div>

            <div className="flex justify-around mt-10 h-[78%] w-[100%] group">
              <Link onMouseEnter={() => { changeBlur1(true); changeBlur2(false) }} onMouseLeave={() => { changeBlur1(true); changeBlur2(true) }} className={`h-[100%] w-[40%] hover:border-blue-800  duration-500  col-span-1  rounded-lg border-4  border-blue-500 ${stIsHovered ? "" : "blur-sm scale-[0.85]"}`} to={`/Niveau?uid=${uid}&tech=${technique}`}>
                <stchoice className="h-[100%] cursor-pointer " >
                  <img className="mb-6 " src={cercle} />
                  <div className=" posss flex flex-col items-center " >
                    <h1 className=" place-self-center z-10 text-3xl font-semibold ">Projet Pédagogique</h1>
                    <img className=" z-0 line  w-[75%] mt-4 ml-auto" src={rectangleclaire} />
                  </div>
                  <div className=" mt-10 flex items-center justify-center">
                    <img className=" size-36" src={education} />
                  </div>
                  <img src={cercle} />
                  <img className=" object-none object-right-top w-40 h-14 " src={triangle} />
                </stchoice>
              </Link>
              <Link onMouseEnter={() => { changeBlur1(false); changeBlur2(true) }} onMouseLeave={() => { changeBlur1(true); changeBlur2(true) }} className={`h-[100%] w-[40%] hover:border-blue-800  duration-500  col-span-1  rounded-lg border-4  border-blue-500 ${ndIsHovered ? "" : "blur-sm scale-[0.85]"}`} to={`/clubs?uid=${uid}&tech=${technique}`}>
                <ndchoice className=" " >
                  <img className="mb-6 " src={cercle} />
                  <div className=" posss flex flex-col items-center  " >
                    <h1 className=" place-self-center z-10 text-3xl  font-semibold ">Projet d'un club</h1>
                    <img className="z-0 line w-[75%] mt-2 ml-auto    " src={rectangleclaire} />
                  </div>
                  <div className=" mt-10 flex items-center justify-center">
                    <img className=" size-36" src={club} />
                  </div>
                  <img src={cercle} />
                  <img className="object-none object-right-top w-40 h-14 " src={triangle} />
                </ndchoice>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TypeProjet;
