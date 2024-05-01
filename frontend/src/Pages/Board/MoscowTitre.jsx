import React from 'react'
import { useStorage } from '../../../liveblocks.config'
import { Button } from '@/components/ui/button'
import plus_combin from '../../assets/plus_combin.svg'
import { Rectangle } from '@/components/ui/Rectangle'



const MoscowTitre = ({camera,id}) => {

    const layer = useStorage((root) => root.layers.get(id))

    const x = layer.x +  camera.x
    const y = layer.y + camera.y
    const width = layer.width
    const height = layer.height


    return (
        ( layer.type==20) ? (
          <div
            className="absolute p-3 rounded-xl shadow-sm border flex select-none"
            style={{
              transform: `translate(
                calc(${x + width/2}px - 50%),
                calc(${y - 50}px - 50%)
              )`,
              backgroundColor: 'transparent', // Ensuring no background color
              border: 'none', // Remove border if not required
              zIndex: 0 // Setting a negative z-index to send it to the back
            }}
          >
            <Rectangle
                        color="rgba(223, 223, 223, 1)"  // Directly specify the RGBA color
                        rounded="medium"
                        style={{ height: '60px', width: '350px' }}
            >
                Matrice de priorité  de  MoSCoW
            </Rectangle>
            
            
         </div>
        ) : <></>
      )
      
      
}

export default MoscowTitre