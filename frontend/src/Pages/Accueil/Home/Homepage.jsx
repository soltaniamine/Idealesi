import './Homepage.css'
import Projectcard from './Projectcard.jsx';
import Templatescard from './Templatescard.jsx';
import {Link, useLocation} from 'react-router-dom';
import { useState, useEffect } from 'react';
import photo from "../../../assets/Acceuil/Home/Rectangle 4271.svg";
import photoo from "../../../assets/Acceuil/Home/Group.svg";
import photooo from "../../../assets/Acceuil/Home/boutonplus.svg";
import photoooo from "../../../assets/Acceuil/Home/Rectangle 4323.svg";
import photooooo from "../../../assets/Acceuil/Home/Group.svg";
import photoooooo from "../../../assets/Acceuil/Home/boutonplus.svg";
import axios from 'axios';

const Homepage = ({project, handleToggleClick,fetchProject}) => { 

    
    
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const uid = params.get('uid');

    const [items, setItems] = useState([]);
    useEffect(() => {
        if (project && project.length > 0) {
            setItems(project.map((prj) => (
                <div key={prj.projet_id} className='w-[15%] h-[90%]'>
                    <Projectcard projectname={prj.nom} fav={prj.favori} pid={prj.projet_id} uid={uid} mid={prj.module_id} fetchProject={fetchProject}/>
                </div>
            )));
        }
    }, [project]);
    
    
    return ( 
        <div className=" recent w-[96,5%] h-[90%] ml-8">
            <div className="poss flex mb-4 w-96">
                <h1 className="z-10 text-2xl mt-7">Projets récents</h1>
                <img className="line w-36" src={photo} alt="" />
                <img className="sousligne w-24" src={photoo} alt="" />
            </div>
            <div className=" bg-mygrey w-[90%] h-[38%] ml-8 rounded-2xl">
                <div className='h-[88%] flex items-end justify-around '>
                    <Link to={`/choixtechnique?uid=${uid}`} className='w-[15%] h-[90%] bg-mypurple2 rounded-lg  cursor-pointer'>
                        <div className=' text-white h-[80%] flex justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 mt-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </div>
                        <div className='h-[20%] flex justify-center items-center'>
                            <p className=' text-xs text-white'>Nouveau projet</p>
                        </div>
                    </Link>
                    {items.slice(-3).map((itm) => (
                        itm
                    ))}
                </div>
                <div className=' h-[12%] flex justify-end mr-4'>
                    <button onClick={handleToggleClick} className='flex items-center text-xs'>
                        <img className="size-4" src={photooo} alt="" />
                        <p className='ml-1'>Tous projets</p>
                    </button>
                </div>
            </div>
            <div className="pos flex mb-4 w-96">
                <h1 className="z-10 text-2xl mt-7">Modèles recommandés</h1>
                <img className="line1 w-60" src={photoooo} alt="" />
                <img className="sousligne1 w-24" src={photooooo} alt="" />
            </div>
            <div className=" bg-mygrey w-[90%] h-[32%] ml-8 rounded-2xl">
                <div className='h-[88%] flex items-end justify-around '>
                    <div className='w-[13%] h-[90%]'>
                        <Templatescard text='Brainstorming' step='Brainwriting'/>
                    </div>
                    <div className='w-[13%] h-[90%]'>
                        <Templatescard text='Brainwriting' step='Brainwriting' />
                    </div>
                    <div className='w-[13%] h-[90%]'>
                        <Templatescard text='combinaison' step='Combinaison' />
                    </div>
                    <div className='w-[13%] h-[90%]'>
                        <Templatescard text='Raffinement' step='Raffinement' />
                    </div>
                    <div className='w-[13%] h-[90%]'>
                        <Templatescard text='Moscow' step='Moscow' />
                    </div>
                </div>
                <div className=' h-[12%] flex justify-end mr-4'>
                    <button className='flex items-center text-xs'>
                        <Link className='flex' to={`/templates?uid=${uid}`}>
                            <img className="size-4" src={photoooooo} alt="" />
                            <p className='ml-1'>Voir plus</p>
                        </Link>
                    </button>
                </div>
            </div>
            
        </div>
     );
}
 
export default Homepage;