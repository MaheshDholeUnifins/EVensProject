import React, { useEffect } from 'react'
import AboutUsImg from '../assets/AboutAndServiceBgImg.png';
import Sec4 from '../HomeItems/Sec4';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    if(!localStorage.getItem('authToken')){
      navigate('/login');
    }
  },[navigate])

  if(!localStorage.getItem('authToken')){
    return null;;
  }

  return (
    <div>
        <div className='w-full h-60 flex justify-center items-center lg:w-full lg:h-[722px] bg-cover bg-center md:justify-center md:items-center lg:text-5xl font-bold text-white'  style={{backgroundImage : `url(${AboutUsImg})`}}>
            <h1>Services</h1>
        </div>
        <Sec4/>
    </div>
  )
}

export default AboutUs