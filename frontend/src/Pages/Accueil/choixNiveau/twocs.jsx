import React  from 'react';
import { useState } from 'react';
import cp from '../../../assets/Acceuil/choixniveau/cp.svg'
import './onecp.css';
import Twocssid from './twocssid';
import Twocssil from './twocssil';
import Twocssiq from './twocssiq';
import Twocssit from './twocssit';

const Twocs = () => {

    const [activeIndex,setActiveIndex]=useState(0) ;
    const items =[<Twocssid/>,<Twocssil/>,<Twocssiq/>,<Twocssit/>];

    const nextSlide = () => {
        setActiveIndex((prevIndex) => {
            if (prevIndex === items.length - 1) {
                return prevIndex; // Arrête le défilement si c'est le dernier élément
            } else {
                return prevIndex + 1; // Passe à l'élément suivant
            }
        });
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => {
            if (prevIndex === 0) {
                return prevIndex; // Arrête le défilement si c'est le premier élément
            } else {
                return prevIndex - 1; // Passe à l'élément précédent
            }
        });
    };
     
  return ( 
                <div>
                        <div className=" mt-[0.1%] flex items-center ">
                         <div className="w-1/5 border-t border-black mr-[3%] ml-[18%] "></div>
                         <div className="  flex justify-center mb-[2%] mt-[2%] " >
                             <h1 className="  text-2xl  font-semibold mr-[-30%] ">Cycle supèrieur</h1>
                         </div>
                         <div className="w-1/5 border-t border-black ml-[7.7%] mr[15%]"></div>
                          </div>
 
                        
                     <div className="mr-[3%] ml-[4%] mt-[0%] mb-[10%] rounded-lg border  border-dashed  border-black border-4 relative pb-7"> 
                          
                     <div >
                       <h1 className="  z-10 text-2xl  font-bold ml-[48%] absolute mt-[0.3%]  ">2 CS</h1>
                       <img className="    w-[12%] ml-[44%] mb-[9%] " src={cp} />
                     </div>

                     <div className='mt-[-8.5%]   ml-[20%] mr-[11%]'>
                     <div className='flex justify-center'>
                     <div className="ml-[17%]">
                               <button className="prev" onClick={prevSlide}>
                               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                               <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                               </svg>
                              </button>
                           </div>

                           <div className="mr-[30%] ml-[10%] ">
                           <button  className="next" onClick={nextSlide}>
                               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                               <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                               </svg>
                              </button>
                              
                     
                     </div>
                     </div>
                     <div>
                     <div className="slider-container  ">
            {items.map((items, index) => (
              <div
                key={index}
                className={`slide ${index === activeIndex ? "active" : ""}`}
              >
               <div className="mt-[-16%] ml-[-24%] mr-[-20%] mb-[12.2%]">
                {index === activeIndex && items}
                </div>
              </div>
            ))}

                     
                  </div>
                  </div>
                     </div>

        

                     <div className="mt-[8.5%] border-l border-solid border-black absolute h-[76%] top-0 left-[50%] "></div>
                
                    
                     
                      </div>

                     </div>
                     
               
     );
}
 
export default Twocs;