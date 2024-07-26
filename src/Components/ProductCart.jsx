// import React, { useState } from 'react'
// import { FaCartPlus } from "react-icons/fa6";
// import { useDispatchCart, useCart } from './ContextReducer.jsx';

// const ProductCart = (props) => {
//   let dispatch = useDispatchCart();
//   let data = useCart();

//   const handleAddToCard =async ()=>{
    
//     await dispatch({type : 'ADD', productImg  : props.imgSrc, title : props.title, productname : props.productname, price : props.price, quantity: 1});
//     console.log(dispatch);
//     console.log(data);
//     console.log(props.productname);
//   }
  
//   if(props.producttype == 'products'){
//   return (
//     <div className='w-40 h-60 md:w-[200px] md:h-[300px] lg:w-[300px] lg:h-[400px]'>
//         <div className='w-full h-32 md:w-full lg:w-full md:h-[150px] lg:h-[230px] overflow-hidden flex justify-center lg:aspect-1' ><img src={props.imgSrc} alt="" className='object-cover' /></div>
//         <div className='bg-[#F8E5E5] flex flex-col justify-center items-center space-y-1 md:space-y-1 lg:space-y-2 py-2 md:py-3 lg:py-3 px-1 lg:px-10'>
//             <p className='text-[#16559F] text-xs md:text-sm font-semibold lg:text-base '>{props.title}</p>
//             <p className='text-[#16559F] text-xs md:text-sm font-semibold lg:text-base '>{props.productname}</p>
//             <p className='text-xs md:text-sm font-semibold lg:text-base'>Rs. {props.price}</p>
//             <button onClick={handleAddToCard} className='text-xs flex justify-center items-center gap-2 md:text-sm md:py-1 md:px-2 font-bold w-28 h-8 md:w-[120px] lg:w-[170px] lg:h-10 rounded-full bg-[#DF9D9D]'>Add to cart <FaCartPlus /></button>
//         </div>
//     </div>
//   )
// }

//   if(props.producttype == 'addproduct'){
//     return (
//       <div className=' flex justify-center gap-3 md:justify-between items-center px-3 md:px-5 lg:px-10 w-full h-36 md:w-[500px] lg:w-[800px] md:h-[200px] lg:h-[291px] border border-black border-b-4 border-opacity-20 shadow-lg'>
//         <div className='w-32 h-28 md:w-[170px] md:h-[150px] lg:w-[259px] lg:h-[213px] bg-cover bg-no-repeat  aspect-1 overflow-hidden' ><img src={props.imgSrc} alt="" className='object-fill'/></div>
//         <div className='flex justify-center items-center flex-col md:flex-col space-y-2 md:space-y-5 lg:space-y-7'>
//           <div className='text-center md:space-y-2 lg:space-y-2'>
//           <p className='text-[#16559F] text-xs md:text-base font-semibold'>{props.title}</p>
//           <p className='text-[#16559F] text-xs md:text-base font-semibold'>{props.productname}</p>
//           <span className='text-sm font-semibold'>Rs. {props.price}</span>
//           </div>
          
//           <button onClick={()=>{dispatch({type : "REMOVE", index : props.index})}} className='w-28 h-6 md:w-32 md:h-7 lg:w-[170px] lg:h-10 rounded-full bg-[#DF9D9D] text-sm md:text-base lg:text-lg font-bold'>Remove</button>
//         </div>
//         <div className='flex justify-center items-center md:w-20 md:h-36 lg:w-[113px] lg:h-[233px] bg-[#F8E5E5]'>
//           <div className='rounded-full flex justify-center items-center flex-col text-3xl lg:w-10 lg:h-[170px] bg-[#DF9D9D]'>
//             <button onClick={()=>{dispatch({type : "INCREMENT",quantity : data.quantity})}}>+</button>
//             <span>{props.quantity}</span>
//             <button onClick={()=>{dispatch({type : "DECREMENT",quantity : data.quantity})}}>-</button>
//           </div>
//         </div>
//       </div>
//     )
//   }

// }

// export default ProductCart

import React from 'react';
import { FaCartPlus } from "react-icons/fa6";
import { useDispatchCart, useCart } from './ContextReducer.jsx';

const ProductCart = (props) => {
  let dispatch = useDispatchCart();
  let data = useCart();

  const handleAddToCart = async () => {
    await dispatch({ type: 'ADD', productImg: props.imgSrc, title: props.title, productname: props.productname, price: props.price, quantity: 1 });
    console.log(dispatch);
    console.log(data);
    console.log(props.productname);
  }

  

  if (props.producttype === 'products') {
    return (
      <div className='w-40 h-60 md:w-[200px] md:h-[300px] lg:w-[300px] lg:h-[400px]'>
        <div className='w-full h-32 md:w-full lg:w-full md:h-[150px] lg:h-[230px] overflow-hidden flex justify-center lg:aspect-1'>
          <img src={props.imgSrc} alt="" className='object-cover' />
        </div>
        <div className='bg-[#F8E5E5] flex flex-col justify-center items-center space-y-1 md:space-y-1 lg:space-y-2 py-2 md:py-3 lg:py-3 px-1 lg:px-10'>
          <p className='text-[#16559F] text-xs md:text-sm font-semibold lg:text-base '>{props.title}</p>
          <p className='text-[#16559F] text-xs md:text-sm font-semibold lg:text-base '>{props.productname}</p>
          <p className='text-xs md:text-sm font-semibold lg:text-base'>Rs. {props.price}</p>
          <button onClick={handleAddToCart} className='text-xs flex justify-center items-center gap-2 md:text-sm md:py-1 md:px-2 font-bold w-28 h-8 md:w-[120px] lg:w-[170px] lg:h-10 rounded-full bg-[#DF9D9D]'>
            Add to cart <FaCartPlus />
          </button>
        </div>
      </div>
    )
  }

  
  return null;
}

export default ProductCart;
