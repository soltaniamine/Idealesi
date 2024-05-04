import React from 'react'
import brainstorming from '../assets/brainstoming.svg'
import '../Pages/FirstPage/Firstpage.css'

const Brainstorming = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-screen items-center justify-center bg-gradient-to-b from-[#bbc3fe] to-[#E6E9FF] ">
      <div className="flex-1 flex flex-col items-start justify-center p-10 space-y-16 translate-y-10">

        <h1 className="font-bold text-4xl -translate-y-6" style={{ fontFamily: 'Product Sans ', fontSize:'33px' }}>Initiez la collecte et l'innovation de vos idées par le brainstorming dans IdealESI</h1>

        <p className="text-xl -translate-y-16" style={{ fontFamily: 'Product Sans ' }}>
        Découvrez nos sessions collaboratives de brainstorming, spécialement conçues pour les étudiants et les professeurs de l'ESI. Elles offrent des outils intuitifs et prêts à l'emploi qui encouragent la créativité et la collaboration dans un environnement académique. Avec notre solution, les utilisateurs peuvent facilement organiser des sessions de brainstorming pour explorer des sujets variés, de la résolution de problèmes complexes à l'élaboration de projets innovants. Notre interface collaborative permet à chaque participant de contribuer activement, favorisant ainsi une dynamique de groupe enrichissante et productive. Idéale pour l'éducation, notre plateforme aide à structurer les idées, à développer des solutions collectives et à intégrer facilement ces processus dans les workflows académiques de l'ESI.
        </p>

        <button className= " bg-[#9846e0] border-2 border-[#6f4a8e]  text-white px-4 py-2 rounded-full hover:bg-[#6f4a8e] -translate-y-20 transition duration-300"style={{ fontFamily: 'Product Sans ' }}>
        Brainstormez dès maintenant !
        </button>

      </div>


      <div className="flex-1 -translate-y-8 ">
        <img src={brainstorming} alt="Brainstorming Example" className="w-full h-auto -translate-x-6" />
      </div>

    </div>
  )
}

export default Brainstorming