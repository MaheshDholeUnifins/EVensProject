import React from 'react'
import img from '../assets/Vector.png'

const TestimonialsCard = ({title,position,description}) => {
  return (
    <div className='w-72 h-80 flex justify-center items-center flex-col md:w-[200px] md:h-[470px] lg:w-[261.9px] lg:h-[500px] md:flex md:justify-center md:flex-col md:items-center relative lg:px-3' data-aos="flip-left">
        <div className='size-20 md:size-20 lg:w-[101.03px] lg:h-[102.84px] rounded-full bg-[#85E05B] flex items-center justify-center absolute top-1'><img src={img} alt="" /></div>
        <div className='w-full h-60 py-12 md:w-[200px] md:h-[370px] lg:w-[298.17px] lg:h-[350px] rounded-3xl  border-black border-opacity-20 border-r-4 border-b-4 flex  lg:items-center text-center items-center flex-col shadow-xl md:py-10 px-5 md:px-4 lg:px-7  lg:space-y-2'>
            <h3 className='text-lg md:text-lg lg:text-2xl font-bold'>{title}</h3>
            <p className='text-lg md:text-base lg:text-base font-semibold text-wrap text-[#184638] mb-2 md:mb-2 lg:mb-2'>{position}</p>
            <p className='text-xs md:text-sm lg:text-base font-normal text-wrap text-justify'>{description}</p>
        </div>
    </div>
  )
}

export default TestimonialsCard