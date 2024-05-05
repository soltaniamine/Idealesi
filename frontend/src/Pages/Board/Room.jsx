import React, {ReactNode, useEffect} from 'react'
import { RoomProvider } from '../../../liveblocks.config'
import axios from 'axios'
import { ClientSideSuspense } from '@liveblocks/react'
import { LiveList, LiveMap } from '@liveblocks/client'

const Room = ({user_id, module_id, niveau_id, club_id, Tech_idiation, children, roomId, fallback}) => {
  useEffect(() => {
    const newProject = async () => {
      try {
        const response = await axios.post('http://127.0.0.1:5000/new_project', {
          nom: 'biskra', 
          niveau_id,
          module_id,
          club_id, 
          Tech_idiation,
          user_id
        });
        console.log(Tech_idiation);
        console.log(response.data);
      } catch (error) {
        console.log(error.response);
      }
    };
  
    newProject();
  }, []);
  return (
    <RoomProvider 
      id={roomId} 
      initialPresence={{ 
        cursor: null,
        selection: []
      }} 
      initialStorage={{ 
        layers: new LiveMap() ,
        layerIds: new LiveList(),
      }}
    >
        <ClientSideSuspense fallback={fallback}>
            {() => children}
        </ClientSideSuspense>
    </RoomProvider>
  )
}

export default Room