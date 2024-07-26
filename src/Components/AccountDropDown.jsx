import React from "react";
import { FaUser } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";
import AccountCard from "./AccountCard";

const AccountDropDown = ({setAccountToggle,setCardProfile,handleLogout}) => {
  return (
    <div className="lg:w-36 lg:h-32 flex md:flex-col md:justify-center md:space-y-4 md:px-4 border border-darkGreen border-opacity-55 bg-white">
      <button className="flex md:items-center md:gap-5" onClick={()=>{
        setAccountToggle(false);
        setCardProfile(true);
      }}>
        <FaUser className="text-bgColor" />
        <span>My Profile</span>
      </button>

      <button onClick={handleLogout} className="flex md:items-center md:gap-5">
        <RiLogoutCircleRLine className="text-bgColor" />
        <span>Logout</span>
      </button>

      <div ></div>
    </div>
  );
};

export default AccountDropDown;
