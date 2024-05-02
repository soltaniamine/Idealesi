import React, { useEffect, useState } from "react";
import axios from "axios";
import cp from '../../../assets/Acceuil/choixniveau/cp.svg'
import './onecp.css';

const Threecs = () => {
   const [modules, setModules] = useState([]);
   const [firstColumnModules, setFirstColumnModules] = useState([]);
   const [secondColumnModules, setSecondColumnModules] = useState([]);

   useEffect(() => {
     const fetchModules = async () => {
       try {
         const response = await axios.get('http://127.0.0.1:5000/liste_module');
         setModules(response.data.modules);
       } catch (error) {
         console.log(error.response);
       }
     };
 
     fetchModules();
   }, []);

   useEffect(() => {
     const filteredModules = modules.filter(module => module.niveau_id > 7);

     if (filteredModules.length > filteredModules.length/2) {
       setFirstColumnModules(filteredModules.slice(0, filteredModules.length/2));
       setSecondColumnModules(filteredModules.slice(filteredModules.length/2));
     } else {
       setFirstColumnModules(filteredModules);
       setSecondColumnModules([]);
     }
   }, [modules]);
 
   const Module = ({ nom_module }) => {
     return (
       <li className="flex items-center font-semibold hover:transform hover:-translate-y-1 hover:scale-80">
         <div className="w-3 h-3 rounded-full bg-blue-500 mr-3"></div>
         {nom_module}
       </li>
     );
   };

  return ( 
    <div className="">
       <div className=" mt-[0.1%] flex items-center ">
   <div className="w-1/5 border-t border-black mr-[3%] ml-[18%] "></div>
      <div className="  flex justify-center mb-[2%] mt-[2%] " >
        <h1 className="  text-2xl  font-semibold mr-[-30%] ">Cycle supèrieur</h1>
      </div>
      <div className="w-1/5 border-t border-black ml-[7.7%] mr[15%]"></div>
      </div>
 
                        
                     <div className=" mr-[3%] ml-[4%]  mb-[5%] rounded-lg border-dashed border-black border-4 relative"> 
                  
                     <div>
                       <h1 className="  z-10 text-2xl  font-bold ml-[48%] absolute mt-[0.3%]  ">3 CS</h1>
                       <img className="    w-[12%] ml-[44%] mb-[9%] " src={cp} />
                     </div>
                     <div className="mt-[8.5%] border-l border-solid border-black absolute h-[76%] top-0 left-[50%] "></div>
                    
                     <div className=" grid grid-cols-2 gap-4 mt-[-1.2%] ">
                     <div className="mt-[-11%] ml-[7%] ">
                     <ul className="space-y-4 py-4">
                        {firstColumnModules.map(module => (
                        <Module key={module.module_id} nom_module={module.nom_module} />
                        ))}
                     </ul>
                </div>
                <div className="mt-[-11%] ml-[7%] ">
                  <ul className="space-y-4 py-4">
                     {secondColumnModules.map(module => (
                     <Module key={module.module_id} nom_module={module.nom_module} />
                     ))}
                  </ul>
                      </div>
                      </div>

                     </div>
                     
                     </div>
               
     );
}
 
export default Threecs;