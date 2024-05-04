import React, { useEffect, useState } from "react"
import { motion, useMotionValue } from "framer-motion"
import  LampPuzzel from '../assets/LampPuzzel.svg'
import  ChapeauJ from '../assets/ChapeauJ.svg'
import  Balance from '../assets/Balance.svg'
import  MRefl from '../assets/MRefl.svg'

const Reflexion = () => {

    const imgs = [
        "../assets/LampPuzzel.svg",
        "../assets/ChapeauJ.svg",
        "../assets/Balance.svg",
      ]
      
      const ONE_SECOND = 1000
      const AUTO_DELAY = ONE_SECOND * 10
      const DRAG_BUFFER = 50
      
      const SPRING_OPTIONS = {
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }

      const [imgIndex, setImgIndex] = useState(0)

      const dragX = useMotionValue(0)
    
      useEffect(() => {
        const intervalRef = setInterval(() => {
          const x = dragX.get()
    
          if (x === 0) {
            setImgIndex((pv) => {
              if (pv === imgs.length - 1) {
                return 0
              }
              return pv + 1
            })
          }
        }, AUTO_DELAY)
    
        return () => clearInterval(intervalRef)
      }, [])
    
      const onDragEnd = () => {
        const x = dragX.get()
    
        if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
          setImgIndex((pv) => pv + 1)
        } else if (x >= DRAG_BUFFER && imgIndex > 0) {
          setImgIndex((pv) => pv - 1)
        }
      }

      const Images = ({ imgIndex }) => {
        return (
          <div className="flex flex-row gap-x-12 justify-center items-center">
            <motion.div
              key={0}
              animate={{
                scale: imgIndex === 0 ? 0.95 : 0.85,
              }}
              transition={SPRING_OPTIONS}





              className="aspect-video p-6 h-[65vh] w-[50vw] mx-auto shrink-0 rounded-xl bg-[#CDF5CE] object-cover"style={{ boxShadow: '0 10px 15px -3px rgba(0.1, 0.1, 0.2, 0.45)' }} >
              <div className="flex flex-col ">

                <div className="flex flex-row justify-between">
                  <h3 className="text-xl text-semibold pt-5 pl-4" style={{fontFamily: `Product sans`}}>Stimulez la créativité en<br/> utilisant des méthodes de<br/> brainstorming .Stimulez la<br/> créativité en utilisant des<br/> méthodes de brainstorming .</h3>
                  <img src={Balance} alt="Balance"/>
                </div>

                <div className="flex flex-row justify-between">
                  <div className="flex flex-col -mt-16 ">
                    <h6 className="mb-2 ml-6 text-medium">Step 3</h6>
                    <h1 className="text-[40px] leading-none text-bold " style={{fontFamily: `Product sans`,fontWeight:'bolder'}}>Analyse de décision<br/> multicritère</h1>
                  </div>
                  <div>
                    <button className="rounded-full px-6 py-2 font-medium bg-[#84D783] text-black w-fit transition-all shadow-[0px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                      Voir plus
                    </button>
                  </div>
                </div>

              </div>





            </motion.div>
            <motion.div
              key={1}
              animate={{
                scale: imgIndex === 1 ? 0.95 : 0.85,
              }}
              transition={SPRING_OPTIONS}


              className="aspect-video p-6 h-[65vh] w-[50vw] mx-auto shrink-0 rounded-xl bg-[#FEF4D4] object-cover"style={{ boxShadow: '0 10px 15px -3px rgba(0.1, 0.1, 0.2, 0.45)' }}  >
              <div className="flex flex-col">
                <div className="flex flex-row justify-between">
                  <h3 className="text-xl text-semibold pt-5 pl-4" style={{fontFamily: `Product sans`}}>Stimulez la créativité en<br/> utilisant des méthodes de<br/> brainstorming .Stimulez la<br/> créativité en utilisant des<br/> méthodes de brainstorming .</h3>
                  <img src={ChapeauJ} alt="Balance"/>
                </div>
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col ">
                    <h6 className=" ml-6 text-medium">Step 1</h6>
                    <h1 className="text-[40px] leading-none text-bold mt-5 " style={{fontFamily: `Product sans`,fontWeight:'bolder'}}>Six chapeaux</h1>
                  </div>
                  <div>
                    <button className="rounded-full mt-9 px-6 py-2 font-medium bg-[#F8CB2B] text-black w-fit transition-all shadow-[0px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                      Voir plus
                    </button>
                  </div>
                </div>
              </div>


            </motion.div>
            <motion.div
              key={2}
              animate={{
                scale: imgIndex === 2 ? 0.95 : 0.85,
              }}
              transition={SPRING_OPTIONS}

              className="aspect-video p-6 h-[65vh] w-[50vw] mx-auto shrink-0 rounded-xl bg-[#FFDBF8] object-cover"style={{ boxShadow: '0 10px 15px -3px rgba(0.1, 0.1, 0.2, 0.45)' }} >
              <div className="flex flex-col">
                <div className="flex flex-row justify-between ">
                  <h3 className="text-xl text-semibold pt-5 pl-4" style={{fontFamily: `Product sans`}}>Stimulez la créativité en<br/> utilisant des méthodes de<br/> brainstorming .Stimulez la<br/> créativité en utilisant des<br/> méthodes de brainstorming .</h3>
                  <img src={LampPuzzel} alt="LampPuzzel" className="h-[20rem]"/>
                </div>
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col -mt-16 ">
                    <h6 className="mb-2 ml-6 text-medium">Step 2</h6>
                    <h1 className="text-[40px] leading-none text-bold " style={{fontFamily: `Product sans`,fontWeight:'bolder'}}>Analyse des problèmes<br/>et des solutions</h1>
                  </div>
                  <div>
                    <button className="rounded-full px-6 py-2 font-medium bg-[#F08ADD] text-black w-fit transition-all shadow-[0px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                      Voir plus
                    </button>
                  </div>
                </div>
              </div>
              </motion.div>
          </div>
        )
      }
      
      const Dots = ({ imgIndex, setImgIndex }) => {
        return (
          <div className="mt-4 flex w-full justify-center gap-2">
            {imgs.map((_, idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => setImgIndex(idx)}
                  className={`h-3 w-32 mb-10 mt-9 rounded-full transition-colors ${
                    idx === imgIndex ? "bg-neutral-400" : "bg-neutral-50"
                  }`}
                />
              )
            })}
          </div>
        )
      }
      
      const GradientEdges = () => {
        return (
          <>
            <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
            <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
          </>
        )
      }
      return (
        <>
        <div className="flex flex-col items-center justify-center">
          <img src={MRefl} alt="MRefl" className="w-[70%] -mt-16 " />
          <p className="text-2xl text-medium mb-4" style={{fontFamily: `Product sans`}}>Stimulez la créativité en utilisant des méthodes de brainstorming et de réflexion.<br/>
            ts. Spécifiquement axée sur la phase cruciale d'idéation, Idealesi offre une interfa</p>
        </div>
        <div></div>
        <div className="relative py-8 w-[100vw] overflow-x-hidden">
          <motion.div
            drag="x"
            dragConstraints={{
              left: 0,
              right: 0,
            }}
            style={{
              x: dragX,
            }}
            animate={{
              translateX: imgIndex == 1 ? `-${imgIndex * 30}vw` : `-${imgIndex * 40}vw`,
            }}
            transition={SPRING_OPTIONS}
            onDragEnd={onDragEnd}
            className="flex cursor-grab items-center active:cursor-grabbing"
          >
            <Images imgIndex={imgIndex}/>
          </motion.div>
    
          <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
          {/*<GradientEdges />*/}
        </div>
        </>
      )
}

export default Reflexion
