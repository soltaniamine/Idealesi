import Sidebar from "../Home/Sidebar";
import { useState} from "react";
import Alltemplates from "./Alltemplates";
import photo from '../../../assets/Acceuil/Home/profile.png';
import Notification from "../notification-et-profile/notification";
import Profilee from "../notification-et-profile/profile";
const Templates = ({ buttonColor }) => {
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
            <Sidebar className="col-span-1"  buttonColor = { buttonColor } ></Sidebar>
            <div className=" bg-mypurple h-screen col-span-5  mt-[1,1%] ">
                <div className="bg-white h-[98.9%] mt-[1.1%] rounded-tl-2xl"> 
     <div className="relative w-full h-[9%] border-b-2 text-black  flex justify-end  items-center ">
      <div className=" w-32 flex  mt-2 items-center justify-around mr-5 mb-3 ">
      
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
                    <Alltemplates/>
                </div>
            </div>
        </div>
     );
}
 
export default Templates;