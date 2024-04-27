import './SidebarExpert.css';
import { Link } from 'react-router-dom';
import assistanceLogo from '../../../assets/Acceuil/Expert/assistanceSb.svg';
const SidebarExpert = ({ buttonColor }) => {

    return (
        <div className="sidebar h-screen flex flex-col">
            <div className='w-[100%] flex justify-center '>
                <div className=" w-[70%] h-16 border-b-2 mb-8"></div>
            </div>
            <div className="flex flex-col items-end space-y-4 text-black text-sm">
                <button
                    className={`flex py-2.5 px-4 ${buttonColor === 'white1' ? 'bg-white' : ' text-white'}`}
                >
                    <Link className="flex" to="/home">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        <p className="ml-2">Home</p>
                    </Link>
                </button>
                <button
                    className={`flex py-2.5 px-4 ${buttonColor === 'white2' ? 'bg-white' : 'text-white'}`}
                >
                    <Link className="flex" to="/choixtechnique">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                        </svg>
                        <p className="ml-2">New Project</p>
                    </Link>
                </button>
                <button
                    className={`flex py-2.5 px-4 ${buttonColor === 'white3' ? 'bg-white' : 'text-white'}`}
                >
                    <Link className="flex" to="/favorite">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                        <p className="ml-2">Favorite Project</p>
                    </Link>
                </button>
                <button
                    className={`flex py-2.5 px-4 ${buttonColor === 'white4' ? 'bg-white' : 'text-white'}`}
                >
                    <Link className="flex" to="/sharedwithme">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                        </svg>
                        <p className="ml-2">Shared with me</p>
                    </Link>
                </button>
                <button
                    className={`flex py-2.5 px-4 ${buttonColor === 'white5' ? 'bg-white' : 'text-white'}`}
                >
                    <Link className="flex" to="/templates">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z" />
                        </svg>
                        <p className="ml-2">Templates</p>
                    </Link>
                </button>

                <button
                    className={`flex py-2.5 px-4 ${buttonColor === 'white6' ? 'bg-white' : 'text-white'}`}
                >
                    <Link className="flex" to="/Assitance">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                        </svg>
                        <p className="ml-2">Assistance</p>
                    </Link>
                </button>

            </div>
        </div>
    );
}

export default SidebarExpert;
