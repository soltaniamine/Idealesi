import React, { useState, useEffect } from 'react';
import Sidebar from '../Home/Sidebar';
import cercle1 from '../../../assets/Acceuil/clubs/cercle1.svg';
import triangle from '../../../assets/Acceuil/clubs/triangle.svg';
import cercle2 from '../../../assets/Acceuil/clubs/cercle2.svg';
import iconprof from '../../../assets/Acceuil/Expert/iconprof.svg';
import threelines from '../../../assets/Acceuil/clubs/threelines.svg';
import photo from "../../../assets/Acceuil/TypeProjet/profile.png";
import rectangleclaire from '../../../assets/Acceuil/TypeProjet/rectangleclaire.svg';
import line from '../../../assets/Acceuil/events/line.svg';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import '../events/events.css';
import Notification from "../notification-et-profile/notification";
import Profilee from "../notification-et-profile/profile";


const Exper = ({ buttonColor }) => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const uid = params.get('uid');
    const [niveau, setNiveau] = useState([]);
    const fetchNiveau = async () => {
        try {
        const response = await axios.get('http://127.0.0.1:5000/liste_niveau');
        setNiveau(response.data.niveau);
        console.log(response.data.niveau);
        } catch (error) {
        console.log(error.response);
        }
    };
    useEffect(() => {
        fetchNiveau();
    }, []);

    const [modules, setModules] = useState([]);
    const fetchModules = async () => {
        try {
        const response = await axios.get('http://127.0.0.1:5000/liste_module');
        setModules(response.data.modules);
        } catch (error) {
        console.log(error.response);
        }
    };
    useEffect(() => {
        fetchModules();
        }, []);
    const [modulesExp, setModulesExp] = useState('');
    // Fetch modules expertise data for all modules
    const fetchModulesExpertise = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/liste_expert');
            if (response.data) {
                setModulesExp(response.data.Liste_expert);
            }
        } catch (error) {
            console.log(error.response);
        }
    }
    useEffect(()=>{
        
        fetchModulesExpertise();
    },[])
const [items, setItems] = useState([]);
    useEffect(() => {
        if (niveau && niveau.length > 0 && modules && modules.length > 0) {
            setItems(
                niveau.map((niv) => (
                    <div className=" year bg-white w-[85%] h-[80%] ml-16 mt-2 mb-4 rounded-[37px] selected relative  hover:drop-shadow-md">
                        <div className='yearname mr-5 pt-1'>
                            <h1 className="text-center ml-10 mt-2 font-bold text-2xl " style={{ fontFamily: 'Product Sans' }}>{niv.nom_niveau}</h1>
                            <img className=' ml-[46%] ' src={line} alt="blueline  " />
                        </div>
                        <div className=' yearmodules overflow-auto h-[75%] ml-1'>
                            {modules
                                .filter(mod => mod.niveau_id === niv.niveau_id)
                                .map((mo) => {
                                    const moduleExpData = Array.isArray(modulesExp) ? modulesExp.find(data => data.module_id === mo.module_id) : null;
                                    const but = moduleExpData ? 'added' : 'add'; 
                                    return (
                                        <ModuleElement
                                            module={mo.nom_module}
                                            module_id={mo.module_id}
                                            but={but}
                                        />
                                    );
                                })
                            }
                        </div>
                    </div>
                ))
            );
            
        }
    }, [niveau, items, modulesExp ]);

    const ajoutExpert = async (mid) => {
        try {
            const response = await axios.post('http://127.0.0.1:5000/add_expert', { user_id: uid, module_id: mid});
            if (response.status === 200) {
                fetchModulesExpertise();
            }
        } catch (error) {
            console.log(error.response);
        }
    }
    
    const supExpert = async (mid) => {
        try {
            const response = await axios.post('http://127.0.0.1:5000/delete_expert', { user_id: uid, module_id: mid});
            if (response.status === 200) {
                fetchModulesExpertise();
            }
        } catch (error) {
            console.log(error.response);
        }
    }

    const ModuleElement = ({ module, module_id, but }) => {
        return (
        <div className={`flex items-center  ml-20 mt-2 w-[80%] h-[20%] ${but === 'added' ? 'bg-gray-100' : 'bg-gray-300' } rounded-lg drop-shadow-md`}>
            <div className="absolute right-2  ml-[92%]">
            {
                but === 'added' ? 
                <Button 
                size="small" 
                onClick={()=> {supExpert(module_id); console.log(module_id)}}
                variant="contained" 
                style={{ backgroundColor: '#8589B3'  }}>
                Added
                </Button>
                :
                <Button 
                size="small" 
                onClick={()=> {ajoutExpert(module_id); console.log(module_id)}}
                variant="contained" 
                style={{ backgroundColor: '#9398CF' }}>
                Add
                </Button>
            }
            </div>
            <img className="w-8 ml-3 mt-1" src={iconprof} alt="les modules" />
            <h1 className="modulename absolute ml-14 text-[20px]" style={{ fontFamily: 'Product Sans' }}>{module}</h1>
        </div>
        );
    }

    const [showNotification, setShowNotification] = useState(false);
  const [showProfile, setShowProfile] = useState(false);


  const handleButtonClick = () => {
    setShowNotification(prevState => !prevState);
  };
  const handleProfileClick = () => {
    setShowProfile(prevState => !prevState);
  };

  useEffect(() => {
    fetchModulesExpertise();
}, []) 

useEffect(() => {
    fetchNiveau();
    fetchModules();
}, []);

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
          </div> {/* your Expert div */}

                    <div className="ExpertChoice w-[96,5%] h-[90%] ml-3 mr-3 mt-3">

                        <div className="header flex items-start relative">

                            <img src={threelines} className="absolute  h-10 top-0 left-0 " />

                            <div className=" mt-5 ml-6   w-full  h-24 border bg-white mx-2 rounded-lg" style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px', borderBottomRightRadius: '20px', borderBottomLeftRadius: '20px', borderWidth: '3.25px', borderColor: '#8C95EB' }}>

                                <img src={iconprof} className="absolute top-1/2 right-0 transform -translate-y-1/2 mt-3 h-[60%] mr-7 " alt="Icon" />

                                <div className="  title mt-4 flex flex-col items-start absolute left-16 top-1/4 bottom-0 mb-2 ml-2">
                                    <h1 className="absolute ml-6 z-10 text-3xl font-medium " style={{ fontFamily: 'Product Sans' }}>Expert Assistance</h1>
                                    <img className='relative opacity-80 mt-4 w-64 ml-4 ' src={rectangleclaire} alt="rectangle" />
                                </div>

                                <img src={cercle1} className="absolute top-20 ml-28 mt-0 left-96 w-10 h-10" alt="smallcircle1" />
                                <img src={cercle2} className="absolute top-10 ml-5 w-10 h-full" alt="smallcircle2" />
                                <img src={triangle} className="absolute top-10 left-48 w-10 h-20" alt="smalltriangle" />
                                <img src={triangle} className="absolute top-6  left-96 w-10 h-20 ml-96 " alt="smalltriangle2" />

                            </div>
                        </div>


                        <div className=" relative  pl-10 pt-2  ml-12 mt-5 mr-12 h-[70%] w-[90%] bg-gray-100 rounded-[37px] drop-shadow-md">
                            <div className="topbar absolute bg-[#9AA0DD] top-0 left-0 w-full h-[15%] rounded-t-[37px] drop-shadow-md ">
                                <h1 className="absolute inset-0 flex justify-center items-center text-[25px]   text-black " style={{ fontFamily: 'Product Sans' }}>Expert Assistance: Module Selection</h1>
                            </div>

                            <div className=" yearselection overflow-auto bg-blac modulelist bg-red absolute left-0  right-0 mt-12 h-[83%] rounded-b-3xl">
                                {items}
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </div >


    );

}

export default Exper