import React from 'react'
import Canvas from './Canvas'
import Room from './Room'
import Loading from './Loading'

const BoardId = (boardId) => {

  
  return (
<<<<<<< Updated upstream
    <Room fallback={<Loading />}>
        <Canvas boardId={BoardId}/>
=======
    <Room user_id={user_id} module_id={module_id} niveau_id={niveau_id} club_id={club_id} Tech_idiation={Tech_idiation} roomId={roomId}  fallback={<Loading />}>
        <Canvas boardId={roomId} techIdeation={Tech_idiation}/>
>>>>>>> Stashed changes
    </Room>
  )
}

export default BoardId