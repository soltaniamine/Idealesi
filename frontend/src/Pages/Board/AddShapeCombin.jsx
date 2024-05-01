import React from 'react'
import { useStorage, useMutation } from '../../../liveblocks.config'
import { Button } from '@/components/ui/button'
import plus_combin from '../../assets/plus_combin.svg'




const AddShapeCombin = ({camera,id,scale, insertCombin}) => {

    const layer = useStorage((root) => root.layers.get(id))


    const getId = useMutation(({ storage }) => {
      const liveLayers = storage.get('layers')
      const layerIds = storage.get('layerIds')
      for(const id of layerIds){
        const layer = liveLayers.get(id)
        if(layer && layer.get("type") == 15){
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
    let scaleRound = Math.floor(scale*10)/10


    return (
        layer.type == 15 ? (
          <div
            className="absolute p-3 rounded-xl shadow-sm border flex select-none"
            style={{
              transform: `translate(
                calc(${
                  scaleRound === 1 
                  ? `${x +400}px - 50%` 
                  : scale < 1
                      ? (
                          scaleRound === 0.9 ? `${bounds.right +80}px - 50%` :
                          scaleRound === 0.8 ? `${bounds.right + 37}px - 50%` :
                          scaleRound == 0.7 ? `${bounds.right+32}px - 50%` :  // Assuming all conditions <= 0.7 have the same output
                          scaleRound == 0.6 ? `${bounds.right+28}px - 50%`:
                          scaleRound == 0.5 ? `${bounds.right+22}px - 50%`:
                          scaleRound == 0.4 ? `${bounds.right+18}px - 50%`:
                          scaleRound == 0.3 ? `${bounds.right+14}px - 50%`:
                          `${bounds.right+15}px - 50%`
                          
                      )
                      : (  // For scale > 1
                          scaleRound === 1.1 ? `${bounds.right+40}px - 50%` :
                          scaleRound == 1.2 ? `${bounds.right+38}px - 50%` :  // Assuming all conditions from 1.2 to 1.8 have the same output
                          scaleRound==1.3 ? `${bounds.right+38}px - 50%`:
                          `${bounds.right+100}px - 50%`
                      )
              }),
                calc(${
                    scale === 1 
                    ? `${y + 150}px - 50%` 
                    : scale < 1
                        ? (
                            scaleRound === 0.9 ? `${bounds.top +bounds.height/2-40}px - 50%` :
                            scaleRound === 0.8 ? `${bounds.top+bounds.height/2-40 }px - 50%` :
                            scaleRound == 0.7 ? `${bounds.top+bounds.height/2-35}px - 50%` :  // Assuming all conditions <= 0.7 have the same output
                            scaleRound == 0.6 ? `${bounds.top+bounds.height/2-30}px - 50%`:
                            scaleRound == 0.5 ? `${bounds.top+bounds.height/2-25}px - 50%`:
                            scaleRound == 0.4 ? `${bounds.top+bounds.height/2-22}px - 50%`:
                            scaleRound == 0.3 ? `${bounds.top+bounds.height/2-23}px - 50%`:
                            `${bounds.top+bounds.height/2}px - 50%`
                            
                        )
                        : (  // For scale > 1
                            scaleRound === 1.1 ? `${bounds.top+bounds.height/2-10}px - 50%` :
                            scaleRound == 1.2 ? `${bounds.top+bounds.height/2-12}px - 50%` :  // Assuming all conditions from 1.2 to 1.8 have the same output
                            scaleRound==1.3 ? `${bounds.top+bounds.height/2-15}px - 50%`:
                            `${bounds.top+bounds.height/2-18}px - 50%`
                        )
                })
            ) scale(${scale})`,
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