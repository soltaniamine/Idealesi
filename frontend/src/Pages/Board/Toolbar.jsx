import React, { useState, useEffect } from 'react'
import text from '../../assets/text.svg'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import templates from '../../assets/templates.svg'
import stickers from '../../assets/stickers.svg'
import shapes from '../../assets/shapes.svg'
import dots3 from '../../assets/dots3.svg'
import cursor from '../../assets/cursor.svg'
import expert from '../../assets/expert.svg'
import moveTB from '../../assets/moveTB.svg'
import rectangle from '../../assets/rectangle.svg'
import square from '../../assets/square.svg'
import circle from '../../assets/circle.svg'
import sharpsquare from '../../assets/sharpsquare.svg'
import thinking from '../../assets/thinking.svg'
import triangle from '../../assets/triangle.svg'
import arrowleft from '../../assets/arrowleft.svg'
import arrowdown from '../../assets/arrowdown.svg'
import arrowright from '../../assets/arrowright.svg'
import MyComponent from './Mycomponent'
import prstand from '../../assets/prstand.svg'
import trianglesarrow from '../../assets/trianglesarrow.svg'
import linedarrow from '../../assets/linedarrow.svg'
import dragcr from '../../assets/dragcr.svg'
import { Button } from '@/components/ui/button'
import { CanvasMode, LayerType } from '../../types/canvas'
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
import { motion } from 'framer-motion'
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
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import presentation from '../../assets/presentation.svg'
import { Textarea } from "@/components/ui/textarea"


const Toolbar = ({ canvasState, setCanvasState, focus }) => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const module_id = params.get('mid');
  const pid = params.get('pid');
  const [listexpert, setListExpert] = useState([]);
  const fetchExpert = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/module_experts', {module_id: module_id});
      setListExpert(response.data.Liste_expert);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchExpert();
  }, []);
  const [experts, setItem] = useState([]); 
  useEffect(() => {
    if (listexpert && listexpert.length > 0) {
    
      setItem(listexpert.map((mo) => (
            <DropdownMenuGroup className="flex flex-row gap-x-1 items-center  " >
              <DropdownMenuItem className="hover:cursor-pointer">
                <img className="w-10 h-10 rounded-full" src={`${mo.photo_prof !== null ? mo.photo_prof : mo.photo_prof = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'}`} alt={`${mo.photo_prof}`} />
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:cursor-pointer w-40">
                <h3>{mo.nom_prof !== '' ? mo.nom_prof : mo.nom_prof = 'Pas de nom'}</h3>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:cursor-pointer ">
                <button onClick={()=> {assistance(mo.email_prof)}} className=' bg-mypurple text-white pt-1 pb-1.5 px-3 rounded-lg'>assistance</button>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            
            )));
      }
   }, [listexpert]); 
  
   const assistance = async (inputValue) => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/assistance', {
        projet_id: pid,
        email: inputValue,
        module_id: module_id,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };
  
  return (
    <motion.div className='fixed top-1/2 z-10 -translate-y-[50%] flex flex-col gap-y-4'>
        <div className='bg-[#F2F2F2] w-12 rounded-lg p-2 flex gap-y-1 flex-col items-center shadow-md'>
            <div>
              <Button variant="board" className="p-2 hover:bg-tranparent bg-transparent" >
                <img src={moveTB} alt="moveTB" className='w-[14px] h-[14px]'/>
              </Button>
            </div>
            <div className='flex flex-col gap-y-3'>
              <DropdownMenu>
                <DropdownMenuTrigger asChild >
                  <Button 
                    variant={ 
                      canvasState.mode === CanvasMode.None ||
                      canvasState.mode === CanvasMode.Translating ||
                      canvasState.mode === CanvasMode.SelectionNet ||
                      canvasState.mode === CanvasMode.Pressing ||
                      canvasState.mode === CanvasMode.Resizing 
                      ? "boardActive" : "board"
                    } 
                    onClick={() => setCanvasState({ mode: CanvasMode.None })}
                    className="p-2" 
                  >
                    <img src={cursor} alt="cursor" className='w-[20px] h-[20px]'/>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  className="w-40 bg-[#EBEDFF] mx-auto" 
                  side="right"
                  //align={align}
                  sideOffset={20}
                   //alignOffset={alignOffset}
                >
                  <DropdownMenuGroup className="flex flex-row items-center">
                    <DropdownMenuItem>
                      <Button variant="board" className="p-2"> 
                        <img src={cursor} alt="cursor" className='w-[20px] h-[20px]'/>
                      </Button>
                    </DropdownMenuItem>
                    <h1 className='font-semibold text-base'>Select</h1>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator className="bg-[#A4A4A4] w-[95%] mx-auto"/>
                  <DropdownMenuGroup className="flex flex-row items-center">
                    <DropdownMenuItem>
                      <Button variant="board" className="p-2"> 
                        <img src={dragcr} alt="dragcr" className='w-[20px] h-[20px]'/>
                      </Button>
                    </DropdownMenuItem>
                  <h1 className='font-semibold text-base'>Panoramic</h1>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button 
                variant={
                  canvasState.mode === CanvasMode.Inserting  &&
                  canvasState.LayerType === LayerType.Note
                  ? "boardActive" : "board"
                } 
                onClick={() => setCanvasState({ 
                  mode: CanvasMode.Inserting, 
                  LayerType: LayerType.Note,
                })} 
                className="p-2"
              >
                <img src={stickers} alt="stickers" className='w-[20px] h-[20px]'/>
              </Button>
              <Button 
                variant={
                  canvasState.mode === CanvasMode.Inserting  &&
                  canvasState.LayerType === LayerType.Template
                  ? "boardActive" : "board"
                } 
                onClick={() => setCanvasState({ 
                  mode: CanvasMode.Inserting, 
                  LayerType: LayerType.Template,
                })}  
                className="p-2" 
              >
                <img src={templates} alt="templates" className='w-[20px] h-[20px]'/>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant={"board"} 
                    className="p-2" 
                  >
                    <img src={shapes} alt="shapes" className='w-[20px] h-[20px]'/>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  className="w-52 bg-[#EBEDFF] mx-auto py-4" 
                  side="right"
                  //align={align}
                  sideOffset={20}
                   //alignOffset={alignOffset}
                >
                  <DropdownMenuGroup className="flex flex-row items-center justify-center">
                    <DropdownMenuItem>
                      <Button 
                        variant={
                          canvasState.mode === CanvasMode.Inserting  &&
                          canvasState.LayerType === LayerType.Rectangle
                          ? "boardActive" : "board"
                        } 
                        onClick={() => setCanvasState({ 
                          mode: CanvasMode.Inserting, 
                          LayerType: LayerType.Rectangle,
                        })} 
                        className="p-2"
                      > 
                      <img src={rectangle} alt="rectangle" className='w-[30px]'/>
                      </Button>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Button 
                        variant={
                          canvasState.mode === CanvasMode.Inserting  &&
                          canvasState.LayerType === LayerType.Square
                          ? "boardActive" : "board"
                        } 
                        onClick={() => setCanvasState({  
                          mode: CanvasMode.Inserting, 
                          LayerType: LayerType.Square,
                        })} 
                        className="p-2"
                      > 
                      <img src={square} alt="square" className='w-[30px]'/>
                      </Button>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Button 
                        variant={
                          canvasState.mode === CanvasMode.Inserting  &&
                          canvasState.LayerType === LayerType.Circle
                          ? "boardActive" : "board"
                        } 
                        onClick={() => setCanvasState({
                          mode: CanvasMode.Inserting,   
                          LayerType: LayerType.Circle,
                        })} 
                        className="p-2"
                      > 
                      <img src={circle} alt="circle" className='w-[25px]'/>
                      </Button>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuGroup className="flex flex-row items-center justify-center">
                    <DropdownMenuItem>
                      <Button 
                        variant={
                          canvasState.mode === CanvasMode.Inserting  &&
                          canvasState.LayerType === LayerType.Sharpsquare
                          ? "boardActive" : "board"
                        } 
                        onClick={() => setCanvasState({
                          mode: CanvasMode.Inserting,   
                          LayerType: LayerType.Sharpsquare,
                        })} 
                        className="p-2"
                      > 
                      <img src={sharpsquare} alt="sharpsquare" className='w-[25px]'/>
                      </Button>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Button 
                        variant={
                          canvasState.mode === CanvasMode.Inserting  &&
                          canvasState.LayerType === LayerType.Thinking
                          ? "boardActive" : "board"
                        } 
                        onClick={() => setCanvasState({
                          mode: CanvasMode.Inserting,   
                          LayerType: LayerType.Thinking,
                        })} 
                        className="p-2"
                      > 
                      <img src={thinking} alt="thinking" className='w-[30px]'/>
                      </Button>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Button 
                        variant={
                          canvasState.mode === CanvasMode.Inserting  &&
                          canvasState.LayerType === LayerType.Triangle
                          ? "boardActive" : "board"
                        } 
                        onClick={() => setCanvasState({
                          mode: CanvasMode.Inserting,   
                          LayerType: LayerType.Triangle,
                        })} 
                        className="p-2"
                      > 
                      <img src={triangle} alt="triangle" className='w-[28px]'/>
                      </Button>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator className="bg-[#A4A4A4] w-[95%] mx-auto my-5"/>
                  <DropdownMenuGroup className="flex flex-row items-center justify-center">
                    <DropdownMenuItem>
                      <Button 
                        variant={
                          canvasState.mode === CanvasMode.Inserting  &&
                          canvasState.LayerType === LayerType.Arrowleft
                          ? "boardActive" : "board"
                        } 
                        onClick={() => setCanvasState({
                          mode: CanvasMode.Inserting,   
                          LayerType: LayerType.Arrowleft,
                        })} 
                        className="p-2"
                      > 
                      <img src={arrowleft} alt="arrowleft" className='w-[30px]'/>
                      </Button>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Button 
                        variant={
                          canvasState.mode === CanvasMode.Inserting  &&
                          canvasState.LayerType === LayerType.Arrowdown
                          ? "boardActive" : "board"
                        } 
                        onClick={() => setCanvasState({
                          mode: CanvasMode.Inserting,   
                          LayerType:  LayerType.Arrowdown,
                        })} 
                        className="p-2"
                      > 
                      <img src={arrowdown} alt="arrowdown" className='w-[30px]'/>
                      </Button>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Button 
                        variant={
                          canvasState.mode === CanvasMode.Inserting  &&
                          canvasState.LayerType === LayerType.Arrowright
                          ? "boardActive" : "board"
                        } 
                        onClick={() => setCanvasState({
                          mode: CanvasMode.Inserting,   
                          LayerType: LayerType.Arrowright,
                        })} 
                        className="p-2"
                      > 
                      <img src={arrowright} alt="arrowright" className='w-[30px]'/>
                      </Button>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuGroup className="flex flex-row items-center justify-center">
                    <DropdownMenuItem>
                      <Button 
                        variant={
                          canvasState.mode === CanvasMode.Inserting  &&
                          canvasState.LayerType === LayerType.Standpr
                          ? "boardActive" : "board"
                        } 
                        onClick={() => setCanvasState({
                          mode: CanvasMode.Inserting,   
                          LayerType: LayerType.Standpr,
                        })} 
                        className="p-2"
                      > 
                      <img src={prstand} alt="prstand" className='w-[30px]'/>
                      </Button>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Button 
                        variant={
                          canvasState.mode === CanvasMode.Inserting  &&
                          canvasState.LayerType === LayerType.Triangledarrow
                          ? "boardActive" : "board"
                        } 
                        onClick={() => setCanvasState({
                          mode: CanvasMode.Inserting,   
                          LayerType: LayerType.Triangledarrow,
                        })} 
                        className="p-2"
                      > 
                      <img src={trianglesarrow} alt="trianglesarrow" className='w-[23px]'/>
                      </Button>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Button 
                        variant={
                          canvasState.mode === CanvasMode.Inserting  &&
                          canvasState.LayerType === LayerType.Linedarrow
                          ? "boardActive" : "board"
                        } 
                        onClick={() => setCanvasState({
                          mode: CanvasMode.Inserting,   
                          LayerType: LayerType.Linedarrow,
                        })} 
                        className="p-2"
                      > 
                      <img src={linedarrow} alt="linedarrow" className='w-[23px]'/>
                      </Button>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
               
              <Button 
                variant={
                  canvasState.mode === CanvasMode.Inserting  &&
                  canvasState.LayerType === LayerType.Text
                  ? "boardActive" : "board"
                } 
                onClick={() => setCanvasState({ 
                  mode: CanvasMode.Inserting, 
                  LayerType: LayerType.Text,
                })} 
                className="p-2" 
              >
                <img src={text} alt="text" className='w-[20px] h-[20px]'/>
              </Button>
            </div>
            <div>
              <Button variant="board" className="p-2" >
                <img src={dots3} alt="dots3" className='w-[20px] h-[20px]'/>
              </Button>    
            </div>
        </div>
        <div className='bg-[#DCE0FF] rounded-md w-12 h-12 p-2 translate-x-2 flex gap-y-1 flex-col items-center shadow-md'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="board" className="p-2" >
                <img src={expert} alt="expert" className='w-[25px] h-[25px]'/>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" w-80" side={"right"} sideOffset={12}>
              <DropdownMenuGroup  className="flex flex-col">
              {experts}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
    </motion.div>
  )
}

export const ToolbarSkeleton = () => {
  return(
    <div className='fixed top-1/2 -translate-y-[50%] left-2 flex flex-col gap-y-4 bg-white h-[360px] w-[52px] shadow-md rounded-md'/>
  )
}

export default Toolbar