import { useMyPresence, useOthers } from '../../liveblocks.config'
import React, { useCallback } from 'react'
import LiveCursors from './cursor/LiveCursors'
import BoardId from './BoardId'

const Live = () => {

  const others = useOthers()
  const [{ cursor }, updateMyPresence] = useMyPresence()

  const handlePoiterMove = useCallback((event) => {
    event.preventDefault()
    const x = event.clientX - event.currentTarget.getBoundingClinetRect().x
    const y = event.clientY - event.currentTarget.getBoundingClinetRect().y

    updateMyPresence({cursor: {x, y}})
  }, [])

  const handlePoiterLeave = useCallback((event) => {
    event.preventDefault()

    updateMyPresence({cursor: null, message: null})
  }, [])

  const handlePoiterDown = useCallback((event) => {
    event.preventDefault()
    const x = event.clientX - event.currentTarget.getBoundingClinetRect().x
    const y = event.clientY - event.currentTarget.getBoundingClinetRect().y

    updateMyPresence({cursor: {x, y}})
  }, [])

  return (
    <div
        onPointerMove={handlePoiterMove}
        onPointerLeave={handlePoiterLeave}
        onPointerDown={handlePoiterDown}
        className='h-[100vh] relative w-full flex justify-center items-center text-center border-2 border-green-500'
    >
        <BoardId />
        <LiveCursors others={others}/>
        <Comments />
    </div>
  )
}

export default Live