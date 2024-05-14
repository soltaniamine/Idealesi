import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from 'react-router-dom';
import Sidebar from "../Home/Sidebar";
import Profile from "../../../assets/Acceuil/TypeProjet/profile.png"
import education from '../../../assets/Acceuil/TypeProjet/image 23.svg';
import rectangleclaire from '../../../assets/Acceuil/TypeProjet/rectangleclaire.svg';
import triangle from '../../../assets/Acceuil/TypeProjet/triangle.svg';
import cercle from '../../../assets/Acceuil/TypeProjet/cercle.svg';
import './onecp.css';
import Onecs from './onecs.jsx';
import profile from "../../../assets/Acceuil/Home/profile.png"
import Notification from "../notification-et-profile/notification";
import Profilee from "../notification-et-profile/profile";


  
const Choix = ({ buttonColor }) => {
   const [isClicked, setIsClicked] = useState(false);
   const [ownerClicked, setOwnerClicked] = useState(false);
   const [creationDateClicked, setCreationDateClicked] = useState(false);
   const [moduleClicked, setModuleClicked] = useState(false);
   const [clubClicked, setClubClicked] = useState(false);
   const [levelClicked, setLevelClicked] = useState(false);
   const [items, setItems] = useState([]);
   const location = useLocation();
   const params = new URLSearchParams(location.search);
   const uid = params.get('uid');
   const technique = params.get('tech');
   const [niveau, setNiveau] = useState([]);
   useEffect(() => {
      const fetchNiveau = async () => {
         try {
            const response = await axios.get('http://127.0.0.1:5000/liste_niveau');
            setNiveau(response.data.niveau);
            console.log(response.data.niveau);
         } catch (error) {
            console.log(error.response);
         }
      }
      fetchNiveau(); 
   }, []);

   useEffect(() => {
      if (niveau && niveau.length > 0) {
         setItems(niveau.map((niv) => (
            <Onecs uid={uid} technique={technique} key={niv.niveau_id} niveau_id={niv.niveau_id} nom_niveau={niv.nom_niveau} cycle={niv.cycle} />
         )));
      }
   }, [niveau]);
   
   

    
   const [activeIndex,setActiveIndex]=useState(0) ;
   

   const updateIndex = (newIndex) =>{
      if (newIndex<0){
         newIndex=0;
      }else if (newIndex>=items.length){
         newIndex=items.length -1;
      }
    }

   
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
   
  const [showNotification, setShowNotification] = useState(false);
  const [showProfile, setShowProfile] = useState(false);


  const handleButtonClick = () => {
    setShowNotification(prevState => !prevState);
  };
  const handleProfileClick = () => {
    setShowProfile(prevState => !prevState);
  };


  const [word, setWord] = useState('');
  const [search, setSearch] = useState([]);
        const fetchSearch = async () => {
            try {
                const response = await axios.post('http://127.0.0.1:5000/search_module', {mot_cle: word});
                console.log(word);
                setSearch(response.data.modules);
                console.log(response.data);
            } catch (error) {
                console.log(error.response);
            }
        }
        useEffect(() => {
            fetchSearch(); 
        }, [ word]);
        const [itemss, setItemss] = useState([]);
        useEffect(() => {
            if (search && search.length > 0) {
                setItemss(search.map((eve) => (
                    <div className="w-[100%] ">
                        <div className="flex mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                            </svg>
                            <p className="text-black ml-4">{eve.module_name}</p>
                        </div>
                    </div>
                )));
            }
          }, [search]);

    return ( 
        <div className="grid grid-cols-6 bg-mypurple mt-[1,1%] ">
            <Sidebar className="col-span-1 " buttonColor = { buttonColor }></Sidebar>

             
            <div className=" bg-mypurple h-screen col-span-5  mt-[1,1%] ">
                <div className="relative bg-white h-[98.9%] mt-[1.1%] rounded-tl-2xl"> 
                <div className=" relative h-14 flex justify-between items-start border-b-2">
                {isClicked ? (
                            <div  className="z-50 w-[50%] ml-8 mt-1.5 border-2 border-gray-100 bg-gray-100 rounded-xl  text-gray-600 ">
                                <div className=" w-[100%] h-12 flex items-center border-b-2 border-gray-700 rounded-t-xl pl-3  cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                    <input className="focus:outline-none ml-2 mr-7 bg-slate-100 w-[80%]" type="text" placeholder="Rechercher..." value={word} onChange={(e)=>setWord(e.target.value)}/> 
                                    <div>
                                        <svg onClick={() => {
                                                setIsClicked(false);
                                                } }
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="pl-10">    
                                    <div className="mb-10">
                                        <p className="text-black my-3">Résultat:</p>
                                        <div className=" h-44  w-[90%]">
                                            <div className=" h-44 overflow-auto">
                                                {itemss}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className=" w-[50%] h-11 ml-8 mt-1.5 flex justify-start items-center border-2 border-gray-100 rounded-xl pl-3 text-gray-600 cursor-pointer" onClick={() => setIsClicked(true)}>
                                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                                <input className="focus:outline-none ml-2 mr-7 w-[80%]" type="text" placeholder="Rechercher..." /> 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
                                </svg>
                            </div>
                        )}
                        
                        
                        <div className="w-32 flex mt-2 items-center justify-around mr-5">
                        
                        <button onClick={handleButtonClick} className="flex items-center justify-center w-10 h-10">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                </svg>
                            </button>
                            {showNotification && (
                                <div className="absolute right-4 top-16 notification z-50 h-[20%] w-[40%] ">
                                <Notification/>
                                </div>
                            )}
                           <button onClick={handleProfileClick} className="flex items-center justify-center w-10 h-10">
                                <img src={profile} alt="Profile" className="w-full h-full rounded-full"/>
                            </button>
                            {showProfile && (
                                <div className="absolute  ml-[76%] mt-[18%]  z-50 h-[20%] w-[100%] ">
                                <Profilee/>
                                </div>
                            )}
                        </div>
                    </div>
                        
  
        <div className=" recent w-[96,5%] h-[90%] ml-8 mr-8 rima transition-transform ease-in-out duration-5000 ">
                     <div className="mt-[2%]  rounded-lg border border-blue-500 border-4">
                        <div className=" rima flex items-center mb-[2%] mt-[2%] ml-[3%] " >
                          <h1 className="  z-20 text-2xl  font-semibold ml-[2%] ">Projet Pédagogique</h1>
                          <img className=" z-10 line  w-[18%] " src={rectangleclaire} />
                        </div>
                        <div className="rima">
                           <img className=" z-10 w-[6%] line ml-[90%] mb-[0.4%]" src={education} /> 
                        </div>
                        <div className="rima">
                           <img className="  w-[3%] line ml-[80%]  hover:transform hover:-translate-y-1 hover:scale-110 " src={cercle} /> 
                        </div>
                        <div className="rima">
                           <img className="  w-[3%] line ml-[30%] mb-[2%] " src={triangle} /> 
                        </div>
                        <div className="rima">
                           <img className="  w-[4%] line ml-[40%] mb-[3%] " src={cercle} /> 
                        </div>
                        <div className="rima">
                           <img className="  w-[2%] line ml-[70%] mb-[2%] " src={triangle} /> 
                        </div>
                        <div className="rima">
                           <img className=" z-0  w-[3%] line ml-[10%] mb-[2%] " src={triangle} /> 
                        </div>
                        <div className="rima">
                           <img className=" z-0 w-[4%] line ml-[95%] mb-[2%] " src={cercle} /> 
                        </div>
                        <div className="rima">
                           <img className="  w-[4%] line ml-[55%] mb-[1%] " src={cercle} /> 
                        </div>
                        <div className="rima">
                           <img className="  w-[1%] line ml-[47%] mb-[1%] " src={triangle} /> 
                        </div>
                     </div>


                     <div className=" ml-[99%] mb-[1%] mt-[23%]">
                     
                        <button  className="next" onClick={nextSlide}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                            
                            </button>
                     
                       
                        </div>

                        <div className="ml-[0.2%] mt-[-4%]">
                        
                           <button className="prev " onClick={prevSlide}>
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                             <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                             </svg>
                            
                           </button>
                        
                        </div>
                        <div className="slider-container ">
                      {items.map((item, index) => (
                        <div
                           key={index}
                           className={`slide ${index === activeIndex ? "active" : ""}`}
                          >
                          <div className="mt-[-25%]">
                           {index === activeIndex && item}
                          </div>
                      </div>
                       ))}
                </div>
               </div>
                 

                    </div>
                    </div>
                    </div>

     );
            }; 
export default Choix;