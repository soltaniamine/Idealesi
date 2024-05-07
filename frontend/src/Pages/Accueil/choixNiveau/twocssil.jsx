import React, { useEffect, useState } from "react";
import axios from "axios";
import cp from '../../../assets/Acceuil/choixniveau/cp.svg'
import './onecp.css';

const Twocssil = () => {

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
     const filteredModules = modules.filter(module => module.niveau_id === 7);

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
                <div>
                     <div className=''> 
                        <div className='mt-[8%] ml-[46%] mb-[-5.4%]'>
                        <p>SIL</p>
                        </div> 
                    <div className=" grid grid-cols-2 gap-4 mt-[4.65%] ">

                     <div className="mt-[1%]">
                        <ul className="space-y-4 py-4">
                           {firstColumnModules.map(module => (
                           <Module key={module.module_id} nom_module={module.nom_module} />
                           ))}
                        </ul>
                </div>
                <div className="mt-[1%] ml-[0.5%]">
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
 
export default Twocssil;