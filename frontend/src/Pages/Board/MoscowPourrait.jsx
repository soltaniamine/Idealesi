import React from 'react'
import { useStorage , useMutation} from '../../../liveblocks.config'
import { Button } from '@/components/ui/button'
import plus_combin from '../../assets/plus_combin.svg'
import { Rectangle } from '@/components/ui/Rectangle'



const MoscowPourrait = ({camera,scale,id}) => {

    const layer = useStorage((root) => root.layers.get(id))

    const getId = useMutation(({ storage }) => {
      const liveLayers = storage.get('layers')
      const layerIds = storage.get('layerIds')
      for(const id of layerIds){
        const layer = liveLayers.get(id)
        if(layer && layer.get("type") == 20 ){
          return id
        }
      }
    }, [])

    const id21= getId()
    const layerRaff = document.getElementById(`${id21}`)
    const boundaries = () => {
      if(layerRaff){
        return layerRaff.getBoundingClientRect()
      } else return
    }
    const bounds = boundaries()

    const x = layer.x +  camera.x
    const y = layer.y + camera.y

    const width = layer.width
    const height= layer.height

    let scaleRound = Math.floor(scale*10)/10


    return (
        (layer.type==20) ? (
          <div
            className="absolute p-3 rounded-xl shadow-sm border flex select-none"
            style={{
              transform: `translate(
                calc(${
                  scaleRound === 1 
                  ? `${x +  70}px - 50%` 
                  : scale < 1
                      ? (
                          scaleRound === 0.9 ? `${bounds.left+50 }px - 50%` :
                          scaleRound === 0.8 ? `${bounds.left + 47}px - 50%` :
                          scaleRound == 0.7 ? `${bounds.left+42}px - 50%` :  // Assuming all conditions <= 0.7 have the same output
                          scaleRound == 0.6 ? `${bounds.left+38}px - 50%`:
                          scaleRound == 0.5 ? `${bounds.left+32}px - 50%`:
                          scaleRound == 0.4 ? `${bounds.left+28}px - 50%`:
                          scaleRound == 0.3 ? `${bounds.left+24}px - 50%`:
                          `${bounds.left+20}px - 50%`
                          
                      )
                      : (  // For scale > 1
                          scaleRound === 1.1 ? `${bounds.left+80}px - 50%` :
                          scaleRound == 1.2 ? `${bounds.left+90}px - 50%` :  // Assuming all conditions from 1.2 to 1.8 have the same output
                          scaleRound==1.3 ? `${bounds.left+100}px - 50%`:
                          `${bounds.left+100}px - 50%`
                      )
              }),
                calc(${
                    scale === 1 
                    ? `${y + height/2+30}px - 50%` 
                    : scale < 1
                        ? (
                            scaleRound === 0.9 ? `${bounds.top+bounds.height/2 }px - 50%` :
                            scaleRound === 0.8 ? `${bounds.top+bounds.height/2 }px - 50%` :
                            scaleRound == 0.7 ? `${bounds.top+bounds.height/2+10}px - 50%` :  // Assuming all conditions <= 0.7 have the same output
                            scaleRound == 0.6 ? `${bounds.top+bounds.height/2+15}px - 50%`:
                            scaleRound == 0.5 ? `${bounds.top+bounds.height/2+10}px - 50%`:
                            scaleRound == 0.4 ? `${bounds.top+bounds.height/2+20}px - 50%`:
                            scaleRound == 0.3 ? `${bounds.top+bounds.height/2+20}px - 50%`:
                            `${bounds.top+bounds.height/2+20}px - 50%`
                            
                        )
                        : (  // For scale > 1
                            scaleRound === 1.1 ? `${bounds.top+bounds.height/2+20}px - 50%` :
                            scaleRound == 1.2 ? `${bounds.top+bounds.height/2+25}px - 50%` :  // Assuming all conditions from 1.2 to 1.8 have the same output
                            scaleRound==1.3 ? `${bounds.top+bounds.height/2+30}px - 50%`:
                            `${bounds.top+bounds.height/2+40}px - 50%`
                        )
                })
            ) scale(${scale})`,
              backgroundColor: 'transparent', // Ensuring no background color
              border: 'none', // Remove border if not required
              zIndex: 0 // Setting a negative z-index to send it to the back
            }}
          >
            <Rectangle
                                        color="rgba(255, 215, 100, 1)"  // Directly specify the RGBA color
                                        rounded="medium"
                                        style={{ height: '30px', width: '100px' }}
            >
                Pourrait avoir
            </Rectangle>
            
            
         </div>
        ) : <></>
      )
      
      
}

export default MoscowPourrait