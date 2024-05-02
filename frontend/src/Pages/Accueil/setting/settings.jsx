import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




 
const Settings = () => {
    const navigate = useNavigate();

    const goBack = () => {
      navigate(-1);
    };

    const [user, setUser] = useState({
    Nom: 'BOUALI Rima',
    email: 'mr_bouali@esi.dz',
    pdf: "https://lh3.googleusercontent.com/a/ACg8ocKbj0naRGAdfYQG8d0WrRckOfTVTweVB2nTzdPM2ZyZpPzyXQw=s360-c-no"
  });

     //Nom
        const [showModifierNom, setshowModifierNom] = useState(false);
        const [newNom, setNewNom] = useState(user.Nom);
        const handleButtonClickn = () => {
            setshowModifierNom(true);
        };

        const handleOkClick = () => {
            user.Nom=newNom;
            setshowModifierNom(false);
        };
        const handleAnnulerClick = () => {
            setshowModifierNom(false);
        };
    
    //mdps
        const [showModifierMdp, setshowModifierMdp] = useState(false);
        const [oldPassword, setOldPassword] = useState('');
        //ntester brk
        const [newPassword, setNewPassword] = useState('');
        const [confirmPassword, setConfirmPassword] = useState('');
    
        const handleButtonClickm = () => {
            setshowModifierMdp(true);
        };
        const handleOkClickMdp = () => {
            console.log("Ancien mot de passe :", oldPassword);
            console.log("Nouveau mot de passe :", newPassword);
            console.log("Confirmation du nouveau mot de passe :", confirmPassword);
            setshowModifierMdp(false);
        };
        const handleAnnulerClickMdp = () => {
            setshowModifierMdp(false);
        };

        //pdf juste pour tester
        const [imageUrl, setImageUrl] = useState(user.pdf);

        const handlePdfChange = (e) => {
            const selectedFile = e.target.files[0];
            const url = URL.createObjectURL(selectedFile);
            setUser({ ...user, pdf: url });
        };
        const supprimerPhotoProfil = () => {
            setUser({ ...user, pdf: 'https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg' });
        };
        
    return ( 
    <div>
        <div className=" min-h-screen  flex items-center justify-center bg-[#646FD4]">
        <div className="absolute top-0 left-0 mt-4 ml-4">
       
        </div>
            <div className=" bg-white p-8 rounded-3xl w-[80%] h-[90%]">
            <div className="flex justify-between items-center">
                    <h1 className="text-2xl" style={{ fontFamily: 'Product Sans' }}>Paramètres Profile </h1>
                        <button className=" hover:text-[#646FD4]"onClick={goBack}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 feather feather-x">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                </div>
                    <hr className="border-t-1 border-gray-300 my-4" />
                    <div className="flex items-center  ">
                        {/* Contenu de la colonne gauche */}
                        <div className="mr-4 ml-4 w-[20%]  ">
                        <div className="w-48 h-48 my-5 overflow-hidden">
                            <img
                                src={user.pdf}
                                className="w-full h-full object-cover rounded-full mb-6"
                                alt="Profile"
                            />
                        </div>
                            
                            <hr className="border-t border-gray-300 mb-4 " />

                            <label htmlFor="pdfInput" className="flex items-center space-x-2 p-2 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                                    <path d="M13.488 2.513a1.75 1.75 0 0 0-2.475 0L6.75 6.774a2.75 2.75 0 0 0-.596.892l-.848 2.047a.75.75 0 0 0 .98.98l2.047-.848a2.75 2.75 0 0 0 .892-.596l4.261-4.262a1.75 1.75 0 0 0 0-2.474Z" />
                                    <path d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V9A.75.75 0 0 1 14 9v2.25A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2H7a.75.75 0 0 1 0 1.5H4.75Z" />
                                </svg>
                                   <p className="text-sm text-gray-800 hover:text-black">Modifier la photo de profil</p>
                              </label>
                            <input
                                id="pdfInput"
                                type="file"
                                accept="image/*"
                                onChange={handlePdfChange}
                                style={{ display: 'none' }} // Masqué visuellement
                            />

                            <button className="flex items-center space-x-2 p-2 text-red-400" onClick={supprimerPhotoProfil}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z" clipRule="evenodd" />
                                </svg>
                                <p className="text-sm" style={{ fontFamily: 'Product Sans' }}>Supprimer la photo de profile</p>
                            </button>
                        </div>

                        {/* Ligne verticale */}
                        <div className=" h-96 bg-gray-300 w-px mx-2  mt-20"></div>

                        {/* Contenu de la colonne droite */}
                            <div className="ml-8 mt-[6%] w-[75%] h-96 ">
                            {showModifierNom ? (
                                <div className="py-2 flex items-center mb-4">
                                    <p className="font-semibold" style={{ fontFamily: 'Product Sans' }}>UserName</p>
                                    
                                    <input
                                        type="text"
                                        className="border border-gray-300 rounded-md px-4 py-2 mr-8 ml-[22%]"
                                        value={newNom}
                                        onChange={(e) => setNewNom(e.target.value)}
                                    />
                                    <div className="ml-32">
                                    <button
                                        className="bg-[#646FD4] text-white px-5 py-2 rounded-md hover:bg-[#525BAA]"
                                        onClick={handleOkClick}
                                        style={{ fontFamily: 'Product Sans' }}
                                    >
                                        OK
                                    </button>
                                    <button
                                        className="bg-gray-300 text-gray-700 px-8 py-2 rounded-md ml-2 hover:bg-gray-400"
                                        onClick={handleAnnulerClick}
                                        style={{ fontFamily: 'Product Sans' }}
                                    >
                                        Annuler
                                    </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="py-2 flex items-center grid grid-cols-3 gap-16 mb-4">
                                    <p className="font-semibold" style={{ fontFamily: 'Product Sans' }}>Username</p>
                                    <p className="" style={{ fontFamily: 'Product Sans' }}>{user.Nom}</p>
                                    <button
                                        className="px-2 py-2 text-[#646FD4] hover:text-[#525BAA]"
                                        style={{ fontFamily: 'Product Sans' }}
                                        onClick={handleButtonClickn}
                                    >
                                        Modifier
                                    </button>
                                </div>
                            )}
                                   
                                    <hr className="border-t border-gray-300 py-2 " />

                                    {showModifierMdp ? (
                                <div className="">
                                    <p className="font-semibold" style={{ fontFamily: 'Product Sans' }}>Mot de passe</p>
                                    <div className="grid grid-rows-3 flex items-center justify-center px-8">
                                    <input
                                        style={{ width: '300px' }}
                                        type="password"
                                        placeholder="Ancien mot de passe"
                                        value={oldPassword}
                                        onChange={(e) => setOldPassword(e.target.value)}
                                        className="border border-gray-300 rounded-md px-4 py-2 mb-2"
                                    />
                                    <input
                                        style={{ width: '300px' }}
                                        type="password"
                                        placeholder="Nouveau mot de passe"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        className="border border-gray-300 rounded-md px-4 py-2 mb-2"
                                    />
                                    <input
                                        style={{ width: '300px' }}
                                        type="password"
                                        placeholder="Confirmer le nouveau mot de passe"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className="border border-gray-300 rounded-md px-4 py-2 mb-2 "
                                    />
                                    </div>
                                    <div className="flex items-center justify-center mb-2">
                                        <button
                                            className="bg-[#646FD4] text-white px-4 py-2 rounded-md hover:bg-[#525BAA]"
                                            onClick={handleOkClickMdp}
                                        >
                                            Changer
                                        </button>
                                        <button
                                            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md ml-2 hover:bg-gray-400"
                                            onClick={handleAnnulerClickMdp}
                                        >
                                            Annuler
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="py-2 flex items-center grid grid-cols-2  mb-4">
                                    <p className="font-semibold" style={{ fontFamily: 'Product Sans' }}>Mot de passe</p>
                                    <button
                                        className="px-2 py-2 text-[#646FD4] hover:text-[#525BAA] ml-[44%]"
                                        style={{ fontFamily: 'Product Sans' }}
                                        onClick={handleButtonClickm}
                                    >
                                        Modifier
                                    </button>
                                </div>
                            )}
                                    <hr className="border-t border-gray-300 py-2" />
                                    <div className=" py-2 flex items-center  ">
                                        <p className="font-semibold" style={{ fontFamily: 'Product Sans' }}>
                                            Adresse Email
                                        </p>
                                        <p className="ml-[24%] text-gray-500" style={{ fontFamily: 'Product Sans' }}>{user.email}</p>
                                    </div>
                                    
                                </div>
                                
                                
            </div>
                        <div className=" py-4 ml-[80%] mt-[4%]">
                            <button className="w-[100%] py-3 bg-[#646FD4] text-white rounded-md font-semibold hover:bg-[#525BAA]" style={{ fontFamily: 'Product Sans' }}>
                                Enregistrer les modifications
                            </button>
                        </div>

            </div>
        </div>
    </div>
    );
}
 
export default Settings;