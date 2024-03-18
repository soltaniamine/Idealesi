import styles from './Forgot.module.css'
const Forgotpassword = () => {
    return ( 
        <div className={`border rounded-xl overflow-hidden ${styles["form-container"]}`}>
            <form action="#">
                <div className="border-b-2 my-6">
                    <h1 className="text-4xl ">Forgot Password</h1>
                </div>
                <div className="mb-2">
                    <p className=" text-gray-600 text-base">Enter your email address:</p>
                </div>
                <div className=" w-[100%] mb-16 flex justify-start items-center border-b-2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    <input className="focus:outline-none" type="email" placeholder="Email" />  
                </div>
                <button id="hovering" className=" mb-6">Send</button>
                <div className={`${styles["end"]} h-12  flex justify-center items-center border-t-2`}>
                    <a className=" text-gray-600 text-ms" href="">Return to log in page</a>
                </div>
            </form>
        </div>
     );
}
 
export default Forgotpassword;