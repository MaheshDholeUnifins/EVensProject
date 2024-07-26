import React from 'react'
import ProductCart from '../Components/ProductCart'
import DC1 from './../assets/DC1.png'
import DC2 from './../assets/DC2.png'
import DC3 from './../assets/DC3.png'
import DC4 from './../assets/DC4.png'
import DC5 from './../assets/DC5.png'
import DC6 from './../assets/DC6.png'

const DesktopComputer = () => {
  const desktopComputerData = [{
    imgSrc : DC1,
    title : 'Dell Latitude Laptop',
    productname : 'Intel Core i7-3687U',
    price : 32761.00
  },
  {
    imgSrc : DC2,
    title : 'Assembed Computer',
    productname : 'Intel Core 2 DuoCPU',
    price : 37761.00
  },
  {
    imgSrc : DC3,
    title : 'HP Elitedesk Pc',
    productname : 'Core i5',
    price : 12499.00
  },
  {
    imgSrc : DC4,
    title : 'Desktop Computer',
    productname : 'with 2 GB RAM',
    price : 5500.00
  },
  {
    imgSrc : DC5,
    title : 'HP Elitedesk PC',
    productname : 'Core i3',
    price : 1699.00
  },
  {
    imgSrc : DC6,
    title : 'Lenovo C340 All-in-one',
    productname : 'Desktop Intel Core i3 Gen',
    price : 8999.00
  }
]

  return (
    <div className='w-full h-auto flex flex-wrap flex-col justify-center items-center md:justify-center md:items-center gap-5 md:gap-10 lg:gap-24 py-8 md:py-32 lg:py-48'>
        <h1 className='md:text-xl lg:text-2xl font-bold'>DESKTOP COMPUTERS</h1>
        <div className='w-full h-auto flex flex-wrap justify-center items-center md:flex-row md:justify-center md:items-center gap-6 md:gap-10 lg:gap-24'>
        {desktopComputerData.map((ele,index)=><ProductCart key={index} imgSrc={ele.imgSrc} title={ele.title} productname={ele.productname} price={ele.price} producttype='products'/>)}
        </div>
        
    </div>
  )
}

export default DesktopComputer