import { useTransform, motion, useScroll } from 'framer-motion'
import { useRef } from 'react'
import { Button } from "@/components/ui/button"
import  EA1 from '../assets/1EA.svg'

const Card = ({i, title, subTitle, description, src, link, color, right, progress, range, targetScale}) => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale]);
 
  return (
    <div ref={container} className="cardContainer">
      <motion.div 
        style={{backgroundColor: 'white', scale, top:`calc(-5vh + ${i * 25}px)`}} 
        className="card"
      >
        <div className={`body ${right === 'true' ? 'flex-row' : 'flex-row-reverse'}`}>
          <div className="description">
            <div className={`flex items-center ${right === 'true' ? 'flex-row' : 'flex-row-reverse'}`}>
              <img src={EA1} alt='EA1' className='w-[60px] h-[95px]'/>
              <h2>{title}</h2>
            </div>
            <h4>{subTitle}</h4>
            <p>{description}</p>
            <Button variant="secondary" style={{backgroundColor: color}}>Secondary</Button>
          </div>
          <div className="imageContainer">
            <motion.div
              className="inner"
              style={{scale: imageScale}}
            >
              <img
                fill
                src={`${src}`}
                alt="image" 
              />
            </motion.div>
          </div>

        </div>
      </motion.div>
    </div>
  )
}

export default Card