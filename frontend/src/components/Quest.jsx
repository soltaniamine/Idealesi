import React from 'react'
import { Button } from './ui/button'
import questions from '../assets/questions.svg'


const Quest = () => {
  return (
    <div className='fixed bottom-3 left-3 bg-white h-8'>
      <Button className="px-2 hover:bg-transparent bg-transparent">
        <img src={questions} alt="questions" className='w-[23px] h-[23px]'/> 
      </Button>
    </div>
  )
}

export const QuestSkeleton = ()=> {
  return(
    <div className='fixed bottom-3 left-3 bg-white h-8'/>
  )
}

export default Quest