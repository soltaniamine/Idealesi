import React from "react";
import { useState } from "react";
//import tkharbicha from '../../../assets/Acceuil/TypeProjet/tkharbicha.svg';
import combainaison from '../../../assets/combainaison.svg';
const Combainaison = () => {
    const [showDescription, setShowDescription] = useState(true);

  const handleButtonClick = () => {
    setShowDescription(prevState => !prevState);
  };

    return ( 
        <>
        {showDescription && (
        <div className="border rounded-xl p-2 bg-gray-50 w-full">
            <div className='flex justify-end items-end mb-2 mt-2'>
                <div className="flex-grow text-center">
                    <h2 className="font-bold mb-2 text-2xl " style={{ fontFamily: 'Product Sans' }}> Combainaison des idées</h2>
                </div>
                <button className=" hover:text-[#646FD4] mb-2 mt-2 flex justify-end items-end"   onClick={handleButtonClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 feather feather-x">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
            <hr className="border-t border-gray-300  " />

            {/* <div className="mt-[-4%] text-center">
                <img src={brainstorming} alt="Brainstorming icon" className="mx-auto  size-[70%]  " />
            </div> */}
            <div className=" relative mt-4 flex-grow text-center">
                    {/* <img className="absolute scale-x-[-1] w-6 h-6 ml-[36%]" src={tkharbicha} /> */}
                    <h2 className="font-semiBold mb-3 text-2xl  " style={{ fontFamily: 'Product Sans' }}>Description :</h2>

            </div>
            <div className="bg-[#f2f2f2] border border-t-2 rounded-xl p-2 ">
            <p className=" mb-2 text-s text-gray-600 mx-3" style={{ fontFamily: 'Product Sans' }}>
            Ce modèle structure la phase de combinaison où les idées collectées sont regroupées et intégrées en thèmes cohérents. Chaque section du modèle représente un thème spécifique, avec des idées associées rassemblées pour une exploration plus approfondie. Cela permet d'identifier les liens entre différentes idées et de fusionner les contributions pour former des propositions plus robustes. Idéal pour synthétiser les perspectives diverses et affiner les concepts avant la finalisation.

        </p>
            </div>
            <div className="bg-[#]">
            
            <div className="mt-4 flex-grow text-center">
            <h2 className="font-semiBold mb-3 text-2xl  " style={{ fontFamily: 'Product Sans' }}>Guide d'utilisation :</h2>
            </div>
            <img src={combainaison} alt="Brainstorming icon" className="ml-[0.5%]  size-[100%]  " />
            </div>
            
        </div>
       
        )}
         </>
     );
}

 
export default Combainaison;