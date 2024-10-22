import Sidebar from "./Sidebar.jsx";
import { useState, useEffect} from "react";
import Homepage from "./Homepage.jsx";
import Allprojects from "./Allprojects.jsx";
import profile from "../../../assets/Acceuil/Home/profile.png"
import { useLocation } from "react-router-dom";
import axios from "axios";
import Notification from "../notification-et-profile/notification";
import Profilee from "../notification-et-profile/profile";
const Home = ({ buttonColor }) => {
        const [isClicked, setIsClicked] = useState(false);
        const [ownerClicked, setOwnerClicked] = useState(false);
        const [creationDateClicked, setCreationDateClicked] = useState(false);
        const [moduleClicked, setModuleClicked] = useState(false);
        const [clubClicked, setClubClicked] = useState(false);
        const [levelClicked, setLevelClicked] = useState(false);
        const [showAllProjects, setShowAllProjects] = useState(true);
        const handleToggleClick = () => {
            setShowAllProjects(!showAllProjects);
        }; 
        const [showNotification, setShowNotification] = useState(false);
  const [showProfile, setShowProfile] = useState(false);


  const handleButtonClick = () => {
    setShowNotification(prevState => !prevState);
  };
  const handleProfileClick = () => {
    setShowProfile(prevState => !prevState);
  };
        
        const location = useLocation();
        const params = new URLSearchParams(location.search);
        const uid = params.get('uid');
        const [project, setProject] = useState([]);
        const fetchProject = async () => {
            try {
                const response = await axios.post('http://127.0.0.1:5000/acceuil', {user_id: uid});
                setProject(response.data.projects);
                console.log(response.data);
            } catch (error) {
                console.log(error.response);
            }
        }
        useEffect(() => {
            
            fetchProject();  
        }, []);
        const [search, setSearch] = useState([]);
        const [filter1, setFilter1] = useState(false);
        const [filter2, setFilter2] = useState(false);
        const [filter3, setFilter3] = useState(false);
        const [filter4, setFilter4] = useState(false);
        const [filter5, setFilter5] = useState(false);
        const [word, setWord] = useState('');
        const fetchSearch = async () => {
            try {
                const response = await axios.post('http://127.0.0.1:5000/search_project', {filters: {admin_email:filter1,club_name:filter2,module_name:filter3,niveau_name:filter4,favori:filter5}, keyword: word, user_id: uid });
                console.log(word);
                setSearch(response.data.projects);

                console.log(response.data);
            } catch (error) {
                console.log(error.response);
            }
        }
        useEffect(() => {
            fetchSearch(); 
        }, [filter1, filter2, filter3, filter4, filter5, word]);
        const [items, setItems] = useState([]);
        useEffect(() => {
            if (search && search.length > 0) {
                setItems(search.map((eve) => (
                    <div className="w-[100%] ">
                        <div className="flex mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                            </svg>
                            <p className="text-black ml-4">{eve.nom}</p>
                        </div>
                    </div>
                )));
            }
          }, [word, search]);
          
    return ( 
        <div className="h-[100%] grid grid-cols-6 bg-mypurple">
            <Sidebar  className="col-span-1" buttonColor = { buttonColor }></Sidebar>
            <div className=" bg-mypurple h-screen col-span-5">
                <div className="bg-white h-[98.9%] mt-[1.1%] rounded-tl-2xl"> 
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
                                                setOwnerClicked(false);
                                                setCreationDateClicked(false);
                                                setModuleClicked(false);
                                                setClubClicked(false);
                                                setLevelClicked(false)} }
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="pl-10">
                                    <div className="w-[90%] h-20 border-b-2 text-gray-700 border-gray-700 flex justify-around  items-center ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
                                        </svg>
                                        <button
                                            onClick={() => {
                                                setFilter1(true);
                                                setFilter2(false);
                                                setFilter3(false);
                                                setFilter4(false);
                                                setFilter5(false);
                                                setOwnerClicked(!ownerClicked);
                                                setCreationDateClicked(false);
                                                setModuleClicked(false);
                                                setClubClicked(false);
                                                setLevelClicked(false);
                                            }}
                                            className={`border-gray-700 px-2 py-1 text-sm border-2 rounded-lg ${ownerClicked ? 'bg-gray-700 text-gray-100' : 'text-gray-700'}`}
                                        >
                                            Propriétaire
                                        </button>
                                        <button
                                            onClick={() => {
                                                setFilter3(true);
                                                setFilter2(false);
                                                setFilter1(false);
                                                setFilter4(false);
                                                setFilter5(false);
                                                setOwnerClicked(false);
                                                setCreationDateClicked(false);
                                                setModuleClicked(!moduleClicked);
                                                setClubClicked(false);
                                                setLevelClicked(false);
                                            }}
                                            className={`border-gray-700 px-2 py-1 text-sm border-2 rounded-lg ${moduleClicked ? 'bg-gray-700 text-gray-100' : 'text-gray-700'}`}
                                        >
                                            Module
                                        </button>

                                        <button
                                            onClick={() => {
                                                setFilter2(true);
                                                setFilter1(false);
                                                setFilter3(false);
                                                setFilter4(false);
                                                setFilter5(false);
                                                setOwnerClicked(false);
                                                setCreationDateClicked(false);
                                                setModuleClicked(false);
                                                setClubClicked(!clubClicked);
                                                setLevelClicked(false);
                                            }}
                                            className={`border-gray-700 px-2 py-1 text-sm border-2 rounded-lg ${clubClicked ? 'bg-gray-700 text-gray-100' : 'text-gray-700'}`}
                                        >
                                            Club
                                        </button>

                                        <button
                                            onClick={() => {
                                                setFilter4(true);
                                                setFilter1(false);
                                                setFilter3(false);
                                                setFilter2(false);
                                                setFilter5(false);
                                                setOwnerClicked(false);
                                                setCreationDateClicked(false);
                                                setModuleClicked(false);
                                                setClubClicked(false);
                                                setLevelClicked(!levelClicked);
                                            }}
                                            className={`border-gray-700 px-2 py-1 text-sm border-2 rounded-lg ${levelClicked ? 'bg-gray-700 text-gray-100' : 'text-gray-700'}`}
                                        >
                                            Niveau
                                        </button>
                                    </div>
                                    <div className="mb-10">
                                        <p className="text-black my-3">Résultat:</p>
                                        <div className=" h-44  w-[90%]">
                                            <div className=" h-44 overflow-auto">
                                                {items}
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
                    {showAllProjects ? (
                        <Homepage project={project} handleToggleClick={handleToggleClick} fetchProject={fetchProject} />
                        
                    ) : (
                        <Allprojects project={project} handleToggleClick={handleToggleClick} />
                    )}
                </div>
            </div>
        </div>
     );
}
 
export default Home;

