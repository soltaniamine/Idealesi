import '../Home/Homepage.css';
import React, { useState } from 'react';
import Templatescard from '../Home/Templatescard';

const Alltemplates = () => {
    const [projectList] = useState([<Templatescard key={0} />,<Templatescard key={0} />,<Templatescard key={0} />]);

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
                <div className="poss flex mb-4 w-96 ml-8">
                    <h1 className="z-10 text-2xl mt-7 ml-5">All Templates</h1>
                    <img className="line w-36" src={require("../../../assets/Acceuil/Home/Rectangle 4271.svg").default} alt="" />
                    <img className="sousligne w-24" src={require("../../../assets/Acceuil/Home/Group.svg").default} alt="" />
                </div>
                
            </div>
            <div className="bg-mygrey w-[95%] h-[85%] ml-8 rounded-2xl overflow-auto">
                <div className='grid grid-cols-5'>
                    {renderProjectCards()}
                </div>
            </div>
        </div>
     );
}
 
export default Alltemplates;