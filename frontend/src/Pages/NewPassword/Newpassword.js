import styles from './Newpass.module.css'
const Newpassword = () => {
    return ( 
        <div className={`border rounded-xl overflow-hidden ${styles["form-container"]}`}>
            <form action="#">
                <div className="border-b-2 my-6">
                    <h1 className="text-4xl ">Create new password</h1>
                </div>
                <div className="mb-2">
                    <p className=" text-gray-600 text-base">Your new password must be different from previous used password</p>
                </div>
                <div className=" w-[100%] mb-5 flex justify-start items-center border-b-2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                    <input className="focus:outline-none" type="password" placeholder="Password" />
                </div>
                <div className=" w-[100%] mb-12 flex justify-start items-center border-b-2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                    <input className="focus:outline-none" type="password" placeholder="Confirm Password" />
                </div>
                <button id="hovering" className=" mb-6">Reset password</button>
            </form>
        </div>
     );
}
 
export default Newpassword;