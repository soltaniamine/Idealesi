import React from 'react'
import RectangleJPhman from '../assets/RectangleJPhman.svg'
import JRainbow from '../assets/JRainbow.svg'
import tab from "../assets/tab.svg"
import person from "../assets/person.svg"
import AROW from "../assets/AROW.svg"

const Assistance = () => {
    return (
        <div className="flex flex-col w-full h-screen items-center justify-center relative">
            <div className="flex-1 flex flex-col items-center justify-center p-10 space-y-16">

                {/* Background circles */}
                <div className="w-[600px] h-[500px] bg-[#d5d8fe] rounded-full filter blur-[50px] absolute -translate-x-10 -translate-y-[6rem] left-0 top-12 -z-10"></div>
                <div className="w-[600px] h-[500px] bg-[#d9dcfe] rounded-full filter blur-[60px] absolute translate-y-1 translate-x-[50rem] -z-10"></div>

                {/* Title section */}
                <div className='flex items-center justify-center  translate-x-9 -translate-y-16'>
                    <img src={JRainbow} alt='JRainbow' className='h-24 translate-x-[40%]' />
                    <div className='z-10'>  <h1 className='text-4xl font-semibold text-center drop-shadow-lg' style={{ fontFamily: 'Product Sans' }}>Pourquoi choisir IdealESI?</h1></div>
                    <img src={RectangleJPhman} alt='RectangleJPhman' className='w-[17rem] h-[17rem] drop-shadow-md -translate-x-[102%] translate-y-[5%]' />
                </div>

                {/* Info and tab section */}
                <div className="flex w-full justify-between items-start -translate-y-[10rem]">

                    <div className="flex-1 flex flex-col items-center mt-10 relative"> 
                        <img src={person} alt="person logo" className="w-32 h-32" />
                        <h1 style={{ fontFamily: 'Product Sans' }} className='text-3xl font-semibold'>Assistance des profs</h1>
                        <h2 style={{ fontFamily: 'Product Sans' }} className='text-center text-xl font-medium w-[63%] mt-5'>Vous avez la possibilité de demander l'assistance de vos professeurs pour évaluer vos idées.</h2>
                        <img src={AROW} alt="siham absolute" className="absolute right-0 translate-y-[12rem]" />
                    </div>

                    <div className="flex-1">
                        <img src={tab} alt="tab of persons" className="ml-1 -mt-7" />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Assistance