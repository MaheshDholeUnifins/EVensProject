import React from 'react'
import { IoMdCall } from "react-icons/io";

const Sec7 = () => {
  return (
    <div className='px-10 w-full h-28 justify-center items-center flex-col space-y-3 md:h-32 lg:h-[146px] bg-[#85E05B] flex md:justify-center md:items-center md:flex-col md:space-y-4 lg:space-y-5 '>
        <h1 className='text-lg md:text-xl lg:text-2xl font-bold'>E-Waste is not garbage, it's recyclable!</h1>
        <button className='bg-[#184638] text-white w-36 h-8 gap-3 md:w-36 md:h-8 lg:w-[193px] lg:h-[40px] md:text-sm lg:text-base font-semibold rounded-3xl flex justify-center items-center md:gap-3 lg:gap-4'>Contact Us <IoMdCall /></button>
    </div>
  )
}

export default Sec7