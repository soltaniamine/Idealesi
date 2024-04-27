import React, { useState } from 'react';
import SidebarExpert from './SidebarExpert';
import cercle1 from '../../../assets/Acceuil/clubs/cercle1.svg';
import triangle from '../../../assets/Acceuil/clubs/triangle.svg';
import cercle2 from '../../../assets/Acceuil/clubs/cercle2.svg';
import iconprof from '../../../assets/Acceuil/Expert/iconprof.svg';
import threelines from '../../../assets/Acceuil/clubs/threelines.svg';
import photo from "../../../assets/Acceuil/TypeProjet/profile.png";
import rectangleclaire from '../../../assets/Acceuil/TypeProjet/rectangleclaire.svg';
import line from '../../../assets/Acceuil/events/line.svg';
import Button from '@mui/material/Button';

import './Expert.css';


const Expert = ({ buttonColor }) => {
    // const Element = ({ event }) => {
    //     return (
    //         <div className="element  mb-4 ml-9 mb w-[91%] h-[35%] w bg-gray-300 rounded-lg drop-shadow-md">
    //             <img className="eventpic pt-1 w-[10.25%] ml-6 top-1 " src={event.logo} alt="eventpic" />
    //             <h1 className='eventname absolute top-0 mt-8 ml-36 text-[22px] ' style={{ fontFamily: 'Product Sans' }} >{event.name}</h1>
    //         </div>
    //     )
    // }

    // const getModules = async () => {
    //     const response = await fetch("https://api.");
    //     const FinalData = await response.json();
    //     setModules(FinalData)
    // }


    // useEffect(() => {
    //     getModules();
    // }, [])


    const ModuleElement = ({ module }) => {
        const [elementColor, setElementColor] = useState('bg-gray-300');
        const [buttonText, setButtonText] = useState('add');

        const handleClick = () => {
            if (buttonText === 'add') {
                setElementColor('bg-gray-100'); // Change the color to a lighter shade
                setButtonText('added');
            } else {
                setElementColor('bg-gray-300'); // Revert the color back to its original form
                setButtonText('add');
            }
        };

        return (
            <div className={`element ml-20 mt-2 w-[80%] h-[20%] ${elementColor} rounded-lg drop-shadow-md`}>
                <div className="absolute right-2 mt-[0.5%] ml-[92%]">
                    <Button size="small" variant="contained" onClick={handleClick} style={{ backgroundColor: buttonText === 'added' ? '#8589B3' : '#9398CF' }}>
                        {buttonText}
                    </Button>               
                </div>
                <img className="w-8 ml-3 mt-1" src={iconprof} alt="les modules" />
                <h1 className="modulename absolute top-0 ml-14 mt-1 text-[20px]" style={{ fontFamily: 'Product Sans' }}>{module}</h1>
            </div>
        )
    }


    const Year = ({ Year }) => {
        return (
            <div className=" year bg-white w-[85%] h-[80%] ml-16 mt-2 mb-4 rounded-[37px] selected relative  hover:drop-shadow-md">
                <div className='yearname mr-5 pt-1'>
                    <h1 className="text-center ml-10 mt-2 font-bold text-2xl " style={{ fontFamily: 'Product Sans' }}>{Year}</h1>
                    <img className=' ml-[46%] ' src={line} alt="blueline  " />
                </div>
                <div className=' yearmodules overflow-auto h-[75%] ml-1'>
                    <ModuleElement module={"ANA1-analyse mathematique 1"} />
                    <ModuleElement module={"ANA1-analyse mathematique 1"} />
                    <ModuleElement module={"ANA1-analyse mathematique 1"} />
                    <ModuleElement module={"ANA1-analyse mathematique 1"} />
                    <ModuleElement module={"ANA1-analyse mathematique 1"} />
                </div>
            </div>
        )
    }


    return (
        <div className="grid grid-cols-6 bg-mypurple mt-[1,1%] ">
            <SidebarExpert className="col-span-1" buttonColor={buttonColor}></SidebarExpert>


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

                            <div className=" yearselection overflow-auto bg-blac modulelist bg-red absolute left-0  right-0 mt-14 h-[83%] rounded-b-3xl">
                                <Year Year={"1 CP"} />
                                <Year Year={"2 CP"} />
                                <Year Year={"1 CS"} />
                                <Year Year={"2 CS"} />
                                <Year Year={"3 CS"} />
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </div >


    );

}

export default Expert