import React,{useState} from 'react'
import { useStorage , useMutation} from '../../../liveblocks.config'
import { Button } from '@/components/ui/button'
import plus_combin from '../../assets/plus_combin.svg'





const RaffinementTable = ({camera,id, insertCombin,scale}) => {

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

    const id17 = getId()

    const layerRaff = document.getElementById(`${id17}`)
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
      layer.type == 17 ? (
        <div
          className="absolute p-3 rounded-xl shadow-sm border flex flex-col select-none" 
          style={{
            transform: `translate(
              calc(${
                scaleRound === 1 
                ? `${x +  735}px - 50%` 
                : scale < 1
                    ? (
                        scaleRound === 0.9 ? `${bounds.left+ bounds.width/2 +40}px - 50%` :
                        scaleRound === 0.8 ? `${bounds.left + bounds.width/2+ 37}px - 50%` :
                        scaleRound == 0.7 ? `${bounds.left+ bounds.width/2+32}px - 50%` :  // Assuming all conditions <= 0.7 have the same output
                        scaleRound == 0.6 ? `${bounds.left+ bounds.width/2+28}px - 50%`:
                        scaleRound == 0.5 ? `${bounds.left+ bounds.width/2+22}px - 50%`:
                        scaleRound == 0.4 ? `${bounds.left+ bounds.width/2+18}px - 50%`:
                        scaleRound == 0.3 ? `${bounds.left+ bounds.width/2+14}px - 50%`:
                        `${bounds.left+bounds.width/2+10}px - 50%`
                        
                    )
                    : (  // For scale > 1
                        scaleRound === 1.1 ? `${bounds.left+bounds.width/2+50}px - 50%` :
                        scaleRound == 1.2 ? `${bounds.left+ bounds.width/2+50}px - 50%` :  // Assuming all conditions from 1.2 to 1.8 have the same output
                        scaleRound==1.3 ? `${bounds.left+bounds.width/2+60}px - 50%`:
                        `${bounds.top-330}px - 50%`
                    )
            }),
              calc(${
                  scale === 1 
                  ? `${y - 200}px - 50%` 
                  : scale < 1
                      ? (
                          scaleRound === 0.9 ? `${bounds.top - 215}px - 50%` :
                          scaleRound === 0.8 ? `${bounds.top - 200}px - 50%` :
                          scaleRound == 0.7 ? `${bounds.top-175}px - 50%` :  // Assuming all conditions <= 0.7 have the same output
                          scaleRound == 0.6 ? `${bounds.top-155}px - 50%`:
                          scaleRound == 0.5 ? `${bounds.top-140}px - 50%`:
                          scaleRound == 0.4 ? `${bounds.top-115}px - 50%`:
                          scaleRound == 0.3 ? `${bounds.top-95}px - 50%`:
                          `${bounds.top-80}px - 50%`
                          
                      )
                      : (  // For scale > 1
                          scaleRound === 1.1 ? `${bounds.top-257}px - 50%` :
                          scaleRound == 1.2 ? `${bounds.top-280}px - 50%` :  // Assuming all conditions from 1.2 to 1.8 have the same output
                          scaleRound==1.3 ? `${bounds.top-295}px - 50%`:
                          `${bounds.top-330}px - 50%`
                      )
              })
          ) scale(${scale})`,
            backgroundColor: 'transparent', 
            border: 'none', 
            zIndex: 0 ,
            width:"1600px",
          }}
      >
        <div>

<div className=" absolute m-20 grid grid-cols-9 grid-rows-3 gap-2">

    <div className='processus  -ml-3 -mr-3 col-start-1 col-end-10 bg-[#7D89F4] text-center rounded-md' style={{ fontSize: '21.39px', fontFamily: 'Product Sans' }}>Processus de Raffinement et Expansion des idées</div>
    <div className='idees -ml-3 row-start-2 row-span-2 bg-[#FEDC77] flex items-center justify-center rounded-md text-center' style={{ fontSize: '17px', fontFamily: 'Product Sans' }}>Idées</div>
    <div className='identification ml-1 col-start-2 col-span-3 bg-[#F96161] flex items-center justify-center rounded-md text-center' style={{ fontSize: '17px', fontFamily: 'Product Sans' }}>Identification</div>
    <div className='devloppement ml-1 col-start-5 col-span-4 bg-[#DC95FF] flex items-center justify-center rounded-md text-center' style={{ fontSize: '17px', fontFamily: 'Product Sans' }}>Devloppement</div>
    <div className='idees row-span-2 -mr-3  bg-[#FEDC77] flex items-center justify-center rounded-md text-center' style={{ fontSize: '17px', fontFamily: 'Product Sans' }}>Idées finalisées</div>

    <div className='smalltitle ml-1 col-start-2 bg-[#6BC8FC] flex items-center justify-center rounded-md text-center leading-none' style={{ fontSize: '14px', fontFamily: 'Product Sans' }}>Points Forts</div>
    <div className='smalltitle -ml-1 bg-[#FFC480] flex items-center justify-center rounded-md text-center leading-none' style={{ fontSize: '14px', fontFamily: 'Product Sans' }} >lacunes</div>
    <div className='smalltitle -ml-1 bg-[#6BC8FC] flex items-center justify-center rounded-md text-center leading-none' style={{ fontSize: '14px', fontFamily: 'Product Sans' }} >les aspects à développer</div>

    <div className='smalltitle ml-1 bg-[#FF5EDC] flex items-center justify-center rounded-md text-center leading-none' style={{ fontSize: '14px', fontFamily: 'Product Sans' }} >Fonctionalitées à ajouter</div>
    <div className='smalltitle -ml-1 bg-[#82EFC8] flex items-center justify-center rounded-md text-center leading-none' style={{ fontSize: '14px', fontFamily: 'Product Sans' }} >exemples concrets </div>
    <div className='smalltitle -ml-1 bg-[#AEA299] flex items-center justify-center rounded-md text-center leading-none' style={{ fontSize: '14px', fontFamily: 'Product Sans' }} >Variantes</div>
    <div className='smalltitle -ml-1 bg-[#82EFC8] flex items-center justify-center rounded-md text-center leading-none' style={{ fontSize: '14px', fontFamily: 'Product Sans' }} >Rodondances a éliminer</div>


</div>



</div >
        </div>
        ) : <></>
)
    
    
      
      
}

export default RaffinementTable