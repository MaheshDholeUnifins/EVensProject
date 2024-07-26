import React from 'react'
import { TbArrowForwardUpDouble } from "react-icons/tb";
import Img1 from '../assets/SellEWasteImg.png'
import Img2 from '../assets/SellBatteryImg.png'
import Img3 from '../assets/DisposeLaptopImg.png'

const Sec4 = () => {
  return (
    <div className='py-5 space-y-8 md:py-8 md:px-8 lg:py-10 lg:px-20 md:space-y-10 lg:space-y-16'>
        <div className='md:space-y-7 lg:space-y-10  md:w-full md:h-auto'>
            <h1 className='text-lg text-center md:text-2xl lg:text-[40px] font-bold leading-[48px]'>Sevices we are offering</h1>
            <div className='flex justify-center items-center flex-col md:flex-row py-4 md:space-y-8 lg:space-y-0 lg:justify-between lg:items-center lg:flex-row md:gap-4 lg:gap-10 lg:w-full lg:h-[410px]'>
                <div className='w-60 md:w-[250px] lg:w-[300px] md:h-[250px] lg:h-[343px] ' data-aos="fade-up">
                    <img src={Img1} alt="" className='w-60 md:w-[250px] lg:w-[300px] md:h-[216px] lg:h-[268px]' />
                    <div className='justify-center w-full h-12 md:w-full md:h-[50px] lg:w-full lg:h-[61px] bg-[#6FC650] md:text-sm lg:text-2xl font-medium text-center flex items-center md:justify-center md:items-center'>Sell E-Waste Online</div>
                </div>
                <div className='w-60 md:w-[250px] lg:w-[300px] md:h-[250px] lg:h-[343px]' data-aos="fade-up">
                    <img src={Img2} alt="" className='w-60 md:w-[250px] lg:w-[300px] md:h-[200px] lg:h-[268px]'/>
                    <div className='justify-center w-full h-12 md:w-full md:h-[50px] lg:w-full lg:h-[61px] bg-[#6FC650] md:text-sm lg:text-2xl font-medium text-center flex items-center md:justify-center md:items-center'>Sell Battery Scrap</div>
                </div>
                <div className='w-60 md:w-[250px] lg:w-[300px] md:h-[250px] lg:h-[343px] ' data-aos="fade-up">
                    <img src={Img3} alt="" className='w-60 md:w-[250px] lg:w-[300px] md:h-[200px] lg:h-[268px]'/>
                    <div className='justify-center w-full h-12 md:w-full md:h-[50px] lg:w-full lg:h-[61px] bg-[#6FC650] md:text-sm lg:text-2xl font-medium text-center flex items-center md:justify-center md:items-center'>Dispose Laptops & Computers</div>
                </div>
            </div>
            <div className='w-full h-auto justify-center  md:w-full md:h-auto  flex md:justify-center md:items-center'>
                <div className='w-40 h-8 md:w-[200px] md:h-[35px] lg:w-[259px] lg:h-[50px] bg-[#184638] flex justify-center items-center text-white md:text-xl lg:text-[24px] rounded-3xl gap-3 cursor-pointer'>More Service <TbArrowForwardUpDouble /></div>
            </div>
        </div>
    </div>
  )
}

export default Sec4