import React from 'react';
import { useCart, useDispatchCart } from '../Components/ContextReducer';
import axios from 'axios';
import { data } from 'autoprefixer';

const AddToCart = () => {
  let data = useCart();
  let dispatch = useDispatchCart();

  console.log("Add to cart", data);
  console.log("Data length",data.length);

  const handleOrderData = async ()=>{
    let userEmail = localStorage.getItem('userEmail');
    let orderData ={
      order_data : data,
      email : userEmail,
      order_date : new Date().toString()
    }
    let response = await axios.post('http://localhost:8000/api/v1/orderData', orderData, {
      headers: { "Content-Type": "application/json" }
    }, { withCredentials: true });

    console.log("Order Response :", response);
    if(response.status === 200){
      window.alert("Product Order Successfully");
      dispatch({type : 'DROP'})
    }
  }
  if(data.length === 0){
    return(
      <div className='lg:py-56 flex justify-center lg:text-3xl font-bold'>There is no Order</div>
    )
  }else{
  return (
    <div className='w-full h-auto flex flex-wrap justify-center px-10 md:px-0 py-7 md:py-36 lg:py-44'>
      {data.map((ele, index) => {
        return (
          <div key={index} className='flex justify-center gap-3 md:justify-between items-center px-3 md:px-5 lg:px-10 w-full h-36 md:w-[500px] lg:w-[800px] md:h-[200px] lg:h-[291px] border border-black border-b-4 border-opacity-20 shadow-lg'>
            <div className='w-32 h-28 md:w-[170px] md:h-[150px] lg:w-[259px] lg:h-[213px] bg-cover bg-no-repeat aspect-1 overflow-hidden'>
              <img src={ele.productImg} alt="" className='object-fill' />
            </div>
            <div className='flex justify-center items-center flex-col md:flex-col space-y-2 md:space-y-5 lg:space-y-7'>
              <div className='text-center md:space-y-2 lg:space-y-2'>
                <p className='text-[#16559F] text-xs md:text-base font-semibold'>{ele.title}</p>
                <p className='text-[#16559F] text-xs md:text-base font-semibold'>{ele.productname}</p>
                <span className='text-sm font-semibold'>Rs. {ele.price}</span>
              </div>
              <button onClick={()=>{dispatch({type :"REMOVE",index : index})}} className='w-28 h-6 md:w-32 md:h-7 lg:w-[170px] lg:h-10 rounded-full bg-[#DF9D9D] text-sm md:text-base lg:text-lg font-bold'>Remove</button>
            </div>
            <div className='flex justify-center items-center md:w-20 md:h-36 lg:w-[113px] lg:h-[233px] bg-[#F8E5E5]'>
              <div className='rounded-full flex justify-center items-center flex-col text-3xl lg:w-10 lg:h-[170px] bg-[#DF9D9D]'>
                <button onClick={()=>{dispatch({type :"INCREMENT", quantity : ele.quantity , index :index})}}>+</button>
                <span>{ele.quantity}</span>
                <button onClick={()=>{dispatch({ type : "DECREMENT", quantity : ele.quantity, index : index})}}>-</button>
              </div>
            </div>
          </div>
        );
      })}
      <div className='w-full h-auto flex justify-center'>
        <button type='submit' onClick={handleOrderData} className='bg-darkGreen rounded-full py-1 px-5 text-white' >Procced</button>
      </div>
      
    </div>
  );}
}

export default AddToCart;
