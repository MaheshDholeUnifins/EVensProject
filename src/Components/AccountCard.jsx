import React, { useEffect, useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";
import axios from 'axios';
import { FaUserAlt } from "react-icons/fa";

const AccountCard = ({handleLogout}) => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetchData = async () =>{
      try {
        const token = localStorage.getItem('authToken');
        const response = await axios.get('http://localhost:8000/api/v1/profile',{
          headers : {
            'auth-token' : token
          }
        });
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchData();
  },[]);

  if(loading){
    return <p>Loading...</p>
  }

  return (
    <div className='md:px-20 md:space-y-5 lg:w-[498px] lg:h-[550px] bg-gradient-to-t from-white to-[#C6DAC3]'>
        <div className='w-full h-auto flex flex-col justify-center items-center md:py-4 lg:py-10 lg:space-y-3'>
            <FaUserAlt className='lg:size-24' />
            <h5 className='md:text-2xl font-normal'>{userData.name}</h5>
            <p className='md:text-base font-normal'>{userData.email}</p>
        </div>
        <div className='w-full h-auto md:py-5 md:space-y-5'>
            <div className='flex items-center md:gap-5'><FaShoppingCart className='md:size-6'/> My Cart</div>
            <div className='flex items-center md:gap-5'><FaUser className='md:size-6' /> Account Setting</div>
        </div>
        <div className='w-full flex justify-center py-5'><button onClick={handleLogout} className='md:w-[165px] md:h-[40px] border border-b-4 border-black border-opacity-25 rounded-full flex justify-center items-center md:gap-4 bg-white'><RiLogoutCircleRLine className='md:size-5'/> Logout</button></div>
    </div>
  )
}

export default AccountCard