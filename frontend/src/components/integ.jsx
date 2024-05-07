import React from 'react'
import integlogo from '../assets/integlogo.svg'
import esinteg from '../assets/esinteg.svg'

const Integ = () => {
    return (
        <div className="flex flex-col w-full h-[85vh] items-center justify-center mt-32 relative">
            <div className="flex-1 flex flex-col items-center justify-center p-10 space-y-16">

                {/* Background circles */}
                <div className="w-[600px] h-[500px] bg-[#e5e7ff] rounded-full filter blur-[20px] absolute  left-0 bottom-0 -z-10"></div>
                <div className="w-[600px] h-[500px] bg-[#e5e7ff] rounded-full filter blur-[20px] absolute translate-y-1 translate-x-[50rem] -z-10"></div>

                {/* Title section */}


                {/* Info and tab section */}
                <div className="flex w-full justify-between items-start -translate-y-[10rem]">

                    <div className="flex-1.3">
                        <img src={esinteg} alt="tab of persons" className="translate-x-12 -mt-7 w-[90%]" />
                    </div>

                    <div className="flex-1 flex flex-col items-center mt-20 ">
                        <img src={integlogo} alt="person logo" className="w-32 h-32" />
                        <h1 style={{ fontFamily: 'Product Sans' }} className='text-3xl font-semibold'>Integration externe</h1>
                        <h2 style={{ fontFamily: 'Product Sans' }} className='text-center text-xl font-medium w-[63%] mt-5'>Idealesi vous permet d'intégrer des outils externes tels que Google Meet et Google Drive.</h2>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Integ