import React from "react";
import { useState } from "react";
import chapeaux from '../../../assets/chapeaux.svg' ;
import tkharbicha from '../../../assets/Acceuil/TypeProjet/tkharbicha.svg';

const Chapeaux = () => {
    const [showDescription, setShowDescription] = useState(true);

  const handleButtonClick = () => {
    setShowDescription(prevState => !prevState);
  };

    return ( 
        <>
        {showDescription && (
        <div className="border rounded-xl p-2 bg-gray-50 w-[45%]  ">
            <div className='flex justify-end items-end mb-2 mt-2'>
                <div className="flex-grow text-center">
                    <h2 className="font-bold mb-2 text-2xl " style={{ fontFamily: 'Product Sans' }}>Six chapeaux de la réflexion</h2>
                </div>
                <button className=" hover:text-[#646FD4] mb-2 mt-2 flex justify-end items-end"   onClick={handleButtonClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 feather feather-x">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
            <hr className="border-t border-gray-300  " />

            <div className="mt-[2%] text-center">
                <img src={chapeaux} alt="Brainstorming icon" className="ml-[18%]  size-[70%]  " />
            </div>
            <div className=" relative  flex-grow text-center mt-[-4%]">
                    <img className="absolute scale-x-[-1] w-6 h-6 ml-[36%]" src={tkharbicha} />
                    <h2 className="font-semiBold mb-3 text-2xl  " style={{ fontFamily: 'Product Sans' }}>Description :</h2>

            </div>
            <div className="bg-[#f2f2f2] border border-t-2 rounded-xl p-2 ">
            <p className=" mb-2 text-s text-gray-600 mx-3" style={{ fontFamily: 'Product Sans' }}>
            Le modèle des "Six Chapeaux de la réflexion" de Edward de Bono utilise six perspectives symbolisées par des chapeaux de différentes couleurs pour structurer la pensée. Le chapeau blanc se concentre sur les faits et données, le rouge exprime émotions et intuitions, le noir évalue les risques, le jaune cherche les avantages, le vert stimule la créativité, et le bleu gère et organise la réflexion. Cette méthode favorise une analyse complète et variée des situations.
            </p>
            </div>

            <div className="mt-4 flex-grow text-center">
                    <h2 className="font-semiBold mb-2 text-xl text-gray-500 " style={{ fontFamily: 'Product Sans' }}>Mot clés :</h2>
            </div>
            <p className=" mb-2 text-sm text-gray-600 " style={{ fontFamily: 'Product Sans' }}>
            Pensée structurée , Faits , Émotions , Risques , Avantages , Gestion de la réflexion , Méthode de Bono .            </p>
        </div>
     )}
     </>
 );
}

 
export default Chapeaux;