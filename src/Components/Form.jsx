import axios from 'axios';
import React, { useState } from 'react'

const Form = () => {
  const [enquiryData, setEnquiryData] = useState({
    name : '',
    number : '', 
    email : '', 
    city : '', 
    address : '', 
    description : ''
  });
  console.log(enquiryData);

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEnquiryData({
      ...enquiryData,
      [name]: value,
    });
  };

  const enquiryValidate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!enquiryData.name) {
      tempErrors["name"] = "Name is required";
      isValid = false;
    } else if (!/^[A-Za-z]+$/.test(enquiryData.name)) {
      tempErrors["name"] = "Please enter only alphabetic characters";
      isValid = false;
    }
    if (!enquiryData.number) {
      tempErrors["number"] = "Number is required";
      isValid = false;
    }else if (!/^\d*$/.test(enquiryData.number)) {
      tempErrors["number"] = "Please enter only numeric values";
      isValid = false;
    }
    if (!enquiryData.email) {
      tempErrors["email"] = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(enquiryData.email)) {
      tempErrors["email"] = "Email is invalid";
      isValid = false;
    }
    if (!enquiryData.city) {
      tempErrors["city"] = "City is required";
      isValid = false;
    } 
    if (!enquiryData.address) {
      tempErrors["address"] = "Address is required";
      isValid = false;
    } 
    if (!enquiryData.description) {
      tempErrors["description"] = "Description is required";
      isValid = false;
    } 
    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e)=>{
    e.preventDefault();
    console.log(enquiryData)
    if(enquiryValidate()){
      try {
        const res = await axios.post('http://localhost:8000/api/v1/enquiry',
          enquiryData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if(res.status === 201){
          setMessage("Enquiry Submitted Successfully.");
          setEnquiryData({
            name : '',
            number : '', 
            email : '', 
            city : '', 
            address : '', 
            description : ''
          });
          setTimeout(()=>{
            setMessage('');
          },2000);
        }

      } catch (error) {
        console.error("Error submitting form: ", error.response || error.message);
        setMessage("Error submitting form.");
        // setMessage("Please the data properly.");
      }
    }
  }

  return (
    <>
    <div className="text-center px-5 space-y-2 lg:text-center lg:space-y-4">
            <h1 className="text-xl font-bold lg:text-2xl lg:font-bold">Get in touch</h1>
            <p className="text-xs lg:text-sm text-[#615D5D]">Any question or remark? We are here to help you. Just write us a message!</p>
        </div>
    <form onSubmit={handleSubmit} data-aos="fade-up">
        <div className='w-full h-auto px-6 flex justify-center py-10'>
        <div className='w-full h-auto px-5 py-8 space-y-3 md:w-[650px] md:h-auto lg:w-[796px] lg:h-auto bg-[#F6F3A2] md:py-5 lg:py-9 md:px-10 lg:px-16 md:space-y-4 lg:space-y-6 rounded-3xl'>
            <div className=' w-full h-auto flex justify-center flex-col space-y-3 md:space-y-0 md:w-full md:h-auto md:justify-center lg:justify-center md:items-center lg:items-center md:flex-row md:gap-5 lg:gap-5'>
            <div>
            <input type="text" name="name" onChange={handleChange} value={enquiryData.name}  id="name" placeholder='Full Name' className='w-full h-12 px-4  md:px-5 md:w-[334px] md:h-10 lg:w-[334px] lg:h-[45px] rounded-lg outline-none lg:text-[14px] font-normal' />
            {errors && <p className="text-red-500 text-sm mt-4">{errors.name}</p>}
            </div>
            <div>
            <input type="text" name="number" onChange={handleChange} value={enquiryData.number} id="number" placeholder='Contact Number' className='w-full h-12 px-4  md:px-5 md:w-[334px] md:h-10 lg:w-[334px] lg:h-[45px] rounded-lg outline-none lg:text-[14px] font-normal' />
            {errors && <p className="text-red-500 text-sm mt-4">{errors.number}</p>}
            </div>
            
            </div>
            <div className='w-full h-auto justify-center flex-col space-y-3 md:space-y-0 md:w-full md:h-auto flex md:justify-center lg:justify-between md:flex-row md:gap-5 lg:gap-5'>
              <div>
              <input type="email" name="email" id="email" onChange={handleChange} value={enquiryData.email} placeholder='Your E-mail' className='w-full h-12 px-4  md:px-5 md:w-[334px] md:h-10 lg:w-[334px] lg:h-[45px] rounded-lg outline-none lg:text-[14px] font-normal' />
              {errors && <p className="text-red-500 text-sm mt-4">{errors.email}</p>}
              </div>

              <div>
              <input type="text" name="city" id="city" onChange={handleChange} value={enquiryData.city} placeholder='Select City' className='w-full h-12 px-4  md:px-5 md:w-[334px] md:h-10 lg:w-[334px] lg:h-[45px] rounded-lg outline-none lg:text-[14px] font-normal' />
              {errors && <p className="text-red-500 text-sm mt-4">{errors.city}</p>}
              </div>
            </div>
            <div>
            <input type="text" name="address" id="address" onChange={handleChange} value={enquiryData.address} placeholder='Enter Your Address' className='w-full h-12 px-4  md:px-5 md:w-full md:h-10 lg:w-full lg:h-[45px] rounded-lg outline-none lg:text-[14px] font-normal' />
            {errors && <p className="text-red-500 text-sm mt-4">{errors.address}</p>}
            </div>

            <div>
            <input type="text" name="description" id="description" onChange={handleChange} value={enquiryData.description} placeholder='Description' className='w-full h-12 px-4  md:px-5 md:w-full md:h-10 lg:w-full lg:h-[45px] rounded-lg outline-none lg:text-[14px] font-normal' />
            {errors && <p className="text-red-500 text-sm mt-4">{errors.description}</p>}
            </div>
            
            
            
            <div className='md:w-full flex justify-center'><button type='submit' onClick={handleSubmit} className='w-28 h-8 md:w-[100px] md:h-[30px] lg:w-[112px] lg:h-[40px] lg:text-sm lg:text-[18px] text-white bg-[#184638] rounded-3xl hover:text-darkGreen hover:bg-[#F1F3A2] hover:border-2 hover:border-darkGreen'>Send</button></div>
            {message && <p className="text-green-500 text-sm mt-4">{message}</p>}
        </div>
        </div>
        </form>
        </>
  )
}

export default Form