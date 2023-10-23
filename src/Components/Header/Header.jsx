import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import {RiCloseFill} from 'react-icons/ri'
import { useState } from "react";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink>Home</NavLink>
      </li>
 
      <li>
        <NavLink>Statistics</NavLink>
      </li>
      <li>
        <NavLink>Job Listing</NavLink>
      </li>
      <li>
        <NavLink>Blog</NavLink>
      </li>
    </>
  );
  
    const [open , setOpen ] = useState (false)
    
  return (
    <nav className="flex justify-between items-center max-w-screen-2xl mx-auto  mt-5 p-3">
      <div  onClick={()=>setOpen(!open)}  className=" md:hidden  text-2xl font-extraboldbold">
        {open === true ? <RiCloseFill></RiCloseFill> : <FiMenu></FiMenu>} 
    </div>
      <div className="hidden md:block">
        <h3 className="text-2xl font-bold">CareerHub</h3>
      </div>
      <div className={` md:block absolute md:static ml-5 md:mt-0 bg-orange-300 md:bg-inherit p-2 rounded-md text-xl font-semibold ${open === true ? 'mt-40': '-mt-[9999px]'}`}>
       
        <div className="md:flex gap-10 list-none hover:bg-o ">{links}</div>
      </div>
      <div>
        <button className="btn btn-xs md:btn-md"> Start Applying</button>
      </div>
    </nav>
  );
};

export default Header;
