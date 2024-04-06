import React from 'react'
import Canvas from './Canvas'
import Room from './Room'
import Loading from './Loading'

const BoardId = (boardId) => {
  const BoardId = 'J5R9lTtOS0KX6M9WufgAlU0'
  
  return (
    <Room roomId={BoardId} fallback={<Loading />}>
        <Canvas boardId={BoardId}/>
    </Room>
  )
}

export default BoardId