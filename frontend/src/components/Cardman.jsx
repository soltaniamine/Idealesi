import React from 'react'
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

const Cardman = ({src, rigth, color, i, progress, range, targetScale}) => {
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
        style={{backgroundColor: color, scale, top:`calc(-5vh + ${i * 25}px)`}} 
        className="card"  
      >
        <div className={`body ${rigth ? 'flex-row' : 'flex-row-reverse'} `}
        >
          <div className="description">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit illo, modi vero eaque corrupti, magnam voluptatum asperiores, molestiae non quae aspernatur molestias nesciunt porro! Reiciendis dolorum quia rem sequi rerum.</p>
          </div>

          <div className="imageContainer">
            <motion.div
              className="inner"
              style={{scale: imageScale}}
            >
              <img
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

export default Cardman