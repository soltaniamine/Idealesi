import React from 'react'
import vote from '../../assets/vote.svg'
import timer from '../../assets/timer.svg'
import share from '../../assets/share.svg'
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
import { useRef } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { useState } from 'react'


const Participants = ({ triggerVote, setTriggerVote }) => {

  //fetch user data (profile image)
  const users = {
    user1:{
      Photo: `${timer}`,
      Nom: "Ayoub"
    },
    user2:{
      Photo: `${timer}`,
      Nom: "Mahdi"
    },
    user3:{
      Photo: `${timer}`,
      Nom: "Amine"
    }
  }
  const triggeredVote = () => {
    setTriggerVote(true)
  }
  const [inputValue, setInputValue] = useState('');

  // Function to handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  

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
             {Object.entries(users).map(([key, value]) => (
              <DropdownMenuGroup className="flex flex-row justify-between items-center" key={key}>
                <DropdownMenuItem>
                  <img src={`${value.Photo}`} alt={`${value.Photo}`} />
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <h3>{value.Nom}</h3>
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
            <Textarea placeholder="Ajouter un message personalisé (facultatif)" />
            <AlertDialogFooter className="flex flex-row self-start">
              <AlertDialogAction className={`${emailRegex.test(inputValue) ? "" : "bg-[#a9b8f3] hover:bg-[#a9b8f3] hover:cursor-default"}`}>Envoyer l'invitation</AlertDialogAction>
              <AlertDialogCancel>Annuler</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
       </AlertDialog>
        <Button className="p-2 hover:bg-transparent bg-transparent">
        <img src={user1} alt="user1" className='w-[40px] h-[40px]'/>  
        </Button>   
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