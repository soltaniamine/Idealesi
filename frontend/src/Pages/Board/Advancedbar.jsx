import React, { useState } from 'react'
import minus from '../../assets/minus.svg'
import plus from '../../assets/plus.svg'
import map from '../../assets/map.svg'
import fullscreen from '../../assets/fullscreen.svg'
import lock from '../../assets/lock.svg'
import { Button } from '@/components/ui/button'

const Advancedbar = ({setScale, scale, zoomIn, zoomOut, focus, setFocus, setCamera, setShowMap, showMap}) => {

  const ajusterEcran = () => {
    setCamera({x: 0, y: 0})
    setScale(1)
  }

  return (
    <div className='fixed h-12 bottom-2 z-10 right-2 flex gap-x-3 items-center justify-around'>
        <div className='flex flex-row items-center bg-[#F2F2F2] rounded-md'>
          <Button variant="board" className="p-2 rounded-full" onClick={zoomOut}>
            <img src={minus} alt="minus" className='w-[15px] h-[15px]'/>
          </Button>
          <h6 className='font-medium text-sm'>{Math.round(scale * 100)}%</h6>
          <Button variant="board" className="p-2 rounded-full" onClick={zoomIn}>
            <img src={plus} alt="plus" className='w-[15px] h-[15px]'/>
          </Button>
        </div>
        <div className='bg-[#F2F2F2] rounded-full'>
          <Button variant="board" className="p-2 rounded-full" onClick={() => setShowMap(!showMap)}>
            <img src={map} alt="map" className='w-[23px] h-[23px]'/>
          </Button>
        </div>
        <div className='bg-[#F2F2F2] rounded-full'>
          <Button variant="board" className="p-2 rounded-full" onClick={ajusterEcran}>
            <img src={fullscreen} alt="fullscreen" className='w-[23px] h-[23px]'/>
          </Button>
        </div>
        <div className='bg-[#F2F2F2] rounded-full'>
          <Button variant="board" className="p-2 rounded-full" >
            <img src={lock} alt="lock" className='w-[25px] h-[25px]'/>
          </Button>
        </div>
    </div>
  )
}

export const AdvancedbarSkeleton = ()=> {
    return(
      <div className='fixed h-12 bottom-2 '/>
    )
  }

export default Advancedbar