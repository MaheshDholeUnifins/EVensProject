import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdVisibility, MdOutlineEmail } from "react-icons/md";
import img from "./../assets/loginImg.png";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { TiTick } from "react-icons/ti";

const ForgetPassword = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    otp : "",
    password: "",
    feature : "ChangePassword"
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [verify, setVerify] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.email) {
      tempErrors["email"] = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors["email"] = "Email is invalid";
      isValid = false;
    }
    if (!formData.password) {
      tempErrors["password"] = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      tempErrors["password"] = "Password must be at least 6 characters long";
      isValid = false;
    }
    if(!verify){
        isValid = false;
        tempErrors["otp"] = "Verify your OTP";
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const res = await axios.post(
          "http://localhost:8000/api/v1/register",
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (res.status === 201) {
          setMessage("Password Updated successfully!");
          setFormData({
            email: "",
            otp : "",
            password: "",
          });
          setTimeout(() => {
            setMessage("");
            navigate("/login");
          }, 2000);
        }
      } catch (error) {
        console.error("Error submitting form: ", error.response || error.message);
        if (error.response && error.response.status === 422) {
          setMessage("Email already exists.");
        } else {
          setMessage("Error submitting form.");
        }
      }
    }
  };

  
  const handleSendOtp =async (e)=>{
    e.preventDefault();

    try {
      const sendMailData = {
        email : formData.email,
        feature : "ChangePassword"
      }
      console.log(sendMailData);

      const otpResponse = await axios.post("http://localhost:8000/api/v1/sendotp",
        sendMailData,
        {
          headers : {
            "Content-Type" : "application/json",
          }
        }
      );
      if(otpResponse.status === 422){
        console.log(otpResponse.data);
      }else if(otpResponse.status === 200){
        console.log(otpResponse.data);
        window.alert(otpResponse.data.message);
        
      }
      
    } catch (error) {
      console.log("Error sending email",error.response);
      if(error.response && error.response.status === 422){
        console.log("Email already exists.")
      }else{
        console.log("Error sending Otp");
      }
    }

  }

  const handleVerify = async (e) => {
    e.preventDefault();

    try {
        const data = {
            email: formData.email,
            otp: formData.otp
        };

        const verifyOtp = await axios.post(
            "http://localhost:8000/api/v1/verifyOtp",
            data,
            {
                headers: {
                    "Content-Type": "application/json",
                }
            }
        );

        if (verifyOtp.status === 200) {
            console.log(verifyOtp.data.message);
            setVerify(true);
            setErrors({
                email: verifyOtp.data.message
            });
            // setOtp('');
        } else {
            console.log(verifyOtp.data);
            setErrors({
                email: verifyOtp.data.message
            });
        }
    } catch (error) {
        console.error("Error verifying OTP:", error);
        setErrors({
            email: "Invalid OTP. Please try again."
        });
    }
};

    return (
        <div className="flex justify-center items-center flex-col md:justify-center md:items-center md:flex-row gap-8 md:gap-8 lg:gap-16 py-8 px-10 md:py-36 md:px-16 lg:px-0 lg:py-40 ">
          <div
            className="w-full h-72 md:w-1/2 md:h-[400px] lg:w-[572px] lg:h-[525px] bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
    
          <div className="flex w-full h-auto md:w-1/2 md:h-[400px] px-2 py-7 md:p-6 lg:p-8 justify-center md:justify-center items-center md:items-center md:flex-col lg:w-[435px] lg:h-[507px]  border-x-2 border-b-4 border-black border-opacity-20 rounded-3xl">
            <form >
              <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-[#0D2FA5] mb-2 md:mb-2 lg:mb-3">
                Forget Password
              </h1>
              <p className="text-sm md:text-sm lg:text-sm text-[#0D2FA5] mb-4 md:mb-4 lg:mb-6">
                Here you can change your password
              </p>
              <div className="w-full md:w-full lg:w-full space-y-4 md:space-y-4 lg:space-y-6 mb-8 md:mb-8 lg:mb-10">
    
                <div className="flex px-3 py-1 md:py-0 md:pl-4 md:px-2 lg:px-2 lg:pl-5 items-center md:items-center gap-2 md:gap-2 lg:gap-4 w-full md:w-full lg:w-[362px]  md:h-[30px] lg:h-[40px] border border-[#0D2FA5] rounded-full">
                  <MdOutlineEmail className="text-[#0D2FA5] size-6 md:size-10 lg:size-10" />
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    placeholder="Email"
                    className="w-full h-auto outline-none "
                  />
                  {formData.email ? (<button type="button" onClick={handleSendOtp} className="bg-[#0D2FA5] flex justify-center rounded-full  md:px-2 text-xs md:text-sm font-medium  lg:px-2 py-1 lg:py-1 w-28 md:w-40 lg:w-36 text-white">Send OTP</button>) : '' }
                  
                </div>
                <div className="border border-[#0D2FA5] rounded-full  pl-5 px-1 py-1 md:px-1 md:pl-5 md:py-1 lg:py-1 lg:px-1 lg:pl-5 lg:w-48 flex"><input type="text" value={formData.otp} onChange={handleChange} name="otp" id="otp" className=" outline-none w-20 md:w-24 lg:w-20 " placeholder="Enter OTP" />
                {verify ? (<button onClick={handleVerify} className="flex justify-center items-center bg-bgColor text-white rounded-full w-16 md:w-20 lg:w-24 lg:px-2 lg:py-1"><TiTick />Verified</button>) : (<button onClick={handleVerify} className="bg-[#0D2FA5] text-white rounded-full w-16 md:w-20 lg:px-4 lg:py-1">Verify</button>)}
                
                </div>
                
                {errors.otp && (
                  <p className="text-red-500 text-sm mt-1">{errors.otp }</p>
                )}
    
                <div className="flex px-3 py-1 md:py-0 md:px-4 lg:px-6 items-center md:items-center gap-2 md:gap-3 lg:gap-4 w-full md:w-full lg:w-[362px]  md:h-[30px] lg:h-[40px] border border-[#0D2FA5] rounded-full">
                  <MdVisibility className="text-[#0D2FA5] md:size-6 lg:size-7" />
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                    placeholder="Set Your New Password"
                    className="w-full h-auto outline-none"
                  />
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>
    
              <div className="flex w-full md:w-full lg:w-full justify-center md:justify-between items-center md:items-center">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-32 md:w-32 lg:w-[155px] h-8 md:h-9 lg:h-[40px] flex justify-center items-center bg-[#0D2FA5] text-white text-sm md:text-sm lg:text-base font-bold rounded-full"
                >
                  Change Password
                </button>
              </div>
              {message && <p className="text-green-500 text-sm mt-4">{message}</p>}
            </form>
          </div>
        </div>
      );
}

export default ForgetPassword