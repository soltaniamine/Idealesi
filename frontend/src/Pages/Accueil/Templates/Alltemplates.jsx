import '../Home/Homepage.css';
import React, { useState } from 'react';
import Templatescard from '../Home/Templatescard';
import photo from '../../../assets/Acceuil/Home/Rectangle 4271.svg';
import photoo from '../../../assets/Acceuil/Home/Group.svg';
const Alltemplates = () => {
    const [projectList] = useState([<Templatescard text='Brainstorming' step='Brainwriting'/>, <Templatescard text='Brainwriting' step='Brainwriting' />,<Templatescard text='combinaison' step='Combinaison' />,<Templatescard text='Raffinement' step='Raffinement' />,<Templatescard text='Moscow' step='Moscow' />]);

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
                    <h1 className="z-10 text-2xl mt-7 ml-5">Les modèles</h1>
                    <img className="line w-36" src={photo} alt="" />
                    <img className="sousligne w-24" src={photoo} alt="" />
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