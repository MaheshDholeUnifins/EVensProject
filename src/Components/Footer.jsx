import React from 'react'
import { IoSearch } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import NavigatingImg from '../assets/NavigatingImg.png';
import { MdCopyright } from "react-icons/md";
import EvensLogo from '../assets/EvensLogo.png'
import { NavLink } from 'react-router-dom';

const Footer = () => {

    const topFunction = ()=>{
        document.body.scrollTop =0;
        document.documentElement.scrollTop = 0;
    }

  return (
    <div>
    <div className='flex flex-wrap justify-between py-6 px-16 space-y-4 space-x-4 md:space-x-0  md:py-8 lg:px-24 lg:py-7 lg:w-full lg:h-[259px] bg-[#F1F3A2] md:justify-center md:gap-12 lg:justify-between'>
        <div><img src={EvensLogo} alt="Logo" className='size-20 md:size-14 lg:w-[50px] lg:h-[62.03px]' /></div>
        <div className='space-y-3'>
            <h5 className='text-black text-sm md:text-sm lg:text-lg font-bold'>Quick Links</h5>
            <ul className='text-black md:text-sm lg:text-[15] font-medium space-y-1'>
            <NavLink to='/' ><li>Home</li></NavLink>
            <NavLink to='/AboutUs' ><li>About</li></NavLink>
            <NavLink to='/Service' ><li>Services</li></NavLink>
            <li>Products</li>
            <NavLink to='/ContactUs' ><li>Contact</li></NavLink>
            </ul>
        </div>
        <div className='text-black space-y-6'>
            <h5 className='md:text-sm lg:text-base font-bold'>Address</h5>
            <p className='md:text-sm md:text-wrap lg:text-sm font-normal'>8302 Preston Rd. Maine 9380</p>
        </div>
        <div className='space-y-4'>
            <div className='flex lg:justify-between md:flex-col  lg:px-5 md:space-y-3'>
                <p className='text-black md:text-sm lg:text-base font-bold'>Find us on</p>
                <div className='flex justify-center items-center gap-2'>
                    <FaTwitter className='text-black md:size-5 lg:size-6 cursor-pointer' />
                    <MdFacebook className='text-black md:size-5 lg:size-6 cursor-pointer' />
                    <RiInstagramFill className='text-black md:size-5 lg:size-6 cursor-pointer' />
                </div>
            </div>
        </div>
        <div>
            <button onClick={topFunction}><img src={NavigatingImg} alt="" className='cursor-pointer md:size-9 lg:size-12 text-black' /></button>
        </div>
    </div>
    <div className='bg-[#F1F3A2] text-center py-5'><p className='flex justify-center items-center text-black text-sm font-bold'>Evens-Ewastemanagement | 2022 <MdCopyright className='text-black' /> All rights reserved.</p> </div>
    </div>
  )
}

export default Footer