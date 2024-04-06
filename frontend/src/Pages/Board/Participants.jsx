import React from 'react'
import vote from '../../assets/vote.svg'
import timer from '../../assets/timer.svg'
import share from '../../assets/share.svg'
import presentation from '../../assets/presentation.svg'
import participants from '../../assets/participants.svg'
import chat from '../../assets/chat.svg'
import user1 from '../../assets/user1.svg'
import { Button } from '../../components/ui/button'

const Participants = () => {

  //fetch user data (profile image)

  return (
    <div className='fixed h-12 top-2 right-2 bg-white rounded-md p-3 flex gap-10 justify-around items-center shadow-md'>
      <div className='flex flex-row gap-3 items-center justify-around'>
      <Button variant="board" className="p-2" >
        <img src={vote} alt="vote" className='w-[23px] h-[23px]'/>
        </Button>
        <Button variant="board" className="p-2" >
        <img src={timer} alt="timer" className='w-[23px] h-[23px]'/>  
        </Button>   
      </div>
      <div className='flex flex-row gap-3 items-center justify-around'>
      <Button variant="board" className="p-2" >
        <img src={chat} alt="chat" className='w-[23px] h-[23px]'/>
        </Button>
        <Button variant="board" className="p-2" >
        <img src={participants} alt="participants" className='w-[23px] h-[23px]'/>   
        </Button>  
      </div>
      <div className='flex flex-row gap-3 items-center justify-around'>
      <Button variant="board" className="p-2" >
        <img src={presentation} alt="presentation" className='w-[23px] h-[23px]'/>
        </Button>
        <Button className="p-2 bg-[#606FFF] hover:bg-[#606FFF]/90 gap-5 px-4" >
          <h6 className='text-white font-light'>share</h6>
          <img src={share} alt='share' className='w-[20px] h-[20px]'/>
        </Button>   
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