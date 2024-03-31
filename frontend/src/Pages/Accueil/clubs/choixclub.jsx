import React, { useState } from 'react';
import Sidebar from "../Home/Sidebar";
import cercle1 from '../../../assets/Acceuil/clubs/cercle1.svg';
import triangle from '../../../assets/Acceuil/clubs/triangle.svg';
import cercle2 from '../../../assets/Acceuil/clubs/cercle2.svg';
import highlightClubName from '../../../assets/Acceuil/clubs/highlight.svg';
import iconproject from '../../../assets/Acceuil/clubs/ideeicon.svg';
import threelines from '../../../assets/Acceuil/clubs/threelines.svg';
import photo from "../../../assets/Acceuil/TypeProjet/profile.png";
import GDGlogo from '../../../assets/Acceuil/clubs/clublogos/gdg.svg';
import './choixclub.css'
const ChoixClub = ({ buttonColor }) => {

    const club1 = {
        "name": "Google Developer Groups",
        "logo": GDGlogo,
        "Type": "Club",
        "Poster": "N/A",
    }

    const [clubs, setClubs] = useState([]);
     
    // const getClubs = async () => {
    //     const response = await fetch("https://api.");
    //     const FinalData = await response.json();
    //     setClubs(FinalData)
    // }

    

    // useEffect(() => {
    //     getClubs();
    // }, [])
 

    const ClubCard = ({ club }) => {
        return (
            <div className="club1 mb-8 flex flex-col items-center w-56 h-52 border-2 border-yellow-400 rounded-[38px]  ">

                <div className="roundclublogo mt-2 ">
                    <img src={club.logo !== 'N/A' ? club.logo : club.logo = 'https://via.placeholder.com/100'} alt={club.name} />
                </div>

                <div className="clubname mt-6 relative flex flex-col items-center">
                    <h1 className="relative z-10 whitespace-nowrap " style={{ fontSize: '23.17px', fontFamily: 'Product Sans' }}>{club.name}</h1>
                    <img className="absolute inset-0 z-0" style={{ marginTop: 'auto' }} src={highlightClubName} alt="highlighter" />
                </div>



            </div>
        )
    }




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

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                            </svg>

                            <div className="w-10 h-10 overflow-hidden rounded-full ">
                                <img src={photo} alt="" />
                            </div>

                        </div>

                    </div> {/* hada howa div t3k lina */}

                    <div className="clubchoice w-[96,5%] h-[90%] ml-3 mr-3 mt-3">

                        <div className="header flex items-start relative">

                            <img src={threelines} className="absolute  w-1° h-10 top-0 left-0 " />

                            <div className=" mt-5 ml-6   w-full  h-24 border bg-white mx-2 rounded-lg" style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px', borderBottomRightRadius: '20px', borderBottomLeftRadius: '20px', borderWidth: '4px', borderColor: '#8C95EB' }}>

                                <img src={iconproject} className="absolute top-1/2 right-0 transform -translate-y-1/2 mt-3 h-[60%] mr-6 " alt="Icon" />

                                <div className="title flex flex-col items-start absolute left-16 top-1/4 bottom-0 mb-2 ml-2">
                                    <h1 className="z-10 text-3xl font-semibold" style={{ fontFamily: 'Product Sans' }}>Club Project</h1>
                                </div>

                                <img src={cercle1} className="absolute top-20 ml-28 mt-0 left-96 w-10 h-10" alt="smallcircle1" />
                                <img src={cercle2} className="absolute top-10 ml-5 w-10 h-full" alt="smallcircle2" />
                                <img src={triangle} className="absolute top-10 left-48 w-10 h-20" alt="smalltriangle" />
                                <img src={triangle} className="absolute top-6  left-96 w-10 h-20 ml-96 " alt="smalltriangle2" />

                            </div>
                        </div>


                        <div className="clublist  pl-10 pt-2 grid grid-cols-3  overflow-auto ml-10 mt-6 mr-12 h-[70%] w-[98%] ">
                            
                              <ClubCard club={club1} />  
                              <ClubCard club={club1} /> 
                              <ClubCard club={club1} /> 
                              <ClubCard club={club1} /> 
                              <ClubCard club={club1} /> 
                              <ClubCard club={club1} /> 
                              
                             {/* {clubs.map((club) => {
                              <ClubCard club={club} />  
                            })
                            }  */}
                             

                        </div>
                        
                    </div>
                </div>
            </div>

        </div >


    );

}


export default ChoixClub;