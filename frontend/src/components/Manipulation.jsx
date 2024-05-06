import React from 'react'
import EA2 from '../assets/EA2.svg'
import Lines from '../assets/Lines.svg'
import DrawedStar from '../assets/DrawedStar.svg'
import DrawedStar2 from '../assets/DrawedStar2.svg'
import CirclesArr from '../assets/CirclesArr.svg'
import RectangleJPhman from '../assets/RectangleJPhman.svg'
import tabmani from '../assets/tabmani.svg'

const Manipulation = () => {
    return (
        <div className='flex flex-row bg-gradient-to-r from-[#646FD4] to-[#DBDFFD] w-[95vw] h-[40vw] translate-x-[5vw] radius relative ' style={{ boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)' }}>

            <div className='flex flex-col mt-12 mb-20 '>

                <div className='grid-container'>
                    <img src={CirclesArr} alt="CirclesArr" className='translate-y-[30%] mr-16 ' />
                    <img src={EA2} alt="EA2" />
                    <h3 className='font-semibold text-white text-4xl translate-y-[10%] mt-2 ml-3' style={{ fontFamily: `Product sans` }}>Manipulation</h3>
                    <img src={Lines} alt="Lines" className='translate-y-[20%] ml-4 mt-1' />
                </div>

                <div className='grid grid-cols-[350px_140px] mt-5 ml-[4.5rem]'>
                    <div className='z-50 translate-x-6  '>
                        <h3 className='text-white text-4xl font-light ' style={{ fontFamily: `Product sans` }}>Stimulez la créativité en utilisant doffre une interfa</h3>
                    </div>

                    <div className='-translate-x-[130%] translate-y-[18%]'>
                        <img src={RectangleJPhman} alt="RectangleJPhman" />
                    </div>
                </div>

                <div className='w-[400px] text-center ml-16 mt-8'>
                    <p className='text-white tracking-tight text-xl mt-6' style={{ fontFamily: `Product sans` }}>Stimulez la créativité en utilisant des méthodes de brainstorming et de réflexion.ts. Spécifiquement axée sur la phase cruciale d'idéation, Idealesi offre une interfa</p>
                </div>

            </div>

            <div className='flex flex-col justify-between my-8'>

                <div className='self-end '>
                    <img src={DrawedStar} alt="DrawedStar" className='w-[55px] h-[55px] -translate-x-6 -translate-y-4' />
                </div>
                <div className="tabmani w-[90%] items-end ml-10 -mt-10">
                    <img src={tabmani} alt="tabmnipulation" />
                </div>
                <div className='self-start'>
                    <img src={DrawedStar2} alt="DrawedStar2" className='w-[55px] h-[55px] translate-x-[0.5vw] -translate-y-9' />
                </div>

            </div>

        </div>

    )
}

export default Manipulation