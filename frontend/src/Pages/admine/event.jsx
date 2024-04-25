import React, { useState } from "react";
import Sidebaradmine from "./Sidebaradmine";
import { Link } from 'react-router-dom';

import photo from "../../assets/Acceuil/TypeProjet/profile.png";
import level from "../../assets/level.svg"
import event from "../../assets/event.svg"
import module from "../../assets/module.svg"
import club from "../../assets/club.svg";

const Event = ({ buttonColor }) => {
//liste clubs
const [selectedId, setSelectedId] = useState(null);

   
const clubs = [
    { id: 1, name: "Club 1", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN5dqXAJ5eKufrr5Sp3HiH-eXSxp-dxo15Cww5hEf42A&s" },
    { id: 2, name: "Club 2", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN5dqXAJ5eKufrr5Sp3HiH-eXSxp-dxo15Cww5hEf42A&s" },
    { id: 3, name: "Club 3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN5dqXAJ5eKufrr5Sp3HiH-eXSxp-dxo15Cww5hEf42A&s" },
    // Ajoutez d'autres clubs ici
  ];


  const handleClubSelect = (clubId) => {
    setSelectedClub(clubId);
  };
  
  const ClubElement = ({ club }) => (
   
    <div className= {`club-element mb-4 ml-9 mb w-[90%] h-[80px] bg-gray-100 rounded-lg drop-shadow-md flex  items-center cursor-pointer ${selectedId === club.id ? 'bg-gray-400 text-white' : ''}`}
    onClick={() => setSelectedId(club.id)}>
      <img src={club.image} alt={club.name} className="ml-4 w-14 h-14 rounded-full object-cover" />
      <h1 className="ml-4 text-lg font-semibold">{club.name}</h1>
    </div>
  );


//********************* */
//liste events
const [selectedIdd, setSelectedIdd] = useState(null);

const events = [
    { id: 1, name: "event 1", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN5dqXAJ5eKufrr5Sp3HiH-eXSxp-dxo15Cww5hEf42A&s" },
    { id: 2, name: "event 2", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN5dqXAJ5eKufrr5Sp3HiH-eXSxp-dxo15Cww5hEf42A&s" },
    { id: 3, name: "event 3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN5dqXAJ5eKufrr5Sp3HiH-eXSxp-dxo15Cww5hEf42A&s" },
    // Ajoutez d'autres event ici
  ];
  
  const EventElement = ({ event }) => (
   
    <div className= {`event-element mb-4 ml-9 mb w-[90%] h-[80px] bg-gray-100 rounded-lg drop-shadow-md flex  items-center cursor-pointer ${selectedIdd === event.id ? 'bg-gray-400 text-white' : ''}`}
    onClick={() => setSelectedIdd(event.id)}>
      <img src={event.image} alt={event.name} className="ml-4 w-14 h-14 rounded-full object-cover" />
      <h1 className="ml-4 text-lg font-semibold">{event.name}</h1>
    </div>
  );

//les titres
const [selectedParagraph, setSelectedParagraph] = useState("ajouterClub");

const handleParagraphClick = (paragraph) => {
  setSelectedParagraph(paragraph);
};

//upload pic club
const [imageFile, setImageFile] = useState(null);

const handleImageUpload = (club) => {
  const file = club.target.files[0];
  setImageFile(file);
};
//upload pic event
const [imageeFile, setImageeFile] = useState(null);

const handleImageeUpload = (event) => {
  const file = event.target.files[0];
  setImageeFile(file);
};



    return (
        <div className="grid grid-cols-6 bg-mypurple mt-[1,1%]">
            <Sidebaradmine className="col-span-1" buttonColor={buttonColor}></Sidebaradmine>

            <div className=" bg-mypurple h-screen col-span-5  mt-[1,1%] ">
                <div className="bg-white h-[98.9%] mt-[1.1%] rounded-tl-2xl">
                    <div className="relative w-full h-[9%] border-b-2 text-black  flex justify-end  items-center ">
                        <div className=" w-32 flex  mt-2 items-center justify-around mr-5 mb-3 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                            </svg>
                            <div className="w-10 h-10 overflow-hidden rounded-full ">
                                <img src={photo} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="recent w-[96,5%] h-[90%] ml-8 mr-8">
                        <div className="grid grid-cols-2  gap-4 h-screen ml-[4%] mt-[-1%] ">
                            <div className="col-span-1  p-4 w-[120%] h-[65%] rounded-3xl mb-[10%] mt-[10%] bg-[#FFE7E7] ">
                                <div className="ml-[4%] mt-[2%]">
                                    <h1 className=" text-2xl font-bold ">modifier les clubs et évènements</h1>
                                </div>
                                <div>
                                    <hr className="w-[92%] border-t-2 border-gray-400 mt-[3%] ml-[3%]" />
                                </div>
                                <div className="flex ml-[3.2%] mt-[2%]">
                                    <p className={`text-sm w-1/5 cursor-pointer ${selectedParagraph === "ajouterClub" ? "text-black font-bold" : "text-gray-500 cursor-pointer"}`} onClick={() => handleParagraphClick("ajouterClub")}>ajouter un club</p>
                                    <p className={`text-sm w-[22%] cursor-pointer ${selectedParagraph === "supprimerClub" ? "text-black font-bold" : "text-gray-500 cursor-pointer"}`} onClick={() => handleParagraphClick("supprimerClub")}>Supprimer un club</p>
                                    <p className={`text-sm w-1/4 cursor-pointer ${selectedParagraph === "ajouterEvenement" ? "text-black font-bold" : "text-gray-500 cursor-pointer"}`} onClick={() => handleParagraphClick("ajouterEvenement")}>ajouter un évenement</p>
                                    <p className={`text-sm w-[30%] cursor-pointer ${selectedParagraph === "supprimerEvenement" ? "text-black font-bold" : "text-gray-500 cursor-pointer"}`} onClick={() => handleParagraphClick("supprimerEvenement")}>Supprimer un évenement</p>
                                </div>
                                <div>
                                    <hr className="w-[92%] border-t-1 border-gray-400 mt-[2%] ml-[3%]" />
                                </div>
                                <div className="mt-4">
                                    <div className={`${selectedParagraph === "ajouterClub" ? "" : "hidden"}`}>
                                        {/* Contenu pour ajouter un club */}
                                        <div>
                                            <div className="flex flex-col items-center justify-center mt-[3%]">
                                                <h1 className="text-2xl font-semibold">Veuillez entrer le nom du club</h1>
                                            </div>
                                            <div className="mt-[2%] ml-[34%]">
                                                <input
                                                    type="text"
                                                    placeholder="Nom du club ..."
                                                    className="border border-gray-300 rounded-xl px-4 py-2"
                                                />
                                            </div>
                                            <div className="flex flex-col items-center justify-center mt-[2%] mb-[2%]">
                                                <h1 className="text-2xl font-semibold">Veuillez importer l'image du club</h1>
                                            </div>
                                            <div>
                                                <label className="block bg-white px-4 py-2 rounded-lg text-gray-700 cursor-pointer hover:bg-gray-300 w-[35%] ml-[33%]">
                                                    <input
                                                        type="file"
                                                        accept="image/*"
                                                        className="hidden"
                                                        onChange={handleImageUpload}
                                                    />
                                                    <p className="text-gray-400">Choisir un fichier</p>
                                                </label>
                                                {imageFile ? (
                                                    <div className="mt-4">
                                                        <div className="flex flex-col items-center">
                                                            <p className="text-black font-semibold">Image sélectionnée :</p>
                                                            <img
                                                                src={URL.createObjectURL(imageFile)}
                                                                alt="Uploaded Image"
                                                                className="w-20 h-20 object-cover rounded-lg"
                                                            />
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="mt-4">
                                                        <div className="flex flex-col items-center">
                                                            <p className="text-black font-semibold"> Image </p>
                                                            <img
                                                                src="https://t3.ftcdn.net/jpg/04/60/01/36/360_F_460013622_6xF8uN6ubMvLx0tAJECBHfKPoNOR5cRa.jpg"
                                                                alt="Default Image"
                                                                className="w-20 h-20 object-cover rounded-lg"
                                                            />
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="size-[40%] ml-[66%] mt-[-5%] ">
                                                <img className="" src={club} />
                                            </div>
                                            <div className="mt-[-23%] ml-[10%]">
                                                <button className="bg-[#FA7171] hover:bg-[#FF5050] text-white font-bold py-3 px-14 rounded-xl mt-[7%]">
                                                    Ajouter
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                    <div className={`${selectedParagraph === "supprimerClub" ? "" : "hidden"}`}>
                                        {/* Contenu pour supprimer un club */}
                                    <div className="flex flex-col items-center justify-center mt-[3%] ">
                                                    <h1 className="text-2xl font-semibold">Veuillez sélectionner le club</h1>
                                                    <div className="elementslist overflow-y-auto h-[200px] w-[100%] rounded-b-3xl mt-5 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
                                                        {clubs.map((club, index) => (
                                                        <ClubElement club={club} key={index} />
                                                        ))}
                                                    </div>
                                            </div>
                                            <div className="size-[40%] ml-[66%] mt-[3%] ">
                                                    <img className=" " src={club} />
                                            </div>
                                            <div className="mt-[-23%] ml-[10%]">
                                                <button className="bg-[#FA7171] hover:bg-[#FF5050] text-white font-bold py-3 px-14 rounded-xl mt-[7%]">
                                                    Supprimer
                                                </button>
                                            </div>   
                                    </div>
                                    <div className={`${selectedParagraph === "ajouterEvenement" ? "" : "hidden"}`}>
                                        {/* Contenu pour ajouter un événement */}
                                    <div className="flex flex-col items-center justify-center mt-[2%] ">
                                                {!selectedId && (
                                                    <div className="w-[100%] ">
                                                    <div className="flex flex-col items-center justify-center  ">
                                                        <h1 className="text-2xl font-semibold">Veuillez sélectionner le club</h1>
                                                        <div className="elementslist overflow-y-auto h-[200px] w-[100%] rounded-b-3xl mt-5 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
                                                            {clubs.map((club, index) => (
                                                            <ClubElement club={club} key={index} />
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div className="size-[40%] ml-[66%] mt-[3%] ">
                                                            <img className=" " src={club} />
                                                    </div>  
                                                    </div>
                                                    )}

                                                {selectedId && (
                                            <div>
                                                <div className="flex flex-col items-center justify-center mt-[3%]">
                                                            <h1 className=" text-2xl font-semibold ">Veuillez entrer le nom de l'évènement </h1>
                                                        </div>
                                                        <div className="mt-[2%] ml-[28%]">
                                                            <input
                                                                type="text"
                                                                placeholder="Nom de l'évènement  ..."
                                                                className="border border-gray-300 rounded-xl px-4 py-2" />
                                                        </div>
                                                                
                                                    <div className="flex flex-col items-center justify-center mt-[2%] mb-[2%]">
                                                        <h1 className=" text-2xl font-semibold ">Veuillez importer l'image de l'évènement </h1>
                                                    </div>
                                                    <div>
                                                            <label className="block bg-white px-4 py-2 rounded-lg text-gray-700 cursor-pointer hover:bg-gray-300 w-[48%] ml-[28%] border border-gray-300">
                                                                <input
                                                                type="file"
                                                                accept="imagee/*"
                                                                className="hidden"
                                                                onChange={handleImageeUpload}
                                                                />
                                                                <p className=" text-gray-400">Choisir un fichier</p>
                                                            </label>
                                                            {imageeFile ? 
                                                            (
                                                                <div className="mt-4">
                                                                    <div className="flex flex-col items-center">
                                                                        <p className="text-black font-semibold">Image sélectionnée :</p>
                                                                    <img
                                                                        src={URL.createObjectURL(imageeFile)}
                                                                        alt="Uploaded Image"
                                                                        className="w-20 h-20 object-cover rounded-lg"
                                                                    />
                                                                    </div>
                                                                </div>
                                                                ) : (
                                                                <div className="mt-4">
                                                                    <div className="flex flex-col items-center">
                                                                        <p className="text-black font-semibold"> Image </p>
                                                                        <img
                                                                            src="https://t3.ftcdn.net/jpg/04/60/01/36/360_F_460013622_6xF8uN6ubMvLx0tAJECBHfKPoNOR5cRa.jpg"
                                                                            alt="Default Image"
                                                                            className="w-20 h-20 object-cover rounded-lg"
                                                                        />
                                                                    </div>
                                                                    </div>
                                                                        
                                                            )}

                                                    </div>
                                                <div className="size-[55%] ml-[73%] mt-[-8%] ">
                                                        <img className=" " src={club} />
                                                </div>
                                                    <div className="mt-[-33%] ml-[-5%]">
                                                        <button className="bg-[#FA7171] hover:bg-[#FF5050] text-white font-bold py-3 px-14 rounded-xl mt-[7%]">
                                                            Ajouter
                                                        </button>
                                                    </div>      
                                                </div>
                                            )}
                                            </div>
                                                            </div>
                                    <div className={`${selectedParagraph === "supprimerEvenement" ? "" : "hidden"}`}>
                                        {/* Contenu pour supprimer un événement */}
                                        <div className="flex flex-col items-center justify-center mt-[3%] ">
                                            <h1 className="text-2xl font-semibold">Veuillez sélectionner l'évènement</h1>
                                            <div className="elementslist overflow-y-auto h-[200px] w-[100%] rounded-b-3xl mt-5 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
                                                {events.map((event, index) => (
                                                <EventElement event={event} key={index} />
                                                ))}
                                            </div>
                                            </div>
                                            <div className="size-[40%] ml-[66%] mt-[3%] ">
                                                <img className=" " src={club} />
                                           </div>
                                            <div className="mt-[-23%] ml-[10%]">
                                                <button className="bg-[#FA7171] hover:bg-[#FF5050] text-white font-bold py-3 px-14 rounded-xl mt-[7%]">
                                                    Supprimer
                                                </button>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1 grid grid-rows-3 gap-4 ml-[30%]">
                        <div className="bg-gray-100 p-4 w-[85%] h-[70%] rounded-3xl mb-[10%] mt-[5%] hover:bg-[#D5FED6] hover:scale-110 transition-transform duration-500 ">
                        <div className="ml-[4%] mt-[4%]">
                            <h1 className=" text-2xl     font-bold ">Modifier les modules</h1>
                        </div>
                        <div className="size-[55%] ml-[50%]"> 
                            <img className=" " src={module} /> 
                            </div>
                            <div className="ml-[5%]">
                            <Link to="/modulee">
                        <button  className={"next cursor-pointer "}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                            </svg>
                        </button>
                        </Link>
                        </div>
                        </div>

                            <div className="bg-gray-100 p-4 w-[85%] h-[70%] rounded-3xl mt-[-17%] hover:bg-[#E3E6FE] hover:scale-110 transition-transform duration-500  ">
                            <div className="ml-[4%] mt-[4%]">
                                <h1 className=" text-2xl     font-bold ">Modifier les niveaux</h1>
                            </div>
                            <div className="size-[55%] ml-[50%]"> 
                                <img className=" " src={level} /> 
                                </div>
                                <div className="ml-[5%]">
                                <Link to="/niveauu">
                        <button  className={"next cursor-pointer "}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                            </svg>
                        </button>
                        </Link>
                            </div>
                            </div>

                            <div className="bg-gray-100 p-4 w-[85%] h-[70%] rounded-3xl mt-[-39%] hover:bg-[#FFEBA3] hover:scale-110 transition-transform duration-500 ">
                        <div className="ml-[4%] mt-[4%]">
                            <h1 className=" text-2xl     font-bold ">Modifer la liste des experts</h1>
                        </div>
                        <div className="size-[55%] ml-[50%]"> 
                            <img className=" " src={event} /> 
                            </div>
                            <div className="ml-[5%] mt-[-10%]">
                            <Link to="/expert">
                        <button  className={"next cursor-pointer "}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                            </svg>
                        </button>
                        </Link>
                        </div>
                                    </div>
                                    </div>


                        
                    </div>


                        </div>
                        </div>
                        </div>
</div>
    );
}

export default Event;
