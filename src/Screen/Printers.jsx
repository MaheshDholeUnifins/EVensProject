import React from 'react'
import ProductCart from '../Components/ProductCart'
import PRINT1 from './../assets/PRINT1.png'
import PRINT2 from './../assets/PRINT2.png'
import PRINT3 from './../assets/PRINT3.png'
import PRINT4 from './../assets/PRINT4.png'
import PRINT5 from './../assets/PRINT5.png'
import PRINT6 from './../assets/PRINT6.png'

const Printers = () => {
  const printersData = [{
    imgSrc : PRINT1,
    title : 'HP 1020 Printer | Hp 1020',
    productname : '',
    price : 3242.00
  },
  {
    imgSrc : PRINT2,
    title : 'Epson PLQ-20 printer',
    productname : '',
    price : 13500.00
  },
  {
    imgSrc : PRINT3,
    title : 'HP Laserjet 4345 MFP',
    productname : '',
    price : 3000.00
  },
  {
    imgSrc : PRINT4,
    title : 'Epson Ecotank Et-m1180',
    productname : '',
    price : 5242.00
  },
  {
    imgSrc : PRINT5,
    title : 'Epson L3110',
    productname : 'Multifunction Printer',
    price : 9744.00
  },
  {
    imgSrc : PRINT6,
    title : 'Canon Color Laser',
    productname : 'Jet 1515',
    price : 6000.00
  }
]

  return (
    <div className='w-full h-auto flex flex-wrap flex-col justify-center items-center md:justify-center md:items-center gap-5 md:gap-10 lg:gap-24 py-8 md:py-32 lg:py-48'>
        <h1 className='md:text-xl lg:text-2xl font-bold'>PRINTERS</h1>
        <div className='w-full h-auto flex flex-wrap justify-center items-center md:flex-row md:justify-center md:items-center gap-6 md:gap-10 lg:gap-24'>
        {printersData.map((ele,index)=><ProductCart key={index} imgSrc={ele.imgSrc} title={ele.title} productname={ele.productname} price={ele.price} producttype='products'/>)}
        </div>
        
    </div>
  )
}

export default Printers