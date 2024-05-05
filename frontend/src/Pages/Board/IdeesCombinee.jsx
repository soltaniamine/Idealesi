import React from 'react'
import { useStorage } from '../../../liveblocks.config'
import { Button } from '@/components/ui/button'
import plus_combin from '../../assets/plus_combin.svg'




const IdeesCombinees = ({camera,scale,id}) => {

    const layer = useStorage((root) => root.layers.get(id))

    const x = layer.x +  camera.x
    const y = layer.y + camera.y
    const width = layer.width
    const height= layer.height

    return (
        layer.type == 15 ? (
          <div
            className="absolute p-3 rounded-xl shadow-sm border flex select-none"
            style={{
              transform: `translate(
                calc(${x + width/2}px - 50%),
                calc(${y +2*height/3+29}px - 50%)
                ) scale(${scale})`,

              backgroundColor: 'transparent', // Ensuring no background color
              border: 'none', // Remove border if not required
              zIndex: 0 // Setting a negative z-index to send it to the back
            }}
          >
          <span>Reduction </span>
          </div>
        ) : <></>
      )
      
      
}

export default IdeesCombinees