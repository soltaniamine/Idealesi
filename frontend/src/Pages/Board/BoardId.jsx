import React from 'react'
import Canvas from './Canvas'
import Room from './Room'
import Loading from './Loading'
import { useLocation } from 'react-router-dom';
const BoardId = (boardId) => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const user_id = params.get('uid');
  const niveau_id = params.get('nid');
  const club_id = params.get('cid');
  const module_id = params.get('mid');
  const Tech_idiation = params.get('tech');
  const roomId = params.get('pid');
  return (
    <Room user_id={user_id} module_id={module_id} niveau_id={niveau_id} club_id={club_id} Tech_idiation={Tech_idiation} roomId={roomId}  fallback={<Loading />}>
        <Canvas boardId={roomId} techIdeation={Tech_idiation}/>
    </Room>
  )
}

export default BoardId