import React from 'react'
import prio from '../assets/prio.svg'

const Prio = () => {
  return (
    <div className='flex flex-col md:flex-row w-full h-[130vh] items-center justify-center bg-gradient-to-b from-[#5961B4] to-[#dadada]  p-10 relative '>

      <div className=" text-center w-full max-w-6xl ">
        <div className='-translate-y-[9.5rem]'>

          <h2 className="text-4xl  -translate-y-[6rem] font-bold " style={{ fontFamily: 'Product Sans ' }}>
            Affinez et Élargissez : Sculptez vos Idées vers l'Excellence avec IdealESI
          </h2>

          <p className="text-xl mb-4 -translate-y-[4rem]  max-w-full leading-tight " style={{ fontFamily: 'Product Sans ' }}>
            Explorez la phase de raffinement et d'expansion sur IdealESI, où vos idées collectées sont transformées en propositions détaillées et optimisées. Cette étape essentielle permet d'affiner les concepts initiaux en analysant leurs forces et faiblesses, en ajoutant des fonctionnalités innovantes et en éliminant les redondances. Le processus vise à intégrer efficacement chaque idée améliorée dans des projets académiques ou professionnels, boostant ainsi la productivité et assurant que les résultats finaux sont à la fois pratiques et avant-gardistes.                    </p>
        </div>

        <div className="absolute bottom-0 -translate-x-[2rem] ">

          <img src="" alt= " Descriptive Image" className="w-full" />
        </div>

      </div>

    </div>
  )
}

export default Prio