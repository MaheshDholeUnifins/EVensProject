import React from 'react'
import TestimonialsCard from '../Components/TestimonialsCard'

const Sec10 = () => {
  const cardData = [{
    title : 'John Doe',
    position : 'CEO of Tech Innovators Inc.',
    description : 'Partnering with EcoCycle E-Waste Management has transformed how we handle our electronic waste. Their professional and efficient service ensure that our old electronics are disposed of responsibly, reducing our environmental footprint.'
  },
{
  title : 'Jane Smith',
  position : 'IT Manager at Green Solutions Ltd.',
  description : "EcoCycle's e-waste recycling program is fantastic. Their team is knowledgeable and helped us set up a sustainable system for disposing of outdated tech.  "
},
{
  title : 'Mark Thompson',
  position : 'Owner of Thompson Tech Repairs',
  description : 'They make it easy to ensure that our discarded electronics are handled resposibly, and their services are both affordable and efficient.'
}]

  return (
    <div className='w-full h-auto py-5 space-y-3 justify-center items-center flex-col md:h-[580px] lg:h-[680px] flex md:justify-center md:flex-col md:items-center md:pt-10  lg:py-10 md:space-y-3 lg:space-y-4'>
        <h4 className='text-[#85E05B] text-base md:text-xl lg:text-base font-normal leading-[29.05px]'>Testimonials</h4>
        <h3 className='text-lg md:text-xl lg:text-2xl pb-4 font-normal'>What our clients say about Evens</h3>
        <div className='flex flex-wrap justify-center items-center flex-col md:flex-row lg:flex-row lg:justify-center lg:gap-20 md:gap-8'>
          {cardData.map((ele,index)=><TestimonialsCard key={index} title={ele.title} position={ele.position} description={ele.description}/>)}
          
        </div>
    </div>
  )
}

export default Sec10