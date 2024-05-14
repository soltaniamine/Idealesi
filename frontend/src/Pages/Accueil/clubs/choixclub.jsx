import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from "../Home/Sidebar";
import Profile from "../../../assets/Acceuil/TypeProjet/profile.png"
import cercle1 from '../../../assets/Acceuil/clubs/cercle1.svg';
import triangle from '../../../assets/Acceuil/clubs/triangle.svg';
import cercle2 from '../../../assets/Acceuil/clubs/cercle2.svg';
import highlightClubName from '../../../assets/Acceuil/clubs/highlight.svg';
import iconproject from '../../../assets/Acceuil/clubs/ideeicon.svg';
import threelines from '../../../assets/Acceuil/clubs/threelines.svg';
import photo from "../../../assets/Acceuil/TypeProjet/profile.png";
import profile from "../../../assets/Acceuil/Home/profile.png"
import GDGlogo from '../../../assets/Acceuil/clubs/clublogos/gdg.svg';
import './choixclub.css';
import { Link , useLocation} from 'react-router-dom';
import Notification from "../notification-et-profile/notification";
import Profilee from "../notification-et-profile/profile";
const ChoixClub = ({ buttonColor }) => {
    const [isClicked, setIsClicked] = useState(false);
    const [ownerClicked, setOwnerClicked] = useState(false);
    const [creationDateClicked, setCreationDateClicked] = useState(false);
    const [moduleClicked, setModuleClicked] = useState(false);
    const [clubClicked, setClubClicked] = useState(false);
    const [levelClicked, setLevelClicked] = useState(false);
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const user_id = params.get('uid');
    const Tech_idiation = params.get('tech');
    const [clubs, setClubs] = useState([]);
    const [items, setItems] = useState([]);
    const [showNotification, setShowNotification] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
  
  
    const handleButtonClick = () => {
      setShowNotification(prevState => !prevState);
    };
    const handleProfileClick = () => {
      setShowProfile(prevState => !prevState);
    };
    useEffect(() => {
        const getClubs = async () => {
          try {
            const response = await axios.get('http://127.0.0.1:5000/liste_club');
            setClubs(response.data.clubs);
            console.log(response.data.projects);
          } catch (error) {
            console.log(error.response);
          }
        };
      
        getClubs();
      }, []);
 
      useEffect(() => {
        if (clubs && clubs.length > 0) {
           setItems(clubs.map((clb) => (
                <Link to={`/events?uid=${user_id}&tech=${Tech_idiation}&cid=${clb.club_id}`}>
                    <ClubCard photo={clb.photo} nom={clb.nom} />
                </Link>
           )));
        }
     }, [clubs]);

    const ClubCard = ({ photo, nom }) => {
        return (
            <div className="club1 mb-8 flex flex-col items-center w-56 h-52 border-2 border-yellow-400 rounded-[38px]  ">

                <div className="roundclublogo mt-8 ">
                    <img className="h-20 w-20 rounded-full" src={photo !== null ? photo : photo = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'} alt={nom} />
                </div>

                <div className="clubname mt-4 relative flex flex-col items-center w-[130%]">
                    <h1 className="relative z-10 whitespace-nowrap " style={{ fontSize: '23.17px', fontFamily: 'Product Sans' }}>{nom}</h1>
                    <img className="absolute inset-0 z-0" style={{ marginTop: 'auto' }} src={highlightClubName} alt="highlighter" />
                </div>



            </div>
        )
    }

    const [word, setWord] = useState('');
    const [search, setSearch] = useState([]);
          const fetchSearch = async () => {
              try {
                  const response = await axios.post('http://127.0.0.1:5000/search_club', {mot_cle: word});
                  console.log(word);
                  setSearch(response.data.clubs);
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
                              <p className="text-black ml-4">{eve.nom_club}</p>
                          </div>
                      </div>
                  )));
              }
            }, [search]);
  


    return (
        <div className="grid grid-cols-6 bg-mypurple mt-[1,1%] ">
            <Sidebar className="col-span-1" buttonColor={buttonColor}></Sidebar>


            <div className=" bg-mypurple h-screen col-span-5  mt-[1,1%] ">
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
                    </div> {/* hada howa div t3k lina */}

                    <div className="clubchoice w-[96,5%] h-[90%] ml-3 mr-3 mt-3">

                        <div className="header flex items-start relative">

                            <img src={threelines} className="absolute  w-1° h-10 top-0 left-0 " />

                            <div className=" mt-5 ml-6   w-full  h-24 border bg-white mx-2 rounded-lg" style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px', borderBottomRightRadius: '20px', borderBottomLeftRadius: '20px', borderWidth: '3.25px', borderColor: '#8C95EB' }}>

                                <img src={iconproject} className="absolute top-1/2 right-0 transform -translate-y-1/2 mt-3 h-[60%] mr-6 " alt="Icon" />

                                <div className="title flex flex-col items-start absolute left-16 top-1/4 bottom-0 mb-2 ml-2">
                                    <h1 className="z-10 text-3xl font-semibold" style={{ fontFamily: 'Product Sans' }}>Projet Club</h1>
                                </div>

                                <img src={cercle1} className="absolute top-20 ml-28 mt-0 left-96 w-10 h-10" alt="smallcircle1" />
                                <img src={cercle2} className="absolute top-10 ml-5 w-10 h-full" alt="smallcircle2" />
                                <img src={triangle} className="absolute top-10 left-48 w-10 h-20" alt="smalltriangle" />
                                <img src={triangle} className="absolute top-6  left-96 w-10 h-20 ml-96 " alt="smalltriangle2" />

                            </div>
                        </div>


                        <div className="clublist  pl-10 pt-2 grid grid-cols-3  overflow-auto ml-10 mt-6 mr-12 h-[70%] w-[98%] ">
                             {items}
                        </div>
                        
                    </div>
                </div>
            </div>

        </div >


    );

}


export default ChoixClub;