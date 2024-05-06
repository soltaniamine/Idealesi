import React from 'react'
import Assistance from '@/components/Assistance'
import Integ from '@/components/integ'
import Comm from '@/components/comm'
import Sec from '@/components/sec'
import Footer from '@/components/Footer'
import vecfull from '../../assets/vecfull.svg'

import "../../Pages/FirstPage/Firstpage.css"

const Propos = () => {
  return (
    <div className=' bg-cover bg-image-container' style={{ backgroundImage: `url(${vecfull})` }}>
       <Assistance/>
        <Integ/>
       <Comm/>
       <Sec/>
       <Footer/> 

    </div>
  )
}

export default Propos