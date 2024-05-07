import React from 'react'
import prio from '../assets/prio.svg'

const Prio = () => {
  return (
    <div className='flex flex-col md:flex-row w-full h-[180vh] items-center justify-center bg-gradient-to-b from-[#8f96dd] to-[#fffcfc]  p-10 relative '>

      <div className=" text-center w-full max-w-6xl ">
        <div className='-translate-y-[15rem]'>

          <h2 className="text-4xl  -translate-y-[4rem] font-bold " style={{ fontFamily: 'Product Sans ' }}>
            Définissez vos Priorités : Éclairer le Chemin vers l'Innovation avec IdealESI          </h2>

          <p className="text-xl mb-4 -translate-y-[2rem]  max-w-full leading-tight " style={{ fontFamily: 'Product Sans ' }}>
            Explorez la phase de priorisation, un processus essentiel pour aligner vos projets avec les objectifs cruciaux grâce à une évaluation stratégique des idées. Cette étape utilise des méthodes diverses comme MoSCoW, Eisenhower, et Value vs. Effort pour classer les idées par urgence, importance, et effort nécessaire, optimisant l'utilisation des ressources et guidant les décisions stratégiques. Cette approche flexible garantit une évaluation équitable des propositions, favorisant la sélection des initiatives les plus prometteuses pour le succès du projet.
          </p>
          
        </div>

        <div className="absolute bottom-0 -translate-x-[2rem] -translate-y-[25rem] ">
          <img src={prio} alt=" Descriptive Image" className="w-full" />
        </div>

        <h1 className="text-2xl font-medium translate-y-[20rem] " style={{ fontFamily: 'Product Sans' }}>
          Après la phase de manipulation, le projet passe de la théorie à la pratique, transformant les idées prioritaires en actions concrètes. Cette transition assure que les efforts de planification se concrétisent en résultats tangibles, guidant le projet vers son succès. L'importance de l'exécution après la priorisation est cruciale pour réaliser les objectifs définis et maximiser l'impact global.
        </h1>
      </div>

    </div>
  )
}

export default Prio