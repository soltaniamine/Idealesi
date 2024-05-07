import React from 'react'
import brainwriting from '../assets/brainwriting.svg'
import { Link } from 'react-router-dom'


const Brainwriting = () => {
    return (
        <div className='flex flex-col md:flex-row w-full h-screen items-center justify-center bg-gradient-to-b from-[#E6E9FF] to-[#a6b0fe]'>
            {/* Image Container */}
            <div className="flex-1">
                <img src={brainwriting} alt="Brainwriting Example" className="w-full h-auto translate-x-4 translate-y-7 " />
            </div>

            {/* Text Content Container */}
            <div className="flex-1 flex flex-col items-end justify-center p-10 space-y-16 translate-y-16">

                <h1 className="font-bold text-4xl -translate-y-6" style={{ fontFamily: 'Product Sans', fontSize: '33px' }}>
                    Lancez la génération et l'élaboration de vos idées par le brainwriting dans IdealESI                </h1>

                <p className="text-xl -translate-y-14" style={{ fontFamily: 'Product Sans' }}>
                    Explorez nos sessions de brainwriting à l'ESI, conçues pour stimuler créativité et collaboration. Cette méthode favorise la réflexion individuelle et anonyme, enrichissant les échanges sur des sujets innovants tout en s'intégrant facilement aux workflows académiques. L'anonymat encourage une participation diverse et authentique, essentielle à l'élaboration de solutions créatives.                </p>

                <Link to='/register'>
                <button className="bg-[#9846e0] border-2 border-[#6f4a8e] text-white px-4 py-2 rounded-full hover:bg-[#6f4a8e] -translate-y-20 transition -translate-x-16 duration-300" style={{ fontFamily: 'Product Sans' }}>
                    Brainwritez dès maintenant !
                </button>
               </Link>
               
            </div>
        </div>

    )
}

export default Brainwriting