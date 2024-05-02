import Sidebar from "../Home/Sidebar";
import { useState} from "react";
import Allfavorites from "./Allfavorites";
import photo1 from "../../../assets/Acceuil/Home/profile.png";
import Notification from "../notification-et-profile/notification";
import Profilee from "../notification-et-profile/profile";
const Favorite = ({ buttonColor }) => {
        const [isClicked, setIsClicked] = useState(false);
        const [ownerClicked, setOwnerClicked] = useState(false);
        const [creationDateClicked, setCreationDateClicked] = useState(false);
        const [moduleClicked, setModuleClicked] = useState(false);
        const [clubClicked, setClubClicked] = useState(false);
        const [levelClicked, setLevelClicked] = useState(false);
        const [showNotification, setShowNotification] = useState(false);
        const [showProfile, setShowProfile] = useState(false);
      
      
        const handleButtonClick = () => {
          setShowNotification(prevState => !prevState);
        };
        const handleProfileClick = () => {
          setShowProfile(prevState => !prevState);
        };
        
        
    return ( 
        <div className="grid grid-cols-6 bg-mypurple">
            <Sidebar className="col-span-1" buttonColor = { buttonColor }></Sidebar>
            <div className=" bg-mypurple h-screen col-span-5">
                <div className="relative bg-white h-[98.9%] mt-[1.1%] rounded-tl-2xl"> 
                    <div className="  h-14 flex justify-between items-start border-b-2">
                        {isClicked ? (
                            <div  className="z-50 w-[50%] ml-8 mt-1.5 border-2 border-gray-100 bg-gray-100 rounded-xl  text-gray-600 ">
                                <div className=" w-[100%] h-12 flex items-center border-b-2 border-gray-700 rounded-t-xl pl-3  cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                    <input className="focus:outline-none ml-2 mr-7 bg-slate-100 w-[80%]" type="text" placeholder="Search..." /> 
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
                                                setOwnerClicked(!ownerClicked);
                                                setCreationDateClicked(false);
                                                setModuleClicked(false);
                                                setClubClicked(false);
                                                setLevelClicked(false);
                                            }}
                                            className={`border-gray-700 px-2 py-1 text-sm border-2 rounded-lg ${ownerClicked ? 'bg-gray-700 text-gray-100' : 'text-gray-700'}`}
                                        >
                                            Owner
                                        </button>

                                        <button
                                            onClick={() => {
                                                setOwnerClicked(false);
                                                setCreationDateClicked(!creationDateClicked);
                                                setModuleClicked(false);
                                                setClubClicked(false);
                                                setLevelClicked(false);
                                            }}
                                            className={`border-gray-700 px-2 py-1 text-sm border-2 rounded-lg ${creationDateClicked ? 'bg-gray-700 text-gray-100' : 'text-gray-700'}`}
                                        >
                                            Creation Date
                                        </button>

                                        <button
                                            onClick={() => {
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
                                                setOwnerClicked(false);
                                                setCreationDateClicked(false);
                                                setModuleClicked(false);
                                                setClubClicked(false);
                                                setLevelClicked(!levelClicked);
                                            }}
                                            className={`border-gray-700 px-2 py-1 text-sm border-2 rounded-lg ${levelClicked ? 'bg-gray-700 text-gray-100' : 'text-gray-700'}`}
                                        >
                                            Level
                                        </button>
                                    </div>
                                    <div className="mb-10">
                                        <p className="text-black my-3">Recent searches</p>
                                        <div className="w-[50%] flex justify-between">
                                            <div className="flex justify-start">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                </svg>
                                                <p className="text-black ml-2">Mind map</p>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                            </svg>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className=" w-[50%] h-11 ml-8 mt-1.5 flex justify-start items-center border-2 border-gray-100 rounded-xl pl-3 text-gray-600 cursor-pointer" onClick={() => setIsClicked(true)}>
                                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                                <input className="focus:outline-none ml-2 mr-7 w-[80%]" type="text" placeholder="Search..." /> 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
                                </svg>
                            </div>
                        )}
                        
                        
                        <div className="w-32 flex  mt-2 items-center justify-around mr-5 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                        </svg>
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
                                <img src={photo1} alt="Profile" className="w-full h-full rounded-full"/>
                            </button>
                            {showProfile && (
                                <div className="absolute  ml-[76%] mt-[18%]  z-50 h-[20%] w-[100%] ">
                                <Profilee/>
                                </div>
                            )}
                        </div>
                    </div>
                    <Allfavorites/>
                </div>
            </div>
        </div>
     );
}
 
export default Favorite;