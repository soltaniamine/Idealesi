import React from 'react'
import commlogo from '../assets/Commlogo.svg'
import comm from '../assets/Comm.svg'

const Comm = () => {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center relative">
            <div className="flex-1 flex flex-col items-center justify-center p-10 space-y-16">

                {/* Background circles */}
                <div className="w-[600px] h-[500px] bg-[#e5e7ff] rounded-full filter blur-[80px] absolute -translate-x-10 -translate-y-[6rem] -z-10"></div>
                <div className="w-[600px] h-[500px] bg-[#e5e7ff] rounded-full filter blur-[80px] absolute translate-y-1 translate-x-[50rem] -z-10"></div>

            
                {/* Info and tab section */}
                <div className="flex w-full justify-between items-start -translate-y-[10rem]">

                    <div className="flex-1 flex flex-col items-center mt-10 relative"> 
                        <img src={commlogo} alt="person logo" className="w-32 h-32" />
                        <h1 style={{ fontFamily: 'Product Sans' }} className='text-3xl font-semibold'>Profiter de la communitée</h1>
                        <h2 style={{ fontFamily: 'Product Sans' }} className='text-center text-xl font-medium w-[67%] mt-5'>Profitez pleinement de la communauté de l'ESI en partageant vos questions sur le fil d'actualité pour obtenir des réponses pertinentes.</h2>
                    </div>

                    <div className="flex-1.3">
                        <img src={comm} alt="tab of persons" className="ml-1 -mt-7 w-[140%]" />
                    </div>

                </div>

            </div>
        </div>
  )
}

export default Comm