import React from 'react'
import { NavLink } from "react-router-dom";

const DropDown = ({dropdown,setProduct}) => {

  if( dropdown == 'menuDropDown'){
    return (
      <div className='absolute right-0 md:hidden bg-black bg-opacity-10 w-36 h-44 bg-transparent backdrop-blur-md'>
          <ul className="text-darkGreen text-sm font-bold flex justify-center items-center flex-col gap-2">
              <NavLink to='/' className={(e)=>{return e.isActive ? 'text-xl text-[#F1F3A2]':''}}><li>Home</li></NavLink>
              <NavLink to='/AboutUs' className={(e)=>{return e.isActive ? 'text-xl text-[#F1F3A2]':''}}><li>About</li></NavLink>
              <NavLink to='/Service' className={(e)=>{return e.isActive ? 'text-xl text-[#F1F3A2]':''}}><li>Service</li></NavLink>  
              
              <li>Products</li>
              <NavLink to='/ContactUs' className={(e)=>{return e.isActive ? 'text-xl text-[#F1F3A2]':''}}><li>Contact</li></NavLink>
            </ul>
      </div>
    )
  }else if(dropdown == 'product'){
    return (
      <div className='md:w-40 lg:w-44 md:h-36 lg:h-40 bg-white'>
        <ul className='w-full flex md:flex-col md:justify-center md:space-y-1 md:py-2'>
          <NavLink to='/MobilePhones' onClick={()=>setProduct(false)}><li className='hover:bg-bgColor hover:bg-opacity-20 md:text-sm lg:text-base md:px-3'>Mobile Phones</li></NavLink>
          <NavLink to='/DesktopComputers' onClick={()=>setProduct(false)}><li className='hover:bg-bgColor hover:bg-opacity-20 md:text-sm lg:text-base md:px-3'>Desktop Computers</li></NavLink>
          <NavLink to='/Laptops' onClick={()=>setProduct(false)}><li className='hover:bg-bgColor hover:bg-opacity-20 md:text-sm lg:text-base md:px-3'>Laptops</li></NavLink>
          <NavLink to='/Printers' onClick={()=>setProduct(false)}><li className='hover:bg-bgColor hover:bg-opacity-20 md:text-sm lg:text-base md:px-3'>Printers</li></NavLink>
          <NavLink to='/HardDrives' onClick={()=>setProduct(false)}><li className='hover:bg-bgColor hover:bg-opacity-20 md:text-sm lg:text-base md:px-3'>Hard Drives</li></NavLink>
        </ul>
      </div>
    )
  }
  
}

export default DropDown