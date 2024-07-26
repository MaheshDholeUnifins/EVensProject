import React from 'react'
import ProductCart from '../Components/ProductCart'
import LAP1 from './../assets/LAP1.png'
import LAP2 from './../assets/LAP2.png'
import LAP3 from './../assets/LAP3.png'
import LAP4 from './../assets/LAP4.png'
import LAP5 from './../assets/LAP5.png'
import LAP6 from './../assets/LAP6.png'

const Laptops = () => {
  const laptopsData = [{
    imgSrc : LAP1,
    title : 'Dell Latitude Laptop',
    productname : 'Intel Core i7-3687U',
    price : 32761.00
  },
  {
    imgSrc : LAP2,
    title : 'Samsung series 7 Ultra Notebook',
    productname : 'Intel core i5 3rd gen laptop',
    price : 5999.00
  },
  {
    imgSrc : LAP3,
    title : 'Dell (used Laptop)',
    productname : '',
    price : 9927.50
  },
  {
    imgSrc : LAP4,
    title : 'Refurbished Hp Elitebook 840',
    productname : 'Gi5 4th Gen 4gb',
    price : 9927.50
  },
  {
    imgSrc : LAP5,
    title : 'DELL Inspiron 1520',
    productname : '',
    price : 9927.50
  },
  {
    imgSrc : LAP6,
    title : 'Second-Hand',
    productname : 'Dell Latitude',
    price : 15499.00
  }
]

  return (
    <div className='w-full h-auto flex flex-wrap flex-col justify-center items-center md:justify-center md:items-center gap-5 md:gap-10 lg:gap-24 py-8 md:py-32 lg:py-48'>
        <h1 className='md:text-xl lg:text-2xl font-bold'>LAPTOPS</h1>
        <div className='w-full h-auto flex flex-wrap justify-center items-center md:flex-row md:justify-center md:items-center gap-6 md:gap-10 lg:gap-24'>
        {laptopsData.map((ele,index)=><ProductCart key={index} imgSrc={ele.imgSrc} title={ele.title} productname={ele.productname} price={ele.price} producttype='products'/>)}
        </div>
        
    </div>
  )
}

export default Laptops