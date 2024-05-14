import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useRef } from 'react';

const Verifyemail = () => { 
    const navigate = useNavigate();
    const location = useLocation(); 
    const queryParams = new URLSearchParams(location.search);
    const email = queryParams.get('email');
    const [red1, setRed1] = useState(false);

    // Références pour les éléments d'entrée
    const input2Ref = useRef(null);
    const input3Ref = useRef(null);
    const input4Ref = useRef(null);
    const input5Ref = useRef(null);

    const emailVerification = async () => { 
        const input1 = document.querySelector('input[name="digit1"]').value;
        const input2 = document.querySelector('input[name="digit2"]').value;
        const input3 = document.querySelector('input[name="digit3"]').value;
        const input4 = document.querySelector('input[name="digit4"]').value;
        const verification = input1 + input2 + input3 + input4;
        try {
            const response = await axios.post('http://127.0.0.1:5000/verify_email', { email,verification });
            console.log(verification);
            console.log(response.data);
            navigate("/register");
        } catch (error) {
            console.log(error.response);
            setRed1(true);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailVerification();
    };

    // Fonction pour déplacer le focus
    const handleInput = (e, nextInputRef) => {
        if (e.target.value.length === e.target.maxLength && nextInputRef.current) {
            nextInputRef.current.focus();
        }
    };

    return ( 
        <div className="verify-container h-screen">
            <body className='boddy'>
                <div className="form-containerr border rounded-xl overflow-hidden">
                    <form className='forma' onSubmit={handleSubmit}>
                        <div className="border-b-2 my-10">
                            <h1 className="texto text-4xl ">Verification</h1>
                        </div>
                        <div className="mb-2">
                            <p className="para">Enter the code received in your email</p>
                        </div>
                        <div className=" w-[100%] mb-6 flex justify-center sm:space-x-7  ">
                            <input 
                                name="digit1" 
                                ref={input2Ref} 
                                className={`gee focus:outline-none w-16 h-16 border rounded-xl text-center ${red1 ? 'bg-red-300': ""}`} 
                                type="text" 
                                placeholder="_" 
                                maxLength="1" 
                                onChange={(e) => handleInput(e, input3Ref)} 
                            />
                            <input 
                                name="digit2" 
                                ref={input3Ref} 
                                className={`gee focus:outline-none w-16 h-16 border rounded-xl text-center ${red1 ? 'bg-red-300': ""}`} 
                                type="text" 
                                placeholder="_" 
                                maxLength="1" 
                                onChange={(e) => handleInput(e, input4Ref)} 
                            />
                            <input 
                                name="digit3" 
                                ref={input4Ref} 
                                className={`gee focus:outline-none w-16 h-16 border rounded-xl text-center ${red1 ? 'bg-red-300': ""}`} 
                                type="text" 
                                placeholder="_" 
                                maxLength="1" 
                                onChange={(e) => handleInput(e, input5Ref)} 
                            />
                            <input 
                                name="digit4" 
                                className={`gee focus:outline-none w-16 h-16 border rounded-xl text-center ${red1 ? 'bg-red-300': ""}`} 
                                type="text" 
                                placeholder="_" 
                                maxLength="1" 
                                ref={input5Ref} 
                            />
                        </div>
                        {red1 && <p className='mb-6 text-xs text-red-600'>Wrong code</p>}
                        <button className="here" id="hovering">Verify</button>
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