import React, { useState } from 'react';
import templatephoto from "../../../assets/Acceuil/Home/templatephoto.svg";
import brainwriting from '../../../assets/brainwriting.svg';
import combinaison from '../../../assets/combinaison.svg';
import raffinement from '../../../assets/raffinnement.svg';
import moscow from '../../../assets/moscow.svg';
import Modal from '../../../Pages/Board/Modal';
const Templatescard = ({text,step}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const stepDetails = {
        Brainwriting: {
            title: "Brain-Writing Help",
            image: brainwriting,
            description: " Ce modèle organise une session de brainwriting où les participants, restant anonymes, ajoutent et développent des idées sur des cartes colorées. Chaque colonne représente un participant, facilitant le suivi des contributions individuelles, et encourageant ainsi une collaboration efficace et créative."
        },
        Combinaison: {
            title: "Combinaison des idées",
            image: combinaison,
            description: " Ce modèle structure la phase de combinaison où les idées collectées sont regroupées et intégrées en thèmes cohérents. Chaque section du modèle représente un thème spécifique, avec des idées associées rassemblées pour une exploration plus approfondie.Cela permet d identifier les liens entre différentes idées et de fusionner les contributions pour former des propositions plus robustes. Idéal pour synthétiser les perspectives diverses et affiner les concepts avant la finalisation."
        },
        Raffinement: {
            title: "Raffinement et Expansion des idées",
            image: raffinement,
            description: " Ce modèle guide les équipes à travers un processus structuré pour transformer des idées initiales en solutions concrètes et détaillées. Il se divise en plusieurs phases,allant de la collecte des idées brutes à leur raffinement final. Chaque phase du modèle est conçue pour explorer, évaluer, et enrichir les idées, en utilisant des cartes colorées pour faciliter la visualisation et l'organisation des pensées. Le processus encourage une approche systématique pour identifier les points forts, combler les lacunes, et développer des fonctionnalités, aboutissant à des propositions bien formées et prêtes à l'implémentation. Ce modèle est particulièrementefficace pour des équipes cherchant à optimiser leur créativité et à concrétiser leurs concepts innovants.  "
        },
        Moscow: {
            title: "Matrice de priorité de MoSCoW",
            image: moscow,
            description: " La matrice de priorité de MoSCoW est un outil de gestion de projet utilisé pour hiérarchiser les exigences en quatre catégories : -Doit avoir- pour les indispensables, -Devrait avoir- pour les importants mais non essentiels, -Pourrait avoir- pour les souhaitables qui ne sont pas critiques, et -Ne devrait pas avoir- pour les éléments les moins prioritaires. Ce modèle aide à clarifier les priorités dans le développement de projets, assurant une allocation efficace des ressources et des efforts selon l'urgence et l'importance des tâches.   "
        }
    };

      
    return ( 
        <div 
            className='h-[100%] bg-mypurple3 rounded-lg' 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className='text-white h-[70%] flex justify-center items-center  cursor-pointer'>
                <img className="size-16" src={templatephoto} alt="" />
            </div>
            {isHovered ? (
                <div className='h-[30%] flex justify-around items-center bg-white rounded-lg'>
                    <button onClick={() => setShowModal(true)} className="bg-mypurple px-3 py-1 rounded-lg text-xs text-white">description</button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                </div>
            ) : (
                <div className='h-[30%] flex justify-center items-center bg-white rounded-lg'>
                    <p className='text-xs'>{text}</p>
                </div>
            )}
            <Modal isOpen={showModal} close={() => setShowModal(false)}>
                <h1>{stepDetails[step].title}</h1>
                <img src={stepDetails[step].image} alt={stepDetails[step].title} style={{ width: '100%', maxWidth: '700px' }} />
                <p>{stepDetails[step].description}</p>
            </Modal>
        </div>
     );
}
 
export default Templatescard;
