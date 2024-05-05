import React from 'react'
import exportIc from '../../assets/exportIc.svg'
import search from '../../assets/search.svg'
import LogoIdealesi from '../../assets/LogoIdealesi.svg'
import undoo from '../../assets/undo.svg'
import redoo from '../../assets/redo.svg'
import { Button } from '@/components/ui/button'
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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useState } from 'react'
import { useMutation } from '../../../liveblocks.config'
import { Input } from '@/components/ui/input'
import Hint from './Hint'



const Info = ({ boardId , canRedo, canUndo, undo, redo, setCamera, camera }) => {

  const [ searchText, setSearchText] = useState('')
  const [ title, setTitle] = useState('sans titre')
  const items = useMutation(({ storage }) => {
    const liveLayers = storage.get('layers')
    const layerIds = storage.get('layerIds')
    const values = []
    
    for(const id of layerIds){
      const layerValue = liveLayers.get(id)?.get("value")
      if(layerValue){
        let myObject = {
          text: layerValue,
          id: id
      };
        values.push(myObject)
      }
    }
    return values
  }, [searchText])
  const values = items()
  const filteredResults =  searchText === "" ? [] : values.filter((value) => 
  ((value.text).toLowerCase()).includes(searchText.toLowerCase()))

  const positionView = useMutation(({ storage }, id) => {
    const liveLayers = storage.get('layers')
    const layer = liveLayers.get(id)
    const x = layer.get("x")
    const y = layer.get("y")

    if(layer){
      setCamera({x: -x+600, y: -y+200})
    }

  }, [])



  /*Get boards Info (data)
  if(!data) return <InfoSkeketon />*/


  return (
    <div className='fixed top-2 left-2 flex flex-row z-10'>
      <div className='bg-white rounded-md px-1.5 h-12 flex items-center shadow-md'>
        <Button variant="board" className="p-2" >
          <img src={LogoIdealesi} alt='LogoIdealesi' className='w-[50px] h-[50px]'/>
        </Button>
      </div>
      <div className='bg-white rounded-md px-1.5 h-12 flex gap-5 items-center justify-around shadow-md'>
        <AlertDialog >
          <AlertDialogTrigger>
            <Hint label="Modidfier les paramètres du tableau" className="text-3xl font-semibold">
              <Button variant="board" className="p-2 text-xl font-semibold">{title}</Button>
            </Hint>
          </AlertDialogTrigger>
          <AlertDialogContent className="flex flex-col w-[100%]">
            <AlertDialogHeader className="flex flex-row gap-5 items-center">
              <label>Title:</label>
              <Input variant="board" value={title} onChange={(e) => setTitle(e.target.value)} type="email" placeholder="Title" className="border-none outline-none"/>
            </AlertDialogHeader>
            <AlertDialogFooter className="flex flex-row self-center">
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <div className='flex flex-row gap-3 items-center justify-around'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="board" className="p-2" >
                <img src={search} alt="search" className='w-[23px] h-[23px]'/>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={12}>
              <DropdownMenuGroup className='flex flex-col'>
              <Input
                    id="search"
                    type="text"
                    placeholder="Rechercher du contenu"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                </DropdownMenuGroup>
                <DropdownMenuGroup>
                {filteredResults.length ? filteredResults.map((result) => (
                  <DropdownMenuItem key={result.id} onClick={() => positionView(result.id)}>
                    {result.text}
                  </DropdownMenuItem>
                )) : (<DropdownMenuItem>No posts to display.</DropdownMenuItem>)}
                </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="board" className="p-2" >
            <img src={exportIc} alt="exportIc" className='w-[23px] h-[23px]'/>   
          </Button>  
        </div>
      </div>
      <div className='bg-white rounded-md px-1.5 h-10 translate-y-[.5rem] flex gap-3 justify-around items-center shadow-md'>
        <Button disabled={!canUndo} variant="board" className="p-2" onClick={undo}>
          <img src={undoo} alt="undo" className='w-[18px] h-[18px]'/>
        </Button>
        <Button disabled={!canRedo} variant={"board"} className="p-2" onClick={redo}>
          <img src={redoo} alt="redo" className='w-[18px] h-[18px]'/>   
        </Button>
      </div>
    </div> 
  )
}

export const InfoSkeleton = () => {
  return(
    <div className='fixed top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md w-[300px]'/>
  )
}

export default Info

