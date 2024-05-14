import './Forgot.css';
import {Link} from 'react-router-dom';
import { useState } from 'react';
const Forgotpassword = () => {
    const [email, setEmail] = useState('');
    return (  
        <body className='boddy'>
            <div className="form-containerr border rounded-xl overflow-hidden">
                <form className='for' action="#">
                    <div className="border-b-2 my-6">
                        <h1 className="texto text-4xl ">Forgot Password</h1>
                    </div>
                    <div className="mb-2">
                        <p className="para text-gray-600 text-base">Enter your email address:</p>
                    </div>
                    <div className=" w-[100%] mb-16 flex justify-start items-center border-b-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                        <input className="inpu focus:outline-none" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />  
                    </div>
                    <Link to={`/newpassword?email=${email}`} ><button id="hovering" className="here mb-6">Send</button></Link>
                    <div className="end h-12  flex justify-center items-center border-t-2">
                        <a className="aa text-gray-600 text-ms" href="/">Return to log in page</a>
                    </div>
                </form>
            </div>
        </body>
     );
}
 
export default Forgotpassword;