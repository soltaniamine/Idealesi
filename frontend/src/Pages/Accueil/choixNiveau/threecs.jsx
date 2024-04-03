import React from 'react';
import cp from '../../../assets/Acceuil/choixniveau/cp.svg'
import './onecp.css';
 
const Threecs = () => {
  return ( 
    <div>
       <div className=" mt-[0.1%] flex items-center ">
   <div className="w-1/5 border-t border-black mr-[3%] ml-[18%] "></div>
      <div className="  flex justify-center mb-[2%] mt-[2%] " >
        <h1 className="  text-2xl  font-semibold mr-[-30%] ">Cycle supèrieur</h1>
      </div>
      <div className="w-1/5 border-t border-black ml-[7.7%] mr[15%]"></div>
      </div>
 
                        
                     <div className="mr-[3%] ml-[4%]  mb-[5%] rounded-lg border  border-dashed  border-black border-4 relative"> 
                  
                     <div>
                       <h1 className="  z-10 text-2xl  font-bold ml-[48%] absolute mt-[0.3%]  ">3 CS</h1>
                       <img className="    w-[12%] ml-[44%] mb-[9%] " src={cp} />
                     </div>
                     <div className="mt-[8.5%] border-l border-solid border-black absolute h-[76%] top-0 left-[50%] "></div>
                    
                     <div className=" grid grid-cols-2 gap-4 mt-[-1.2%] ">
                     <div className="mt-[-11%] ml-[7%] ">
                        <ul className="space-y-4 py-4">
                        <li className="flex items-center font-semibold">
                           <div className="w-3 h-3 rounded-full bg-blue-500 mr-3"></div>
                           ELECT - Electricité                           </li>
                        <li className="flex items-center font-semibold">
                           <div className="w-3 h-3 rounded-full bg-orange-500 mr-3"></div>
                           BWEB - Bureautique et Web
                        </li>
                        <li className="flex items-center font-semibold">
                           <div className="w-3 h-3 rounded-full bg-gray-500 mr-3"></div>
                           ANG1 - Anglais 1                        </li>
                        <li className="flex items-center font-semibold">
                           <div className="w-3 h-3 rounded-full bg-pink-500 mr-3"></div>
                           ANA1 - Analyse mathématique 1                        </li>
                        <li className="flex items-center font-semibold">
                           <div className="w-3 h-3 rounded-full bg-indigo-500 mr-3"></div>
                           ALSDS - Algorithmique et Structures de Données Statiques                        </li>
                        <li className="flex items-center font-semibold">
                           <div className="w-3 h-3 rounded-full bg-green-500 mr-3"></div>
                           ARCHI1 - Architecture de l_ordinateur 1                        </li>
                        <li className="flex items-center font-semibold">
                           <div className="w-3 h-3 rounded-full bg-purple-500 mr-3"></div>
                           ALG1 - Algèbre 1                        </li>
                        <li className="flex items-center font-semibold">
                           <div className="w-3 h-3 rounded-full bg-yellow-500 mr-3"></div>
                           SYST1 - Introduction au Système d_exploitation 1                        </li>
                        <li className="flex items-center font-semibold">
                           <div className="w-3 h-3 rounded-full bg-red-500 mr-3"></div>
                           TEE - Techniques d_Expression Ecrite
                        </li>
                          </ul>
                </div>
                <div className="mt-[-11%] ml-[7%] ">
                        <ul className="space-y-4 py-4">
                        <li className="flex items-center font-semibold">
                           <div className="w-3 h-3 rounded-full bg-blue-500 mr-3"></div>
                           ALSDD - Algorithmique et Structures de Données Dynamiques                          </li>
                        <li className="flex items-center font-semibold">
                           <div className="w-3 h-3 rounded-full bg-orange-500 mr-3"></div>
                           SYST2 - Introduction au Système d_exploitation 2
                        </li>
                        <li className="flex items-center font-semibold">
                           <div className="w-3 h-3 rounded-full bg-gray-500 mr-3"></div>
                           TEO - Techniques d_Expression Orale                        </li>
                        <li className="flex items-center font-semibold">
                           <div className="w-3 h-3 rounded-full bg-pink-500 mr-3"></div>
                           ALG2 - Algèbre 2                        </li>
                        <li className="flex items-center font-semibold">
                           <div className="w-3 h-3 rounded-full bg-indigo-500 mr-3"></div>
                           ANA2 - Analyse mathématique 2                        </li>
                        <li className="flex items-center font-semibold">
                           <div className="w-3 h-3 rounded-full bg-green-500 mr-3"></div>
                           ELECF1 - Electronique Fondamentale 1                        </li>
                        <li className="flex items-center font-semibold">
                           <div className="w-3 h-3 rounded-full bg-purple-500 mr-3"></div>
                           MECA - Mécanique du point                        </li>
                        <li className="flex items-center font-semibold">
                           <div className="w-3 h-3 rounded-full bg-yellow-500 mr-3"></div>
                           ANG1 - Anglais 1                        </li>
                       
                          </ul>
                      </div>
                      </div>

                     </div>
                     
                     </div>
               
     );
}
 
export default Threecs;