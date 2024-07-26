import React from "react";
import Ownership from "../assets/Ownership.png";
import CustomerFirst from "../assets/CustomerFirst.png";
import RespectforPeople from "../assets/RespectforPeople.png";

const Sec8 = () => {
  return (
    <div className="py-5 pb-7 space-y-3 md:pb-7 md:py-4 lg:py-6 md:space-y-3 lg:space-y-4">
      <h1 className="text-lg flex items-center justify-center md:text-xl lg:text-2xl font-bold lg:py-2">Our Values</h1>
      <div className="space-y-5 justify-center items-center flex-col md:w-full md:h-auto flex md:justify-center md:flex-row md:gap-5 lg:gap-10 md:items-center">
        <div className="w-52 h-56 md:w-52 md:h-52 lg:w-[223px] lg:h-[237px] border-2 border-t-8 border-black border-opacity-10 rounded-[49px] overflow-hidden pt-2" data-aos="flip-left">
          <div className="w-full h-40 md:w-52 md:h-40 lg:w-[223px] lg:h-[175.67px]  flex justify-center items-center">
            <img src={Ownership} alt="" className="md:w-36 md:h-36 lg:w-[223px] lg:h-[175.67px]" />
          </div>
          <p className="w-full h-12 flex justify-center items-center md:h-8 lg:h-[45.68px] bg-[#D5EDCA] text-[#184638] lg:text-base font-bold">
            Ownership
          </p>
        </div>
        <div className="w-52 h-56 md:w-52 md:h-52 lg:w-[223px] lg:h-[237px] border-2 border-t-8 border-black border-opacity-10 rounded-[49px] overflow-hidden pt-2" data-aos="flip-left">
          <div className="w-full h-40 md:w-52 md:h-40 lg:w-[223px] lg:h-[175.67px]  flex justify-center items-center">
            <img src={CustomerFirst} alt="" className="md:w-36 md:h-36 lg:w-[223px] lg:h-[175.67px]" />
          </div>
          <p className="w-full h-12 flex justify-center items-center md:h-8 lg:h-[45.68px] bg-[#D5EDCA] text-[#184638] lg:text-base font-bold">
            Customer First
          </p>
        </div>
        <div className="w-52 h-56 md:w-52 md:h-52 lg:w-[223px] lg:h-[237px] border-2 border-t-8 border-black border-opacity-10 rounded-[49px] overflow-hidden pt-2" data-aos="flip-left">
          <div className="w-full h-40 md:w-52 md:h-40 lg:w-[223px] lg:h-[175.67px]  flex justify-center items-center">
            <img src={RespectforPeople} alt="" className="size-28 md:size-24 lg:size-32" />
          </div>
          <p className="w-full h-12 flex justify-center items-center md:h-8 lg:h-[45.68px] bg-[#D5EDCA] text-[#184638] lg:text-base font-bold">
            Respect for People
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sec8;
