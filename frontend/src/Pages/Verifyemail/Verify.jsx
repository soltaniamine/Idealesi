import './Verify.css';
import {Link} from 'react-router-dom';
const Verifyemail = () => {
    return ( 
        <div className="verify-container h-screen">
            <body className='boddy'>
                <div className="form-containerr border rounded-xl overflow-hidden">
                    <form className='forma' action="#">
                        <div className="border-b-2 my-10">
                            <h1 className="texto text-4xl ">Verification</h1>
                        </div>
                        <div className="mb-2">
                            <p className="para">Enter the code received in your email</p>
                        </div>
                        <div className=" w-[100%] mb-12 flex sm:space-x-7 ml-28 ">
                            <input className="gee focus:outline-none w-16 h-16 border rounded-xl text-center" type="text" placeholder="_" maxLength="1" />
                            <input className="gee focus:outline-none w-16 h-16 border rounded-xl text-center" type="text" placeholder="_" maxLength="1" />
                            <input className="gee focus:outline-none w-16 h-16 border rounded-xl text-center" type="text" placeholder="_" maxLength="1" />
                            <input className="gee focus:outline-none w-16 h-16 border rounded-xl text-center" type="text" placeholder="_" maxLength="1" />
                        </div>
                        <Link to="/home"><button className="here" id="hovering">Verify</button></Link>
                        <div className='mt-10 ml-40 flex items-center'>
                            <p className="para">Didn't receive a code?</p>
                            <a className=" ml-3 pb-2.5" href="/">Resend code</a>
                        </div>
                    </form>
                </div>    
            </body>
            
        </div>
     );
}
 
export default Verifyemail;