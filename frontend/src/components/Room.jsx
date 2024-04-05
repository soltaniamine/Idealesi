import React, {ReactNode} from 'react'
import { RoomProvider } from '../../liveblocks.config'

import { ClientSideSuspense } from '@liveblocks/react'
import { LiveList, LiveMap } from '@liveblocks/client'

const Room = ({children, roomId, fallback}) => {
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