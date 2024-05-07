import React from 'react'
import Canvas from './Canvas'
import Room from './Room'
import Loading from './Loading'

const BoardId = (boardId) => {

  
  return (
    <Room fallback={<Loading />}>
        <Canvas boardId={BoardId}/>
    </Room>
  )
}

export default BoardId