import '../Home/Homepage.css'
import React, { useState } from 'react';
import Projectcard from '../Home/Projectcard';
import photo from '../../../assets/Acceuil/Home/Rectangle 4271.svg';
import photoo from '../../../assets/Acceuil/Home/Group.svg';
import Notification from "../notification-et-profile/notification";
import Profilee from "../notification-et-profile/profile";

const Allshared = () => {
    const [projectList, setProjectList] = useState([<Projectcard key={0} />]);
    const [isClicked1, setIsClicked1] = useState(true);
    const [isClicked2, setIsClicked2] = useState(false);

    const handleNewProjectClick = () => {
        const newProject = <Projectcard key={projectList.length} />;
        setProjectList([...projectList, newProject]);
    };

    const renderProjectCards = () => {
        return projectList.map((project, index) => (
            <div key={index} className="mt-6 ml-6 w-36 h-44">
                {project}
            </div>
        ));
    };

    return ( 
        <div className="recent w-[96,5%] h-[90%]">
            <div className='flex justify-between items-end'>
                <div className="posss flex mb-4 w-96 ml-8">
                    <h1 className="z-10 text-2xl mt-7 ml-5">Shared with me</h1>
                    <img className="line2 w-36" src={photo} alt="" />
                    <img className="sousligne2 w-24" src={photoo} alt="" />
                </div>
                <div>
                    <div className='flex justify-between items-center w-44 mb-4 mr-10'>
                        <button onClick={() => handleNewProjectClick()} className='text-xs bg-mypurple text-white px-3 py-1.5 rounded-lg'>New project +</button>
                        <svg onClick={()=>{setIsClicked1(false); setIsClicked2(true)}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`w-6 h-6 cursor-pointer ${isClicked2 ? ' text-mypurple' : ''}`}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                        <svg onClick={()=>{setIsClicked1(true); setIsClicked2(false)}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`w-6 h-6 cursor-pointer ${isClicked1 ? ' text-mypurple' : ''}`}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="bg-mygrey w-[95%] h-[85%] ml-8 rounded-2xl overflow-auto">
                {isClicked1 ? 
                    <div className='grid grid-cols-5'>
                        {renderProjectCards()}
                    </div>
                    :
                    <div className='flex justify-center'>
                        <div className='w-[93%] mt-10'>
                            <div className='grid grid-cols-3 space-x-24 h-[40%] border-b-2 border-gray-300 font-bold '>
                                <p className='ml-10'>Name</p>
                                <p className=''>Owner</p>
                                <p className='mr-10'>Creation date</p>
                            </div>
                            <div className='grid grid-cols-3 space-x-24 h-[40%] border-b-2 border-gray-300 mt-5'>
                                <div className='flex ml-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                                    </svg>
                                    <p className='ml-2'>SFSD's project</p>
                                </div>
                                <p>BOUALI Rima</p>
                                <p className='mr-10'>08/03/2024</p>
                            </div>
                            <div className='grid grid-cols-3 space-x-24 h-[40%] border-b-2 border-gray-300 mt-2'>
                                <div className='flex ml-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                                    </svg>
                                    <p className='ml-2'>Analyse</p>
                                </div>
                                <p>Soltani Mohamed Elamine</p>
                                <p className='mr-10'>22/12/2023</p>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
     );
}
 
export default Allshared;