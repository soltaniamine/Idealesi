import React from 'react'
import exportIc from '../assets/exportIc.svg'
import search from '../assets/search.svg'
import LogoIdealesi from '../assets/LogoIdealesi.svg'
import undoo from '../assets/undo.svg'
import redoo from '../assets/redo.svg'
import { Button } from "@/components/ui/button"


const Info = ({ boardId , canRedo, canUndo, undo, redo }) => {

  /*Get boards Info (data)
  if(!data) return <InfoSkeketon />*/


  return (
    <div className='fixed top-2 left-2 flex flex-row'>
      <div className='bg-white rounded-md px-1.5 h-12 flex items-center shadow-md'>
        <Button variant="board" className="p-2" >
          <img src={LogoIdealesi} alt='LogoIdealesi' className='w-[50px] h-[50px]'/>
        </Button>
      </div>
      <div className='bg-white rounded-md px-1.5 h-12 flex gap-16 items-center justify-between shadow-md'>
        <div className='text-xl font-semibold'>Title</div>
        <div className='flex flex-row gap-3 items-center justify-around'>
          <Button variant="board" className="p-2" >
            <img src={search} alt="search" className='w-[23px] h-[23px]'/>
          </Button>
          <Button variant="board" className="p-2" >
            <img src={exportIc} alt="exportIc" className='w-[23px] h-[23px]'/>   
          </Button>  
        </div>
      </div>
      <div className='bg-white rounded-md px-1.5 h-10 translate-y-[.5rem] flex gap-3 justify-around items-center shadow-md'>
        <Button disabled={!canUndo} variant="board" className="p-2" onClick={undo}>
          <img src={undoo} alt="undo" className='w-[18px] h-[18px]'/>
        </Button>
        <Button disabled={!canRedo} variant={"board"} className="p-2" onClick={redo}>
          <img src={redoo} alt="redo" className='w-[18px] h-[18px]'/>   
        </Button>
      </div>
    </div> 
  )
}

export const InfoSkeleton = () => {
  return(
    <div className='fixed top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md w-[300px]'/>
  )
}

export default Info

