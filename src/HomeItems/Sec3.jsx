import React from 'react';
import FLImg from '../assets/FLImg.png';
import FSImg from '../assets/FSImg.png';
import GGImg from '../assets/GGImg.png';
import IPImg from '../assets/IPImg.png';
import RLImg from '../assets/RLImg.png';
import RRImg from '../assets/RRImg.png';
import Card from '../Components/Card';

const Sec3 = () => {
  const cardData = [
    {
      imgSrc: FLImg,
      altName: 'Fair Labour',
      title: 'Fair Labour',
      description: 'We adopt fair labour standards to protect the interests of our workers. Our objective is to ensure the utmost satisfaction of our workforce to provide you with best-in-class services.'
    },
    {
      imgSrc: IPImg,
      altName: 'Instant Payment',
      title: 'Instant Payment',
      description: 'We ensure financial stability to guarantee the best services to our clients, ensuring their investment is secure.'
    },
    {
      imgSrc: GGImg,
      altName: 'Green Guarantee',
      title: 'Green Guarantee',
      description: 'Our global presence and consistent growth provide our clients with services that meet international standards.'
    },
    {
      imgSrc: RRImg,
      altName: 'Recycling & Reuse',
      title: 'Recycling & Reuse',
      description: 'We prioritize innovation and progress to ensure that our clients stay ahead in their respective industries.'
    },
    {
      imgSrc: FSImg,
      altName: 'Free Shipping',
      title: 'Free Shipping',
      description: 'Our leadership is reliable and experienced, providing the best guidance and support for our clients.'
    },
    {
      imgSrc: RLImg,
      altName: 'Reverse Logistics',
      title: 'Reverse Logistics',
      description: 'We manage resources responsibly to ensure sustainability and long-term success for our clients.'
    }
  ];

  return (
    <div className='py-4 space-y-5 md:w-full lg:h-[1081px] bg-gradient-to-b from-[#BAF5E7] to-[#E0FCD9] md:py-10 lg:py-14 lg:px-20 md:space-y-10 lg:space-y-14'>
      <h1 className='text-lg md:text-xl lg:text-2xl font-bold leading-[29.05px] text-center'>Why Choose Evens</h1>
      <div className='flex justify-center flex-wrap gap-3 md:w-full md:h-auto md:justify-center md:gap-8 lg:gap-10 md:flex-wrap'>
        {cardData.map((data, index) => (
          <Card 
            key={index} 
            imgSrc={data.imgSrc} 
            altName={data.altName} 
            title={data.title} 
            description={data.description} 
          />
        ))}
      </div>
    </div>
  );
}

export default Sec3;
