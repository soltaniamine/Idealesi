import React from "react";
import { useState } from "react";
import brainwriting from './../../assets/brainwriting.svg' ;

const Brainwriting = () => {
    const [showDescription, setShowDescription] = useState(true);

  const handleButtonClick = () => {
    setShowDescription(prevState => !prevState);
  };

    return ( 
        <>
        {showDescription && (
        <div className="border rounded-xl p-2 bg-gray-50 w-full  ">
            <div className='flex justify-end items-end mb-2 mt-2'>
                <div className="flex-grow text-center">
                    <h2 className="font-bold mb-2 text-2xl " style={{ fontFamily: 'Product Sans' }}>Brain-Writing</h2>
                </div>
                <button className=" hover:text-[#646FD4] mb-2 mt-2 flex justify-end items-end"   onClick={handleButtonClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 feather feather-x">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
            <hr className="border-t border-gray-300  " />

            <div className=" text-center">
                <img src={brainwriting} alt="Brainstorming icon" className="mx-auto  size-[70%]  " />
            </div>
            <div className="  mt-4 flex-grow text-center">
                    <h2 className="font-semiBold mb-3 text-2xl  " style={{ fontFamily: 'Product Sans' }}>Description :</h2>

            </div>
            <div className="bg-[#f2f2f2] border border-t-2 rounded-xl p-2 ">
            <p className=" mb-2 text-s text-gray-600 mx-3" style={{ fontFamily: 'Product Sans' }}>
            Ce modèle organise une session de brainwriting où les participants, restant anonymes, ajoutent et développent des idées sur des cartes colorées. Chaque colonne représente un participant, facilitant le suivi des contributions individuelles, et encourageant ainsi une collaboration efficace et créative.            </p>
            </div>

            <div className="mt-4 flex-grow text-center">
                    <h2 className="font-semiBold mb-2 text-xl text-gray-500 " style={{ fontFamily: 'Product Sans' }}>Mot clés :</h2>
            </div>
            <p className=" mb-2 text-sm text-gray-600 " style={{ fontFamily: 'Product Sans' }}>
            Brainwriting , Collaboration anonyme , Idéation, Contributions individuelles , Échange d'idées , Développement d'idées .   
            </p>
        </div>
      )}
      </>
  );
 }
export default Brainwriting;