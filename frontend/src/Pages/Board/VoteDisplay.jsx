import React from 'react'
import { Button } from '@/components/ui/button'
import minus from '../../assets/minus.svg'
import plus from '../../assets/plus.svg'
import { useMutation, useStorage } from '../../../liveblocks.config'

const VoteDisplay = ({id, camera, triggerVote, startVote}) => {

  const layer = useStorage((root) => root.layers.get(id))

  if(!layer) return null

  const Down = useMutation(({ storage }) => {
    if(startVote){
      const liveLayers = storage.get("layers")

      const layer = liveLayers.get(id)

      if (layer) {
        layer.update({
            vote: layer.get("vote") > 0 ? layer.get("vote") - 1 : 0
        })
      }
    }
    }, [])
  const Up = useMutation(({ storage }) => {
    if(startVote){
      const liveLayers = storage.get("layers")

      const layer = liveLayers.get(id)

      if (layer) {
        layer.update({
            vote: layer.get("vote") + 1
        })
      }
    }
    }, []) 
  
    const x = layer.x + camera.x
    const y = layer.y + camera.y

  

  return (
        layer.votable && triggerVote ?(
    <div 
    style={{
        transform: `translate(
          calc(${x + layer.width/2 - 30}px),
          calc(${y + layer.height - 20}px)
        )`,
        width: `60px`
      }}
       //style={{ transform: `translateX(${layer.width}px`}}
       className="absolute z-10 rounded-xl bg-[#F6F6F6] shadow-sm border flex items-center select-none"
      >
        <Button variant="board" className="p-2 rounded-full" onClick={Down}>
          <img src={minus} alt="minus" className='w-[15px] h-[15px]'/>
        </Button>
        <h6 className='font-medium text-black text-sm'>{layer.vote}</h6>
        <Button variant="board" className="p-2 rounded-full" onClick={Up}>
          <img src={plus} alt="plus" className='w-[15px] h-[15px]'/>
        </Button>
      </div>)
      : layer.votable && !triggerVote ? (
        <div 
    style={{
        transform: `translate(
          calc(${x + layer.width/2 - 30}px),
          calc(${y + layer.height - 20}px)
        )`,
        width: `60px`
      }}
       //style={{ transform: `translateX(${layer.width}px`}}
       className="absolute z-10 rounded-xl bg-[#7851d1] shadow-sm border select-none"
      >
        <h6 className='font-medium text-black text-sm text-center'>{layer.vote}</h6>
      </div>
      ) : (
        <></>
      )
  )
}

export default VoteDisplay