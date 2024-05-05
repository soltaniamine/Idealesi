import React, { useState,useEffect } from "react";
import Sidebar from "../Accueil/Home/Sidebar";
import photo from "../../assets/Acceuil/TypeProjet/profile.png";
import level from "../../assets/level.svg"
import event from "../../assets/event.svg"
import module from "../../assets/module.svg"
import club from "../../assets/club.svg"
import { Link,useLocation } from 'react-router-dom';
import axios from "axios";
import Notification from "../Accueil/notification-et-profile/notification";
import Profilee from "../Accueil/notification-et-profile/profile";



const Niveau =  ({ buttonColor }) => {
    const [nomniveau, setNomNiveau] = useState('');
    const [nomcycle, setNomCycle] = useState('');
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const uid = params.get('uid');
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
    const ajoutNiveau = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:5000/add_niveau', {nom_niveau: nomniveau, cycle: nomcycle, user_id: uid});
            console.log(response.data);
        } catch (error) {
            console.log(error.response);
        }
    }
    const suprimNiveau = async () => {
      try {
          const response = await axios.post('http://127.0.0.1:5000/delete_niveau', {user_id: uid, niveau_nom: selectedId});
          console.log(response.data);
      } catch (error) {
          console.log(error.response);
      }
  }
    
    const [selectedId, setSelectedId] = useState('');
    const [items, setItems] = useState([]);
    useEffect(() => {
      if (niveau && niveau.length > 0) {
         setItems(niveau.map((niv) => (
                <div
                className={`element mb-4 ml-9 mb w-[90%] h-[50px]  rounded-lg drop-shadow-md flex justify-center items-center cursor-pointer ${selectedId === niv.nom_niveau ? 'bg-blue-800 text-white' : 'bg-gray-100'}`}
                onClick={() => setSelectedId(niv.nom_niveau)}
              >
                <h1 className='niveau-name text-2xl' style={{ fontFamily: 'Product Sans' }}>{niv.nom_niveau}</h1>
              </div>
            )));
      }
   }, [niveau, selectedId]); 
    
    const [showajouter, setShowajouter] = useState(true);


    const handleDeleteClick = () => {
        setShowajouter(!showajouter);
    };
    const [showprepa, setShowprepa] = useState(true);


    const handleDeleteClickk = () => {
        setShowprepa(!showprepa);
    };

    const [showNotification, setShowNotification] = useState(false);
  const [showProfile, setShowProfile] = useState(false);


  const handleButtonClick = () => {
    setShowNotification(prevState => !prevState);
  };
  const handleProfileClick = () => {
    setShowProfile(prevState => !prevState);
  };

    return ( 


        <div className="grid grid-cols-6 bg-mypurple mt-[1,1%] ">
      <Sidebar className="col-span-1" buttonColor={buttonColor}></Sidebar>


<div className=" bg-mypurple h-screen col-span-5  mt-[1,1%] ">
        <div className="bg-white h-[98.9%] mt-[1.1%] rounded-tl-2xl">
          <div className="relative w-full h-[9%] border-b-2 text-black  flex justify-end  items-center ">
            <div className=" w-32 flex  mt-2 items-center justify-around mr-5 mb-3 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
        </svg>
        <button onClick={handleButtonClick}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
          </svg>
        </button>
           {showNotification && 
           <div className="absolute right-4 top-16 notification z-50 h-[20%] w-[40%] ">
            <Notification/>
            </div>
            }
          <button onClick={handleProfileClick}>
              <div className="w-10 h-10 overflow-hidden rounded-full ">
                <img src={photo} alt="" />
              </div>
          </button>
          {showProfile && 
           <div className="absolute  ml-[76%] mt-[18%]  z-50 h-[20%] w-[100%] ">
            <Profilee/>
            </div>
          }
      </div>
    </div>
    <div className=" recent w-[96,5%] h-[90%] ml-8 mr-8  ">



       <div className="grid grid-cols-2  gap-4 h-screen ml-[4%] mt-[-1%] ">

         <div className="col-span-1  p-4 w-[120%] h-[65%] rounded-3xl mb-[10%] mt-[10%] bg-[#E3E6FE] ">
           <div className="ml-[4%] mt-[2%]">
            <h1 className=" text-2xl font-bold ">modifier les niveaux</h1>
           </div>

           <div>
           <hr className="w-[90%] border-t-2 border-gray-400 mt-[3%] ml-[5%]" />
          </div>
        
          <div className="flex ml-[9%] mt-[2%]">
           <p className={`text-sm w-1/4 cursor-pointer ${showajouter ? 'text-[#242F9B] font-bold' : 'text-gray-500 cursor-pointer'}`} onClick={handleDeleteClick}>ajouter un niveau</p>
           <p className={`text-sm w-1/4 ${!showajouter ? 'text-[#242F9B] font-bold cursor-pointer' : 'text-gray-500 cursor-pointer'}`} onClick={handleDeleteClick}>Supprimer un niveau</p>
          </div>

          <div>
           <hr className="w-[86%] border-t-1 border-gray-400 mt-[2%] ml-[9%]" />
          </div>
         {showajouter ? (
          <><div>
                                        <div className="flex flex-col items-center justify-center mt-[3%]">
                                            <h1 className=" text-2xl font-semibold ">Veuillez choisir le cycle</h1>
                                        </div>
                                        <div className="flex ml-[9%] mt-[7%]">
                                            <div className="w-1/2">
                                                <p
                                                    className={`text-xl cursor-pointer ${showprepa ? 'text-white font-bold bg-[#4E58B2]' : 'text-black'} rounded-xl mr-[20%] px-4 py-2`}
                                                    onClick={() => { handleDeleteClickk(); setNomCycle('Cycle preparatoire'); }}
                                                >
                                                    Cycle préparatoire
                                                </p>
                                            </div>
                                            <div className="ml-[10%] w-1/2">
                                                <p
                                                    className={`text-xl cursor-pointer ${!showprepa ? 'text-white font-bold bg-[#4E58B2]' : 'text-black'} rounded-xl ml-[10%] mr-[20%] px-4 py-2`}
                                                    onClick={() => { handleDeleteClickk(); setNomCycle('Cycle superieur'); }}
                                                >
                                                    Cycle supérieur
                                                </p>
                                            </div>
                                        </div>


                                        <div className="flex flex-col items-center justify-center mt-[8%]">
                                            <h1 className=" text-2xl font-semibold ">Veuillez fournir le niveau </h1>
                                        </div>
                                        <div className="mt-[4%] ml-[34%]">
                                            <input
                                                type="text"
                                                placeholder="Entrer le niveau ..."
                                                className="border border-gray-300 rounded-xl px-4 py-2" value={nomniveau} onChange={(e)=>setNomNiveau(e.target.value)} />
                                        </div>
                                    </div><div className="size-[40%] ml-[66%] mt-[1%]">
                                            <img className=" " src={level} />
                                        </div><div className="mt-[-23%] ml-[10%]">
                                            <button onClick={ajoutNiveau} className="bg-[#757DCD] hover:bg-[#4E58B2] text-white font-bold py-3 px-14 rounded-xl">
                                                Ajouter
                                            </button>
                                        </div></>
         ) : null}

{!showajouter ? (
          <><div>
                                       
                                        <div className="flex flex-col items-center justify-center mt-[3%]">
                                            <h1 className=" text-2xl font-semibold ">Veuillez sélectionner le niveau </h1>
                                        </div>
                                                                  <div className="elementslist overflow-y-auto h-[200px] rounded-b-3xl mt-5 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
                                                                        {items}
                                                    </div>
                                    </div><div className="size-[40%] ml-[66%] mt-[4%]">
                                            <img className=" " src={level} />
                                        </div><div className="mt-[-23%] ml-[10%]">
                                            <button onClick={suprimNiveau} className="bg-[#757DCD] hover:bg-[#4E58B2] text-white font-bold py-3 px-14 rounded-xl">
                                                Supprimer
                                            </button>
                                        </div></>
         ) : null}
        </div>
         
        







<div className="col-span-1 grid grid-rows-3 gap-4 ml-[30%]">
<Link to={`/modulee?uid=${uid}`}>
        <div className="bg-gray-100 p-4 w-[85%] h-[70%] rounded-3xl mb-[10%] mt-[5%] hover:bg-[#D5FED6] hover:scale-110 transition-transform duration-500 ">
           <div className="ml-[4%] mt-[4%]">
            <h1 className=" text-2xl     font-bold ">Modifier les modules</h1>
           </div>
           <div className="size-[55%] ml-[50%]"> 
              <img className=" " src={module} /> 
            </div>
            <div className="ml-[5%]">
            
           <button  className={"next cursor-pointer "}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
           </button>
           
           </div>
        </div>
        </Link>
        <Link to={`/event?uid=${uid}`}>
            <div className="bg-gray-100 p-4 w-[85%] h-[65%] rounded-3xl mt-[-15%] hover:bg-[#F9CFCF] hover:scale-110 transition-transform duration-500  ">
            <div className="ml-[4%] mt-[4%]">
                <h1 className=" text-2xl     font-bold ">Modifier les clubs</h1>
            </div>
            <div className="size-[55%] ml-[50%]"> 
                <img className=" " src={club} /> 
                </div>
                <div className="ml-[5%]">
           <button  className={"next cursor-pointer "}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
           </button>
            </div>
            </div>
           </Link>
           <Link to={`/expert?uid=${uid}`}>
            <div className="bg-gray-100 p-4 w-[85%] h-[65%] rounded-3xl mt-[-40%] hover:bg-[#FFEBA3] hover:scale-110 transition-transform duration-500 ">
              <div className="ml-[4%] mt-[3%]">
                <h1 className=" text-2xl     font-bold ">Modifer la liste des experts</h1>
              </div>
                <div className="size-[55%] ml-[50%]"> 
                  <img className=" " src={event} /> 
                </div>
                      <div className="ml-[5%] mt-[-10%]">
                        <button  className={"next cursor-pointer "}>
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4" stroke="currentColor" class="w-6 h-6">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                          </svg>
                        </button>
                      </div>
                  </div>
           </Link>
            </div>


        
    </div>


          </div>
          </div>
          </div>
          </div>
            

     );
}
 
export default Niveau;