import React from 'react'
import comb from '../assets/combinaison.svg'

const Combinaison = () => {
    return (
        <div className='flex flex-col md:flex-row w-full h-[140vh] items-center justify-center bg-gradient-to-b from-[#a6b0fe] to-[#fcd3f5] p-10 relative '>

            <div className=" text-center w-full max-w-6xl ">
                <div className='-translate-y-[9.5rem]'>
                    <h1 className="text-5xl font-medium  -translate-y-[13rem] mt-20" style={{ fontFamily: 'Product Sans' }}>
                        De la Collecte à la Manipulation : Transformez vos idées en actions avec IdealESI.        </h1>

                    <h2 className="text-4xl  -translate-y-[9rem] font-bold " style={{ fontFamily: 'Product Sans ' }}>
                        Combinaison d'Idées : Catalyseur de Créativité à l'ESI
                    </h2>

                    <p className="text-xl mb-4 -translate-y-[8rem]  max-w-full leading-tight " style={{ fontFamily: 'Product Sans ' }}>
                        Découvrez la phase de combinaison dans notre plateforme à l'ESI, conçue pour harmoniser et enrichir les idées collectées. Ce processus permet de regrouper les contributions diverses en thèmes cohérents, facilitant ainsi leur intégration dans les projets académiques. En concentrant les idées similaires, nous favorisons une réflexion plus profonde et une meilleure organisation, rendant chaque session de travail plus productive. Cette méthode structurée améliore non seulement la collaboration mais assure aussi que chaque idée soit évaluée et développée, optimisant ainsi la création de solutions novatrices et applicables
                    </p>
                </div>

                <div className="absolute bottom-0 -translate-x-[5rem] ">

                    <img src={comb} alt="Descriptive Image" className="w-full" />
                </div>

            </div>





        </div>
    )
}

export default Combinaison