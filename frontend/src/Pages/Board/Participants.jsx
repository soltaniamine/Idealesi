import React from 'react'
import { useLocation } from 'react-router-dom'
import vote from '../../assets/vote.svg'
import timer from '../../assets/timer.svg'
import share from '../../assets/share.svg'
import Profilee from "../Accueil/notification-et-profile/profile";
import presentation from '../../assets/presentation.svg'
import participants from '../../assets/participants.svg'
import chat from '../../assets/chat.svg'
import user1 from '../../assets/user1.svg'
import { Button } from '@/components/ui/button'
import { NewThread } from '@/components/comments/NewThread'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Hint from './Hint'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useRef, useEffect } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { useState } from 'react'
import axios from 'axios'


const Participants = ({ triggerVote, setTriggerVote, boardId }) => {
  
  //fetch user data (profile image)
  
  const triggeredVote = () => {
    setTriggerVote(true)
  }
  const [inputValue, setInputValue] = useState('');
  const [inputValuee, setInputValuee] = useState('');
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const pid = params.get('pid');

  const [projectmembers, setProjectMembers] = useState([]);
        const fetchProjectMembers = async () => {
            try {
                const response = await axios.post('http://127.0.0.1:5000/projet_members', {projet_id: pid});
                setProjectMembers(response.data.liste_members);
                console.log(response.data);
            } catch (error) {
                console.log(error.response);
            }
        }

        useEffect(() => {
            
          fetchProjectMembers(); 
      }, []);

  const shareProject = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/share', {
        projet_id: pid,
        email: inputValue,
        message: inputValuee
      });
      console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };
  // Function to handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleInputChangee = (event) => {
    setInputValuee(event.target.value);
  };
  
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  
  
  const [showProfile, setShowProfile] = useState(false);
  const handleProfileClick = () => {
    setShowProfile(prevState => !prevState);
  };
  return (
    <div className='fixed h-12 top-2 z-10 right-2 bg-white rounded-md p-3 flex gap-10 justify-around items-center shadow-md'>
      <div className='flex flex-row gap-3 items-center justify-around'>
      <Button variant="board" className="p-2" onClick={() => triggeredVote()}>
        <img src={vote} alt="vote" className='w-[23px] h-[23px]'/>
        </Button>
        <Button variant="board" className="p-2" >
        <img src={timer} alt="timer" className='w-[23px] h-[23px]'/>  
        </Button>   
      </div>
      <div className='flex flex-row gap-3 items-center justify-around'>
        <NewThread>
          <Button className="relative w-5 h-5 object-contain">
            <img src={chat} alt="chat" className='w-[23px] h-[23px]'/>
          </Button>
        </NewThread>
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <img src={participants} alt="participants" className='w-[23px] h-[23px] hover:cursor-pointer'/>  
        </DropdownMenuTrigger>
        <DropdownMenuContent sideOffset={8}>
          <DropdownMenuGroup  className="flex flex-col">
             {Object.entries(projectmembers).map(([key, value]) => (
              <DropdownMenuGroup className="flex flex-row justify-between items-center" key={key}>
                <DropdownMenuItem>
                  <img className="w-10 h-10" src={`${value.photo !== null ? value.photo : value.photo = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'}`} alt={`${value.photo}`} />
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <h3>{value.nom}</h3>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              ))}
              </DropdownMenuGroup>
          </DropdownMenuContent>
      </DropdownMenu>
      </div>
      <div className='flex flex-row gap-3 items-center justify-around'>
      <Button variant="board" className="p-2" >
        <img src={presentation} alt="presentation" className='w-[23px] h-[23px]'/>
        </Button>
        <AlertDialog >
          <AlertDialogTrigger>
            <Hint label="Link">
              <Button className="p-2 bg-[#606FFF] hover:bg-[#606FFF]/90 gap-5 px-4" >
                <h6 className='text-white font-light'>share</h6>
                <img src={share} alt='share' className='w-[20px] h-[20px]'/>
              </Button>   
            </Hint>
          </AlertDialogTrigger>
          <AlertDialogContent className="flex flex-col w-[100%]">
            <AlertDialogHeader className="flex flex-row justify-around items-center">
              <div className='flex flex-row items-center gap-2'>
                <img src={presentation} alt='share' className='w-[20px] h-[20px]'/>
                <input value={inputValue} onChange={handleInputChange} type="email" placeholder="Saisir adresse e-mail" className="border-none outline-none"/>
              </div>
              <Select className=" translate-y-10">
                <SelectTrigger className="w-[180px] outline-none border-none">
                  <SelectValue placeholder="Acceés" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="peut modifier">Peut modifier</SelectItem>
                  <SelectItem value="Peut consulter">Peut consulter</SelectItem>
                </SelectContent>
             </Select>
            </AlertDialogHeader>
            <Textarea value={inputValuee} onChange={handleInputChangee} placeholder="Ajouter un message personalisé (facultatif)" />
            <AlertDialogFooter className="flex flex-row self-start">
              <AlertDialogAction onClick={shareProject} className={`${emailRegex.test(inputValue) ? "" : "bg-[#a9b8f3] hover:bg-[#a9b8f3] hover:cursor-default"}`}>Envoyer l'invitation</AlertDialogAction>
              <AlertDialogCancel>Annuler</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
       </AlertDialog>
        <Button onClick={handleProfileClick}  className="p-2 hover:bg-transparent bg-transparent">
          <img src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'} alt="user1" className=' w-[40px] h-[40px] rounded-full'/>  
        </Button>   
        {showProfile && (
            <div className="absolute  ml-[76%] mt-[18%]  z-50 h-[20%] w-[100%] ">
            <Profilee/>
            </div>
        )}
      </div>
    </div>
  )
}

export const ParticipantsSkeleton = ()=> {
  return(
    <div className='fixed h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md w-[100px]'/>
  )
}

export default Participants