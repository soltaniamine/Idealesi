import React, { useState } from 'react'
import react from '../assets/react.svg'
//import { buttonVariants } from "@/components/ui/button"
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [active, setActive] = useState("Home")

  return (
    <nav className="w-full flex py-4 justify-between items-center ">
      <img src={react} alt="edealesi" className="w-[124px] h-[32px] right-0" />
      <ul className="list-none sm:flex hidden justify-center items-center flex-1">
          <li
            key='home'
            className={`cursor-pointer text-[16px] ${
              active === "Home" ? "text-[#242F9B]" : "text-[#736C6C]"
            } mr-6`}
            onClick={() => setActive("Home")}
          >
            <a href="#home">Home</a>
          </li>
          <li
            key='about us'
            className={`cursor-pointer text-[16px] ${
              active === "About us" ? "text-[#242F9B]" : "text-[#736C6C]"
            } mr-6`}
            onClick={() => setActive("About us")}
          >
            <a href="#about us">About us</a>
          </li>
          <li
            key='contact'
            className={`cursor-pointer text-[16px] ${
              active === "Contact" ? "text-[#242F9B]" : "text-[#736C6C]"
            } mr-6`}
            onClick={() => setActive("Contact")}
          >
            <a href="#contact">Contact</a>
          </li>
          <li
            key='shop'
            className={`cursor-pointer text-[16px] ${
              active === "Shop" ? "text-[#242F9B]" : "text-[#736C6C]"
            } mr-6`}
            onClick={() => setActive("Shop")}
          >
            <a href="#shop">Shop</a>
          </li>
          <li
            key='ship'
            className={`cursor-pointer text-[16px] ${
              active === "Ship" ? "text-[#242F9B]" : "text-[#736C6C]"
            } mr-2`}
            onClick={() => setActive("Ship")}
          >
            <a href="#ship">Ship</a>
          </li>
      </ul>
      <div>
        <Link to='/register'>
          <Button variant="ghost" className="text-[#736C6C]">Login</Button>
        </Link>
        <Link to='/register'>
          <Button variant="outline" className="text-[#242F9B] bg-[#f0f8ff] border-[#242F9B]">Sign up</Button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar