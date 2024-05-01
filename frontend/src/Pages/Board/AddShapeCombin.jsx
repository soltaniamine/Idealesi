import React from 'react'
import { useStorage } from '../../../liveblocks.config'
import { Button } from '@/components/ui/button'
import plus_combin from '../../assets/plus_combin.svg'




const AddShapeCombin = ({camera,id, insertCombin}) => {

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
                calc(${x + width +25}px - 50%),
                calc(${y + height / 2}px - 50%)
              )`,
              backgroundColor: 'transparent', // Ensuring no background color
              border: 'none', // Remove border if not required
              zIndex: 0 // Setting a negative z-index to send it to the back
            }}
          >
          <img src={plus_combin} alt="plus" onClick={insertCombin} className='plus'/>
          </div>
        ) : <></>
      )
      
      
}

export default AddShapeCombin