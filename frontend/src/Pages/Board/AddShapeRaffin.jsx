import React from 'react'
import { useMutation, useStorage } from '../../../liveblocks.config'
import { Button } from '@/components/ui/button'
import plus_combin from '../../assets/plus_combin.svg'




const AddShapeRaffin = ({camera,id, insertRaffin, scale}) => {

    const layer = useStorage((root) => root.layers.get(id))

    const getId = useMutation(({ storage }) => {
      const liveLayers = storage.get('layers')
      const layerIds = storage.get('layerIds')
      for(const id of layerIds){
        const layer = liveLayers.get(id)
        if(layer && layer.get("type") == 17){
          return id
        }
      }
    }, [])


    const x = layer.x +  camera.x
    const y = layer.y + camera.y
    const width = layer.width
    const height= layer.height
    const id17 = getId()
    const layerRaff = document.getElementById(`${id17}`)
    const boundaries = () => {
      if(layerRaff){
        return layerRaff.getBoundingClientRect()
      } else return
    }
    const bounds = boundaries()

    return (
        layer.type == 17 ? (
          <div
            className="absolute p-3 rounded-xl shadow-sm border flex select-none"
            style={{
              transform: `translate(
                calc(${ scale == 1 ? `${x + width/2}px - 50%` : `${bounds.width /2 + bounds.left}px - 50%`}),
                calc(${ scale == 1 ? `${y + height +50}px - 50%` : `${bounds.bottom}px - 50%`})
              )
                scale(${scale})
              `,
              backgroundColor: 'transparent', // Ensuring no background color
              border: 'none', // Remove border if not required
              zIndex: 0 // Setting a negative z-index to send it to the back
            }}
          >
          <img src={plus_combin} alt="plus" onClick={insertRaffin} className='plus'/>
          </div>
        ) : <></>
      )
      
      
}

export default AddShapeRaffin