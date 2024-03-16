import styles from './Verify.module.css'
const Verifyemail = () => {
    return ( 
        <div className={`border rounded-xl overflow-hidden ${styles["form-container"]}`}>
            <form action="#">
                <div className="border-b-2 my-10">
                    <h1 className="text-4xl ">Verification</h1>
                </div>
                <div className="mb-2">
                    <p className="">Enter the code received in your email</p>
                </div>
                <div className=" w-[100%] mb-12 flex sm:space-x-7 ml-28 ">
                    <input className="focus:outline-none w-16 h-16 border rounded-xl text-center" type="text" placeholder="_" maxLength="1" />
                    <input className="focus:outline-none w-16 h-16 border rounded-xl text-center" type="text" placeholder="_" maxLength="1" />
                    <input className="focus:outline-none w-16 h-16 border rounded-xl text-center" type="text" placeholder="_" maxLength="1" />
                    <input className="focus:outline-none w-16 h-16 border rounded-xl text-center" type="text" placeholder="_" maxLength="1" />
                </div>
                <button id="hovering">Verify</button>
                <div className='mt-10 ml-44 flex items-center'>
                    <p className="">Didn't receive a code?</p>
                    <a className=" ml-3 pb-2.5" href="">Resend code</a>
                </div>
            </form>
            </div>
     );
}
 
export default Verifyemail;