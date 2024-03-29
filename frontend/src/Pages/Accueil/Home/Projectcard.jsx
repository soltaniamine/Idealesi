import imgprojet from "../../../assets/Acceuil/Home/imgpro.png";
const Projectcard = () => {
    const projectname = 'Aminos';
    return ( 
        <div className=' relative h-[100%] bg-mypurple3 rounded-lg cursor-pointer'>
            <div className=' text-white h-[80%] flex justify-center items-center border-b-2'>
                <img className="size-20" src={imgprojet} alt="" />
            </div>
            <div className='h-[20%] flex justify-center items-center'>
                <p className=' text-xs text-white'>{projectname}</p>
            </div>
            <div className="text-red-500 like absolute bottom-1 right-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
            </div>
        </div>
     );
}
 
export default Projectcard;