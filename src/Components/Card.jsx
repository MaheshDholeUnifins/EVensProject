import React from 'react';

const Card = ({ imgSrc, altName, title, description }) => {
  return (
    <div className="card flex justify-center items-center flex-col w-44 h-64 space-y-2 px-5 md:justify-center  md:items-center md:flex-col md:w-80 lg:w-[300px] md:h-80 lg:h-[400px] md:px-10 lg:px-10 lg:py-5 lg:text-justify md:rounded-[100px] rounded-[50px] bg-white md:space-y-2 border border-black border-opacity-20 border-y-4 shadow-inner" data-aos="flip-left">
      <img src={imgSrc} alt={altName} className='size-12 md:w-[80px] md:h-[80px] lg:w-[140px] lg:h-[140px] '/>
      <h2 className='text-sm md:text-lg lg:text-xl font-medium '>{title}</h2>
      <p className='text-xs md:text-sm lg:text-base font-normal'>{description}</p>
    </div>
  );
}

export default Card;
