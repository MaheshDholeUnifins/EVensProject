import React from 'react'
import ProductCart from '../Components/ProductCart'
import MP1 from './../assets/MP1.png'
import MP2 from './../assets/MP2.png'
import MP3 from './../assets/MP3.png'
import MP4 from './../assets/MP4.png'
import MP5 from './../assets/MP5.png'
import MP6 from './../assets/MP6.png'

const MobilePhones = () => {
  const mobilePhonesData = [{
    imgSrc : MP1,
    title : 'Nokia N97',
    productname : 'Mobile Phone',
    price : 1761.00
  },
  {
    imgSrc : MP2,
    title : 'Nokia 3220-Gsm900/',
    productname : 'Mobile Phone',
    price : 1251.00
  },
  {
    imgSrc : MP3,
    title : 'Appli IPhone 6 16GB Black',
    productname : 'Mobile Phone',
    price : 3999.00
  },
  {
    imgSrc : MP4,
    title : 'Nokia 1600',
    productname : 'Mobile Phone',
    price : 968.00
  },
  {
    imgSrc : MP5,
    title : 'Nokia N8',
    productname : 'Mobile Phone',
    price : 1699.00
  },
  {
    imgSrc : MP6,
    title : 'Nokia 1600',
    productname : 'Mobile Phone',
    price : 799.00
  }
]
 console.log(mobilePhonesData.name);
  return (
    <div className='w-full h-auto flex flex-wrap flex-col justify-center items-center md:justify-center md:items-center gap-5 md:gap-10 lg:gap-24 py-8 md:py-32 lg:py-48'>
        <h1 className='md:text-xl lg:text-2xl font-bold'>MOBILE PHONES</h1>
        <div className='w-full h-auto flex flex-wrap justify-center items-center md:flex-row md:justify-center md:items-center gap-6 md:gap-10 lg:gap-24'>
          {mobilePhonesData.map((ele,index)=><ProductCart key={index} imgSrc={ele.imgSrc} title={ele.title} productname={ele.productname} price={ele.price} producttype='products'/>)}
        </div>
        
    </div>
  )
}

export default MobilePhones