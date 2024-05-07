import React, { useState } from 'react';
import idealesi from '../assets/idealesi.svg';
import { NavLink, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Navbar = ({ scrollOpacity }) => {
  const [active, setActive] = useState("IdealESI");

  return (
    <nav style={{ backgroundColor: `rgba(255, 255, 255, ${scrollOpacity})` }} className="w-full flex py-4 justify-between items-center ml-0 mr-0">

      <img src={idealesi} alt="idealesi" className="absolute left-3 w-[4%]" />

      <ul className="list-none sm:flex hidden justify-center items-center flex-1">

        <li className="mr-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `cursor-pointer text-18px ${isActive ? 'font-bold text-[#242F9B] border-b-3 border-[#242F9B] pb-0.5' : 'font-normal text-[#736C6C]'}`
            }
            style={{ fontFamily: 'Product Sans' }}
            onClick={() => setActive('IdealESI')}
          >
            IdealESI
          </NavLink>
        </li>

        <li className="mr-8">
          <NavLink
            to="/guide"
            className={({ isActive }) =>
              `cursor-pointer text-18px ${isActive ? 'font-bold text-[#242F9B] border-b-3 border-[#242F9B] pb-0.5' : 'font-normal text-[#736C6C]'}`
            }
            style={{ fontFamily: 'Product Sans' }}
            onClick={() => setActive("Sol")}
          >
            Nos Solutions
          </NavLink>
        </li>

        <li className="mr-8">
          <NavLink
            to="/propos"
            className={({ isActive }) =>
              `cursor-pointer text-18px ${isActive ? 'font-bold text-[#242F9B] border-b-3 border-[#242F9B] pb-0.5' : 'font-normal text-[#736C6C]'}`
            }
            style={{ fontFamily: 'Product Sans' }}
            onClick={() => setActive("About us")}
          >
            À propos de nous
          </NavLink>
        </li>

        {/* <li className="mr-8">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `cursor-pointer text-18px ${isActive ? 'font-bold text-[#242F9B] border-b-3 border-[#242F9B] pb-0.5' : 'font-normal text-[#736C6C]'}`
            }
            style={{ fontFamily: 'Product Sans' }}
            onClick={() => setActive("Contact")}
          >
            Nous Contacter
          </NavLink>
        </li> */}
        <li className="mr-8">
          <a
            href="#Footer"
            className="cursor-pointer text-18px font-normal text-[#736C6C]"
            style={{
              fontFamily: 'Product Sans',
              fontWeight: 'normal',
              color: '#736C6C',
              borderBottom: 'none',
              paddingBottom: '0'
            }}
            onClick={() => setActive("Contact")}
          >
            Nous Contacter
          </a>
        </li>
      </ul>

      <div>
        <Link to='/register'>
          <Button variant="outline" className="text-[#242F9B] bg-[#f0f8ff] border-[#242F9B] text-[18px] h-11 w-42">Inscrivez-vous maintenant</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
