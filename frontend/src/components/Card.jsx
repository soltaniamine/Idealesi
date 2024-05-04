import { useTransform, motion, useScroll } from 'framer-motion'
import { useRef } from 'react'
import { Button } from "@/components/ui/button"
import EA1 from '../assets/1EA.svg'

const Card = ({ i, title, subTitle, description, src, link, color, right, progress, range, targetScale }) => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="cardContainer translate-x-[1.5rem] translate-y-10">

      <motion.div style={{ backgroundColor: 'white', scale, top: `calc(-5vh + ${i * 25}px)`, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.45)' }} className="card relative border-black border-[1px] ">

        <div className={`body ${right === 'true' ? 'flex-row' : 'flex-row-reverse'}`}>


          <div className="description">

            <div className={`flex items-center ${right === 'true' ? 'flex-row ml-10 -mt-11' : 'flex-row-reverse  mr-10 -mt-11'}`}>
              <img src={EA1} alt='EA1' className='w-[60px] h-[95px]' />
              <h2 className={`  font-bold ${right === 'true' ? 'pl-2 ' : 'pr-2'}`} style={{ fontFamily: `Product sans`, width: 'fit-content' }}>{title}</h2>
            </div>

            <h4 className={` text-3xl font-Bold  ${right === 'true' ? ' translate-x-[6rem] -ml-16  translate-y-5 mb-12' : '-translate-x-20 -mt-4  mb-6'}`} style={{ fontFamily: `Product sans`, width: 'fit-content' }}>{subTitle}</h4>
            <p className={`  text-2xl font-medium  ${right === 'true' ? ' translate-x-[6rem] -ml-16 ' : '-translate-x-[6rem] -mr-12 ml-4 '}`} style={{ fontFamily: 'Product sans' }} >
              {description}
            </p>

            <button className={`bg-${color} absolute  hover:bg-[#5963bc] text-white font-bold py-2 px-7  rounded-full ${right === 'true' ? 'bottom-[6rem] left-16 ' : 'bottom-[6rem] right-16'}`}>
              Voir plus
            </button>


          </div>



          <img className={` ${right === 'true' ? 'ml-[6rem]  py-4 h-[90%] ' : 'mr-32 translate-x-10 translate-y-6 h-[80%] '}`}
            fill
            src={`${src}`}
            alt="image"
          />


        </div>
      </motion.div>
    </div>
  )
}

export default Card