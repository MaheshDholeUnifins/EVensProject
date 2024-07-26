import React from 'react'
import ProductCart from '../Components/ProductCart'
import HD1 from './../assets/HD1.png'
import HD2 from './../assets/HD2.png'
import HD3 from './../assets/HD3.png'
import HD4 from './../assets/HD4.png'
import HD5 from './../assets/HD5.png'
import HD6 from './../assets/HD6.png'

const HardDrives = () => {
  const hardDriveData = [{
    imgSrc : HD1,
    title : 'Western Digital Caviar Blue',
    productname : '1 TB internal Hard Drive',
    price : 3242.00
  },
  {
    imgSrc : HD2,
    title : '500GB Desktop Internal Hard Drive HDD',
    productname : '3.5 inch SATA6 Gb/s 7200',
    price : 1099.00
  },
  {
    imgSrc : HD3,
    title : 'HP 450 GB SAS 15K rPM 3.5 Inch Hard Disk',
    productname : '487675-001| 495608-001',
    price : 2500.00
  },
  {
    imgSrc : HD4,
    title : 'HDD Consistent 500gb',
    productname : '',
    price : 600.00
  },
  {
    imgSrc : HD5,
    title : 'WD 500GB WD5000AAKX',
    productname : 'Desktop Hard Disk Drive',
    price : 1499.00
  },
  {
    imgSrc : HD6,
    title : 'SEAGATE Laptop Hard Disk',
    productname : 'Drive 500GB-1TB SATA HDD',
    price : 765.00
  }
]

  return (
    <div className='w-full h-auto flex flex-wrap flex-col justify-center items-center md:justify-center md:items-center gap-5 md:gap-10 lg:gap-24 py-8 md:py-32 lg:py-48'>
        <h1 className='md:text-xl lg:text-2xl font-bold'>HARD DRIVES</h1>
        <div className='w-full h-auto flex flex-wrap justify-center items-center md:flex-row md:justify-center md:items-center gap-6 md:gap-10 lg:gap-24'>
        {hardDriveData.map((ele,index)=><ProductCart key={index} imgSrc={ele.imgSrc} title={ele.title} productname={ele.productname} price={ele.price} producttype='products'/>)}
        </div>
        
    </div>
  )
}

export default HardDrives