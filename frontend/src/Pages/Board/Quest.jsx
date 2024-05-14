// Quest.js
import React, { useState } from 'react';
import Modal from './Modal';
import questionsIcon from '../../assets/questions.svg';
import brainwriting from './../../assets/brainwriting.svg';
import combinaison from './../../assets/combinaison.svg';
import raffinement from './../../assets/raffinnement.svg';
import moscow from './../../assets/moscow.svg';
import brainstorming from './../../assets/brainstorming.svg';

const Quest = ({ step }) => {
  const [showModal, setShowModal] = useState(false);
  const stepDetails = {
    Brainwriting: {
        title: "Brain-Writing Help",
        image: brainwriting,
        description: " Ce modèle organise une session de brainwriting où les participants, restant anonymes, ajoutent et développent des idées sur des cartes colorées. Chaque colonne représente un participant, facilitant le suivi des contributions individuelles, et encourageant ainsi une collaboration efficace et créative."
    },
    Brainstorming:{
      title: "Brainstorming Help",
      image: brainstorming,
      description: "Ce modèle de brainstorming favorise la collaboration en permettant aux participants de noter et organiser leurs idées avec des notes adhésives sur un tableau virtuel. Il aide à visualiser et relier les idées pour développer des solutions innovantes"

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
    <>
      <button className='fixed z-10 bottom-3 left-3 bg-white h-8 px-2 hover:bg-transparent bg-transparent'
              onClick={() => setShowModal(true)}>
        <img src={questionsIcon} alt="Help" className='w-[23px] h-[23px]' />
      </button>

      <Modal isOpen={showModal} close={() => setShowModal(false)}>
        <h1>{stepDetails[step].title}</h1>
        <img src={stepDetails[step].image} alt={stepDetails[step].title} style={{ width: '100%', maxWidth: '900px' }} />
        <p>{stepDetails[step].description}</p>
      </Modal>
    </>
  );
};



export const QuestSkeleton = ()=> {
  return(
    <div className='fixed bottom-3 left-3 bg-white h-8'/>
  )
}

export default Quest;

