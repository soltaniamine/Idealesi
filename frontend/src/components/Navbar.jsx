import React, { useState } from 'react'
import idealesi from '../assets/idealesi.svg';

//import { buttonVariants } from "@/components/ui/button"
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom'


const Navbar = ({ scrollOpacity }) => {
  const [active, setActive] = useState("IdealESI")

  return (
    <nav style={{ backgroundColor: `rgba(255, 255, 255, ${scrollOpacity})` }} className="w-full  flex py-4 justify-between items-center ml-0 mr-0">

      <img src={idealesi} alt="idealesi" className=" absolute left-3 w-[4%] " />
      {/* 
        <h1 className='text-black absolute left-20 text-3xl font-semibold ' style={{ fontFamily: 'Bauhaus 93' }}>Ideal</h1>
        <h1 className='text-black absolute left-36 text-3xl font-bold ' style={{ fontFamily: 'Product sans' }}>ESI</h1> */}

      <ul className="list-none sm:flex hidden justify-center items-center flex-1">
        <li
          key='idealESI'
          style={{
            cursor: 'pointer',
            fontSize: '18px',
            fontWeight: active === 'idealESI' ? 'bold' : 'normal', // Set font weight based on active state
            fontFamily: 'Product Sans',
            color: active === 'idealESI' ? "#242F9B " : "#736C6C",
            borderBottom: active === 'idealESI' ? '3px solid #242F9B' : 'none', // Thicker underline when active
            paddingBottom: active === 'idealESI' ? '0.5px' : '0', // Add some padding-bottom when active
          }}
          onClick={() => setActive('idealESI')}
          className="mr-8">

          <a href="#Idealesi">IdealESI</a>
        </li>

        <li
          key='Sol'
          style={{
            cursor: 'pointer',
            fontSize: '18px',
            fontWeight: active === "Sol" ? 'bold' : 'normal', // Set font weight based on active state
            fontFamily: 'Product Sans',
            color: active === "Sol" ? "#242F9B" : "#736C6C",
            borderBottom: active === 'Sol' ? '3px solid #242F9B' : 'none', // Thicker underline when active
            paddingBottom: active === 'Sol' ? '0.5px' : '0', // Add some padding-bottom when active
          }}
          onClick={() => setActive("Sol")}
          className="mr-8"
        >
          <a href="/guide">Nos Solutions</a>
        </li>

        <li
          key='About us'
          style={{
            cursor: 'pointer',
            fontSize: '18px',
            fontWeight: active === "About us" ? 'bold' : 'normal', // Set font weight based on active state
            fontFamily: 'Product Sans',
            color: active === "About us" ? "#242F9B" : "#736C6C",
            borderBottom: active === "About us" ? '3px solid #242F9B' : 'none', // Thicker underline when active
            paddingBottom: active === "About us" ? '0.5px' : '0', // Add some padding-bottom when active
          }}
          onClick={() => setActive("About us")}
          className="mr-8"
        >
          <a href="#about us">À propos de nous</a>
        </li>


        <li
          key='Contact'
          style={{
            cursor: 'pointer',
            fontSize: '18px',
            fontWeight: active === "Contact" ? 'bold' : 'normal', // Set font weight based on active state
            fontFamily: 'Product Sans',
            color: active === "Contact" ? "#242F9B" : "#736C6C",
            borderBottom: active === 'Contact' ? '3px solid #242F9B' : 'none', // Thicker underline when active
            paddingBottom: active === 'Contact' ? '0.5px' : '0', // Add some padding-bottom when active
          }}
          onClick={() => setActive("Contact")}
          className="mr-8"
        >
          <a href="#Contact">Nous Contacter </a>
        </li>



      </ul>

      <div>
        {/* <Link to='/register'>
          <Button variant="ghost" className="text-[#736C6C] text-[18px] h-11">Login</Button>
        </Link> */}
        <Link to='/register'>
          <Button variant="outline" className="text-[#242F9B] bg-[#f0f8ff] border-[#242F9B] text-[18px] h-11 w-42">Inscrivez-vous maintenant</Button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar