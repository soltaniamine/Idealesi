import useSelectionBounds from '@/hoooks/useSelectionBounds'
import { useMutation, useSelf } from '../../../liveblocks.config'
import React from 'react'
import Lock from '../../assets/lock.svg' 
import dots3vert from '../../assets/dots3vert.svg' 
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

const lockTools = ({camera}) => {

    const selection = useSelf((me) => me.presence.selection)

    const moveToFront = useMutation(({ storage }) => {
        const liveLayerIds = storage.get("layerIds")
        const indices = []
    
        const arr = liveLayerIds.toImmutable()
    
        for (let i = 0; i < arr.length; i++) {
          if (selection.includes(arr[i])) {
            indices.push(i)
          }
        }
    
        for (let i = indices.length - 1; i >= 0; i--) {
          liveLayerIds.move(
            indices[i],
            arr.length - 1 - (indices.length - 1 - i)
          )
        }
      }, [selection])
    
      const moveToBack = useMutation(({ storage }) => {
        const liveLayerIds = storage.get("layerIds")
        const indices = []
    
        const arr = liveLayerIds.toImmutable()
    
        for (let i = 0; i < arr.length; i++) {
          if (selection.includes(arr[i])) {
            indices.push(i)
          }
        }
    
        for (let i = 0; i < indices.length; i++) {
          liveLayerIds.move(indices[i], i)
        }
      }, [selection])

      const unlockLayers = useMutation(({ storage }) => {

        const liveLayers = storage.get("layers")
    
        liveLayers.get(selection[0])?.set("lock", false)  
        
      }, [selection])

    
    const selectionBounds = useSelectionBounds()

    if(!selectionBounds) return null
    
    const x = selectionBounds.width / 2 + selectionBounds.x + camera.x
    const y = selectionBounds.y + camera.y

  return (
    <div
      className="absolute p-3 rounded-xl bg-[#F6F6F6] shadow-sm border flex select-none"
      style={{
        transform: `translate(
          calc(${x}px - 50%),
          calc(${y - 16}px - 100%)
        )`
      }}
    >
        <img src={Lock} alt="Lock" onClick={unlockLayers} className='cursor-pointer'/>
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <img src={dots3vert} alt="dots3vert"/>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right" sideOffset={20} className="bg-[#F2F2F2]">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              Copier
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-[#E3E3E3] w-[95%] mx-auto"/>
            <DropdownMenuItem>
              Coller
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-[#E3E3E3] w-[95%] mx-auto" />
            <DropdownMenuItem>
              Dupliquer
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-[#E3E3E3] w-[95%] mx-auto" />
            <DropdownMenuItem onClick={moveToFront}>
              Mettre en premier plan
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-[#E3E3E3] w-[95%] mx-auto" />
            <DropdownMenuItem onClick={moveToBack}>
              Mettre en arrière plan
            </DropdownMenuItem>
          </DropdownMenuGroup>
          </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default lockTools