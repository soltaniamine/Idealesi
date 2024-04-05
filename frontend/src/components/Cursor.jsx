import React from 'react'
import { memo } from 'react'
import { connectionIdToColor } from '@/constants/index'
import { useOther } from '../../liveblocks.config'
import { MousePointer2 } from 'lucide-react'

const Cursor = memo(({connectionId}) => {

  const info = useOther(connectionId, (user) => user?.info)
  const cursor = useOther(connectionId, (user) => user.presence.cursor)

  const name = info?.name || "Temmate"

  if(!cursor) return null

  const { x , y } = cursor

  return (
    <foreignObject 
      style={{
        transform: `translateX(${x}px) translateY(${y}px)`
      }}
      height={50}
      width={name.length * 10 + 24}
      className='relative drop-shadow-md'
    >{/* To render the Icon inside of an SVG parent */}
       <MousePointer2 
         className='h-5 w-5'
         style={{
            fill: connectionIdToColor(connectionId),
            color: connectionIdToColor(connectionId)
         }}
        />
        <div className='absolute left-5 px-1.5 py-0.5 rounded-md text-xs text-white font-semibold' 
             style={{ backgroundColor: connectionIdToColor(connectionId) }}
        >
            {name}
        </div>
    </foreignObject>
  )
})

export default Cursor