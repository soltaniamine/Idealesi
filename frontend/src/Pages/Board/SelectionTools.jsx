import useSelectionBounds from '@/hoooks/useSelectionBounds'
import { useMutation, useSelf } from '../../../liveblocks.config'
import React, { memo, useState } from 'react'
import ColorPicker from './ColorPicker'
import useDeleteLayers from '../../hoooks/useDeleteLayers'
import Hint from './Hint'
import { Button } from '../../components/ui/button'
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
import { Input } from "@/components/ui/input"
import circle from '../../assets/circle.svg' 
import reaction from '../../assets/reaction.svg' 
import hide from '../../assets/hide.svg' 
import Delete from '../../assets/Delete.svg' 
import link from '../../assets/link.svg' 
import more from '../../assets/more.svg' 
import dots3vert from '../../assets/dots3vert.svg' 
import text from '../../assets/text.svg' 
import shapes from '../../assets/shapes.svg' 
import separator from '../../assets/separator.svg' 
import Lock from '../../assets/lock.svg' 
import left from '../../assets/left.svg' 
import center from '../../assets/center.svg' 
import right from '../../assets/right.svg' 
import bold from '../../assets/bold.svg' 
import italic from '../../assets/italic.svg' 
import underline from '../../assets/underline.svg' 
import idk from '../../assets/idk.svg' 
import list from '../../assets/list.svg' 
import textColor from '../../assets/textColor.svg' 
import highlighter from '../../assets/highlighter.svg' 

function useColorState(defaultForeColor, defaultBackColor) {
  const [foreColor, setForeColor] = useState(defaultForeColor)
  const [backColor, setBackColor] = useState(defaultBackColor)
  const [copier, setCopier] = useState()

  return {
    foreColor,
    setForeColor,
    backColor,
    setBackColor,
    copier,
    setCopier,
  };
}

const MyTools = memo(({ camera, setLastUsedColor, lastUsedColor, colorState }) => {

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

  const setFill = useMutation(({ storage }, fill) => {
    const liveLayers = storage.get("layers")
    setLastUsedColor(fill)

    selection.forEach((id) => {
      liveLayers.get(id)?.set("fill", fill)
    })
  }, [selection, setLastUsedColor])

  const copier = useMutation(({ storage }) => {
    const liveLayers = storage.get("layers")

    selection.forEach((id) => {
      console.log(liveLayers.get(id))
    })
  }, [selection, colorState.setCopier])

  const deleteLayers = useDeleteLayers()

  const lockLayers = useMutation(({ storage }) => {

    const liveLayers = storage.get("layers")
    liveLayers.get(selection[0])?.set("lock", true)

  }, [selection])

  const hideLayers = useMutation(({ storage }) => {

    const liveLayers = storage.get("layers")
    liveLayers.get(selection[0])?.set("hide", true)

  }, [selection])

  const selectionBounds = useSelectionBounds()

  if(!selectionBounds) return null
  
  const x = selectionBounds.width / 2 + selectionBounds.x + camera.x
  const y = selectionBounds.y + camera.y

  const boldText = () => {
    document.execCommand("bold", false, null)
  }
  const italicText = () => {
    document.execCommand("italic", false, null)
  }
  const underlineText = () => {
    document.execCommand("underline", false, null)
  }
  const strikethroughText = () => {
    document.execCommand("strikethrough", false, null)
  }
  const justifyLeftText = () => {
    document.execCommand("justifyLeft", false, null)
  }
  const justifyCenterText = () => {
    document.execCommand("justifyCenter", false, null)
  }
  const justifyRightText = () => {
    document.execCommand("justifyRight", false, null)
  }
  const insertOrderedList = () => {
    document.execCommand("insertOrderedList", false, null)
  }
  const foreColor = (value) => {
    colorState.setForeColorValue(value)
    document.execCommand("foreColor", false, colorState.foreColorValue)
  }
  const backColor = (e) => {
    document.execCommand("backColor", false, colorState.backColorValue)
  }
  

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
      <img src={circle} alt="circle" className={`bg-${lastUsedColor}`}/>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <img src={more} alt="more" />
        </DropdownMenuTrigger>
        <DropdownMenuContent side="top" sideOffset={20}>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <ColorPicker onChange={setFill}/>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          </DropdownMenuContent>
      </DropdownMenu>
      <img src={separator} alt="separator"/>
      <img src={text} alt="text"/>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <img src={more} alt="more" />
        </DropdownMenuTrigger>
        <DropdownMenuContent side="top" sideOffset={20} className="bg-[#F2F2F2]">
          <DropdownMenuGroup className="flex flex-row justify-center items-center">
            <DropdownMenuItem className="hover:cursor-pointer" onClick={justifyLeftText}>
              <img src={left} alt="left" />
            </DropdownMenuItem>
            <DropdownMenuItem onClick={justifyCenterText}>
              <img src={center} alt="center" className="hover:cursor-pointer"/>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={justifyRightText}>
            <img src={right} alt="right" className="hover:cursor-pointer"/>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={insertOrderedList}>
            <img src={list} alt="list" className="hover:cursor-pointer"/>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator className="bg-[#8B8B8B] w-[95%] mx-auto" />
          <DropdownMenuGroup className="flex flex-row justify-center items-center">
            <DropdownMenuItem onClick={boldText}>
              <img src={bold} alt="bold" className="hover:cursor-pointer"/>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={underlineText}>
              <img src={underline} alt="underline" className="hover:cursor-pointer"/>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={italicText}>
            <img src={italic} alt="italic" className="hover:cursor-pointer"/>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={strikethroughText}>
            <img src={idk} alt="idk" className="hover:cursor-pointer"/>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator className="bg-[#8B8B8B] w-[95%] mx-auto" />
          <DropdownMenuGroup className="flex flex-row justify-around items-center">
            <DropdownMenuItem>
              <input type="color" id="foreColor" value={colorState.foreColorValue}  className='' onChange={() => foreColor(e.target.value)}/>
              {/* <img src={textColor} alt="textColor" className="hover:cursor-pointer"/> */}
            </DropdownMenuItem>
            <img src={separator} alt="separator" className='h-[30px]'/>
            <DropdownMenuItem>
              <input type="color" id="backColor" value={colorState.backColorValue}  className='bg-transparent appearance-none' onChange={backColor}/>
              {/* <img src={highlighter} alt="highlighter" className="hover:cursor-pointer"/> */}
            </DropdownMenuItem>
          </DropdownMenuGroup>
          </DropdownMenuContent>
      </DropdownMenu>
      <img src={separator} alt="separator"/>
      <img src={shapes} alt="shapes"/>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <img src={more} alt="more" />
        </DropdownMenuTrigger>
        <DropdownMenuContent side="top" sideOffset={20}>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <ColorPicker />
            </DropdownMenuItem>
          </DropdownMenuGroup>
          </DropdownMenuContent>
      </DropdownMenu>
      <img src={separator} alt="separator"/>
      <img src={reaction} alt="reaction"/>
      <Hint label="Hide">
          <Button
            variant="board"
            size="icon"
            onClick={hideLayers}
          >
            <img src={hide} alt="hide"/>
          </Button>
        </Hint>
      {/* <Hint label="Link">
          <Button
            variant="board"
            size="icon"
            onClick={}
          >
            <img src={link} alt="link"/>
          </Button>
        </Hint> */}
        <AlertDialog>
  <AlertDialogTrigger>
    <Hint label="Link">
    <Button
      variant="board"
      size="icon"
    >
      <img src={link} alt="link"/>
    </Button>
    </Hint>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogFooter>
      <Input type="url" placeholder="url" />
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
      <img src={separator} alt="separator"/>
      <Hint label="Delete">
          <Button
            variant="board"
            size="icon"
            onClick={deleteLayers}
          >
            <img src={Delete} alt="Delete"/>
          </Button>
        </Hint>
      <Hint label="Lock">
          <Button
            variant="board"
            size="icon"
            onClick={lockLayers}
          >
            <img src={Lock} alt="lock"/>
          </Button>
        </Hint>
        <img src={separator} alt="separator"/>
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <img src={dots3vert} alt="dots3vert"/>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right" sideOffset={20} className="bg-[#F2F2F2]">
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={copier}>
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
})

const SelectionTools = ({camera, setLastUsedColor, lastUsedColor}) => {
  

  const colorState = useColorState('#000000', '#ffffff');

  return <MyTools camera={camera} setLastUsedColor={setLastUsedColor} lastUsedColor={lastUsedColor} colorState={colorState}/>
}

export default SelectionTools

SelectionTools.displayName = "SelectionTools"