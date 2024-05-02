import React from "react";
import { Link,useLocation } from "react-router-dom";
import Sidebar from "../Accueil/Home/Sidebar";
import photo from "../../assets/Acceuil/TypeProjet/profile.png";
import level from "../../assets/level.svg";
import event from "../../assets/event.svg";
import module from "../../assets/module.svg";
import club from "../../assets/club.svg";

const Admine = ({ buttonColor }) => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const uid = params.get('uid');
    return (
        <div className="grid grid-cols-6 bg-mypurple mt-[1,1%]">
            <Sidebar className="col-span-1" buttonColor={buttonColor} />

            <div className="bg-mypurple h-screen col-span-5 mt-[1,1%]">
                <div className="bg-white h-[98.9%] mt-[1.1%] rounded-tl-2xl">
                    <div className="relative w-full h-[9%] border-b-2 text-black flex justify-end items-center">
                        <div className="w-32 flex mt-2 items-center justify-around mr-5 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                            </svg>
                            <div className="w-10 h-10 overflow-hidden rounded-full">
                                <img src={photo} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="recent w-[96,5%] h-[90%] ml-8 mr-8">
                        <div className="flex mb-4 w-100">
                            <h1 className="text-3xl mt-6 font-semibold">Paramètres généraux</h1>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-2 gap-10 h-screen ml-[8%] mr-[2%]">
                            <Link to={`/Niveauu?uid=${uid}`}>
                                <div className="bg-gray-100 p-4 w-[85%] h-[70%] rounded-3xl mb-[10%] mt-[5%] hover:bg-[#E3E6FE] hover:scale-110 transition-transform duration-500">
                                    <div className="ml-[4%] mt-[4%]">
                                        <h1 className="text-2xl font-bold">Modifier les niveaux</h1>
                                    </div>
                                    <div className="size-[55%] ml-[50%]">
                                        <img src={level} alt="" />
                                    </div>
                                    <div className="ml-[5%]">
                                            <button className="next cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                                </svg>
                                            </button>
                                    </div>
                                </div>
                            </Link>
                            <Link to={`/modulee?uid=${uid}`}>
                                <div className="bg-gray-100 p-4 w-[85%] h-[70%] rounded-3xl mb-[10%] mt-[5%] hover:bg-[#D5FED6] hover:scale-110 transition-transform duration-500">
                                    <div className="ml-[4%] mt-[4%]">
                                        <h1 className="text-2xl font-bold">Modifier les modules</h1>
                                    </div>
                                    <div className="size-[55%] ml-[50%]">
                                        <img src={module} alt="" />
                                    </div>
                                    <div className="ml-[5%]">
                                        
                                            <button className="next cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                                </svg>
                                            </button>
                                        
                                    </div>
                                </div>
                            </Link>
                            <Link to={`/event?uid=${uid}`}>
                                <div className="bg-gray-100 p-4 w-[85%] h-[70%] rounded-3xl mt-[-17%] hover:bg-[#F9CFCF] hover:scale-110 transition-transform duration-500">
                                    <div className="ml-[4%] mt-[4%]">
                                        <h1 className="text-2xl font-bold">Modifier les clubs et évènements</h1>
                                    </div>
                                    <div className="size-[55%] ml-[50%]">
                                        <img src={club} alt="" />
                                    </div>
                                    <div className="ml-[5%]">
                                            <button className="next cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                                </svg>
                                            </button>
                                    </div>
                                </div>
                            </Link>
                            <Link to={`/expert?uid=${uid}`}>
                                <div className="bg-gray-100 p-4 w-[85%] h-[70%] rounded-3xl mt-[-17%] hover:bg-[#FFEBA3] hover:scale-110 transition-transform duration-500">
                                    <div className="ml-[4%] mt-[4%]">
                                        <h1 className="text-2xl font-bold">Modifier la liste des experts</h1>
                                    </div>
                                    <div className="size-[55%] ml-[50%] mt-[8%]">
                                        <img src={event} alt="" />
                                    </div>
                                    <div className="ml-[5%] mt-[-7%]">
                                        
                                            <button className="next cursor-pointer">
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
    );
};

export default Admine;
