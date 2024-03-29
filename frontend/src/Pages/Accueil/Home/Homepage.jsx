import './Homepage.css'
import Projectcard from './Projectcard.jsx';
import Templatescard from './Templatescard.jsx';
import {Link} from 'react-router-dom';
import photo from "../../../assets/Acceuil/Home/Rectangle 4271.svg";
import photoo from "../../../assets/Acceuil/Home/Group.svg";
import photooo from "../../../assets/Acceuil/Home/boutonplus.svg";
import photoooo from "../../../assets/Acceuil/Home/Rectangle 4323.svg";
import photooooo from "../../../assets/Acceuil/Home/Group.svg";
import photoooooo from "../../../assets/Acceuil/Home/boutonplus.svg";

const Homepage = ({handleToggleClick}) => {
    
    return ( 
        <div className=" recent w-[96,5%] h-[90%] ml-8">
            <div className="poss flex mb-4 w-96">
                <h1 className="z-10 text-2xl mt-7">Recent Projects</h1>
                <img className="line w-36" src={photo} alt="" />
                <img className="sousligne w-24" src={photoo} alt="" />
            </div>
            <div className=" bg-mygrey w-[90%] h-[38%] ml-8 rounded-2xl">
                <div className='h-[88%] flex items-end justify-around '>
                    <div className='w-[15%] h-[90%] bg-mypurple2 rounded-lg  cursor-pointer'>
                        <div className=' text-white h-[80%] flex justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 mt-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </div>
                        <div className='h-[20%] flex justify-center items-center'>
                            <p className=' text-xs text-white'>New project</p>
                        </div>
                    </div>
                    <div className='w-[15%] h-[90%]'>
                        <Projectcard/>
                    </div>
                    <div className='w-[15%] h-[90%]'>
                        <Projectcard/>
                    </div>
                    <div className='w-[15%] h-[90%]'>
                        <Projectcard/>
                    </div>
                </div>
                <div className=' h-[12%] flex justify-end mr-4'>
                    <button onClick={handleToggleClick} className='flex items-center text-xs'>
                        <img className="size-4" src={photooo} alt="" />
                        <p className='ml-1'>All projects</p>
                    </button>
                </div>
            </div>
            <div className="pos flex mb-4 w-96">
                <h1 className="z-10 text-2xl mt-7">Recommended templates</h1>
                <img className="line1 w-60" src={photoooo} alt="" />
                <img className="sousligne1 w-24" src={photooooo} alt="" />
            </div>
            <div className=" bg-mygrey w-[90%] h-[32%] ml-8 rounded-2xl">
                <div className='h-[88%] flex items-end justify-around '>
                    <div className='w-[13%] h-[90%]'>
                        <Templatescard/>
                    </div>
                    <div className='w-[13%] h-[90%]'>
                        <Templatescard/>
                    </div>
                    <div className='w-[13%] h-[90%]'>
                        <Templatescard/>
                    </div>
                    <div className='w-[13%] h-[90%]'>
                        <Templatescard/>
                    </div>
                    <div className='w-[13%] h-[90%]'>
                        <Templatescard/>
                    </div>
                </div>
                <div className=' h-[12%] flex justify-end mr-4'>
                    <button className='flex items-center text-xs'>
                        <Link className='flex' to="/templates">
                            <img className="size-4" src={photoooooo} alt="" />
                            <p className='ml-1'>View more</p>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default Homepage;