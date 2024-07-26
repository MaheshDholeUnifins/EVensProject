import React from 'react'
import img from '../assets/Sec1BgImg.jpg'

const Sec1 = () => {

  return (
    <div className='w-full h-72 md:h-[500px] lg:h-[722px] bg-cover bg-center text-2xl md:text-5xl lg:text-[64px] font-bold text-white flex justify-center items-center flex-col md:justify-center md:items-center md:flex-col' style={{backgroundImage : `url(${img})`}}>
      <h1>E-Vens</h1>
      <h2>E-Waste Recycler</h2>
    </div>
  )
}

export default Sec1