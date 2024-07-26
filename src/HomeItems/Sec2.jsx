import React from 'react'
import AboutImg from './../assets/AboutImg.png'

const Sec2 = () => {
  return (
    <div className='flex justify-center items-center flex-col px-7 py-7 space-y-5 lg:justify-center lg:items-center md:flex-row md:gap-10 lg:gap-10 md:py-8 lg:py-16 lg:px-24'>
        <div className='flex justify-center md:justify-end items-center w-full h-auto md:w-1/3 lg:w-1/3 md:h-auto' data-aos="fade-right">
            <div className='size-40 md:w-[200px] lg:w-[307px] md:h-[200px] lg:h-[279px] bg-cover bg-center object-fill' style={{backgroundImage:`url(${AboutImg})`}}></div>
        </div>
        <div className='w-full h-auto md:w-1/2 lg:w-1/2 md:h-auto md:space-y-2 lg:space-y-4' data-aos="fade-left">
            <h2 className='text-lg md:text-lg lg:text-2xl font-bold'>Evens E-waste Management Pvt. Ltd</h2>
            <p className='text-base text-justify md:text-sm lg:text-base md:leading-5 lg:leading-6'>Evens - Your Partner in Responsible E-Waste Management Welcome to Evens, a leading company dedicated to the resposible management and recycling of electronic waste(e-waste). Our mission is to protect the environment by ensuring that elctronic waste is disposed of safely, efficiently, and sustainably.</p>
        </div>
    </div>
  )
}

export default Sec2;