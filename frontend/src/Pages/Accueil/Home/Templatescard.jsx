import React, { useState } from 'react';
import templatephoto from "../../../assets/Acceuil/Home/templatephoto.svg";
const Templatescard = () => {
    const [isHovered, setIsHovered] = useState(false);
    const projectname = 'Aminos';

    return ( 
        <div 
            className='h-[100%] bg-mypurple3 rounded-lg' 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className='text-white h-[70%] flex justify-center items-center  cursor-pointer'>
                <img className="size-16" src={templatephoto} alt="" />
            </div>
            {isHovered ? (
                <div className='h-[30%] flex justify-around items-center bg-white rounded-lg'>
                    <button className="bg-mypurple px-3 py-1 rounded-lg text-xs text-white">insert</button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                </div>
            ) : (
                <div className='h-[30%] flex justify-center items-center bg-white rounded-lg'>
                    <p className='text-xs'>{projectname}</p>
                </div>
            )}
        </div>
     );
}
 
export default Templatescard;
