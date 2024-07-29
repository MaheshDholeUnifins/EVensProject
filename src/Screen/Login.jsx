import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdVisibility } from "react-icons/md";
import img from "./../assets/loginImg.png";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  console.log(formData);

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

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
    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("data received");
    if (validate()) {
      try {
        // const res = await axios("https://backend-ssx7.onrender.com/api/v1/login", formData, {
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   withCredentials: true
        //   },
        // );
        // const res = await axios({
        //   baseURL: "https://backend-ssx7.onrender.com",
        //   url : "/api/v1/login",
        //   data : formData,
        //   method : "post",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   withCredentials: true
        // });

        const res = await axios({
          baseURL: "http://localhost:8000",
          url : "/api/v1/login",
          data : formData,
          method : "post",
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true
        });

        if (res.status === 201) {
          console.log(res.status);
          console.log("Response data" +res.data.message);
          localStorage.setItem("authToken",res.data.authToken);
          localStorage.setItem("userEmail",res.data.userEmail);
          console.log(localStorage.getItem("authToken"));
          console.log(localStorage.getItem("userEmail"));
          setMessage("Login successfully!");
          setFormData({
            email: "",
            password: "",
          });
          setTimeout(() => {
            setMessage("");
            navigate("/");
          }, 2000);
        }
      } catch (error) {
        console.error("Error submitting form: ", error.response || error.message);
        if (error.response && error.response.status === 400) {
          setMessage("Invalid Credential.");
        } else {
          setMessage("Error submitting form.");
        }
      }
    }
  };


  return (
    <div className="flex justify-center items-center flex-col md:flex-row md:justify-center lg:justify-center md:items-center lg:items-center gap-8 md:gap-10 lg:gap-16 px-10 py-16 md:px-20 md:py-36 lg:py-40 ">
      <div className="flex p-5 md:p-7 lg:p-8 justify-center md:justify-center lg:justify-center items-center md:items-center lg:items-center flex-col md:flex-col lg:flex-col w-full md:w-[400px] lg:w-[435px] h-96 md:h-[400px] lg:h-[507px]  border-x-2 border-b-4 border-black border-opacity-20 rounded-3xl">
        <form onSubmit={handleSubmit}>
          <h1 className="text-2xl md:text-2xl lg:text-4xl font-bold text-[#0D2FA5] mb-2 md:mb-2 lg:mb-3">
            Welcome To Family
          </h1>
          <p className="text-sm md:text-sm lg:text-sm text-[#0D2FA5]">
            A community of over hundreds of members
          </p>
          <p className="text-sm md:text-sm lg:text-sm text-[#0D2FA5] mb-6 md:mb-6 lg:mb-6">
            To reduce reuse & recycle E-Waste
          </p>
          <div className="w-full md:w-full lg:w-full space-y-5 md:space-y-5 lg:space-y-6 mb-8 md:mb-8 lg:mb-6">
            <div className="flex px-4 py-1 md:px-4 lg:px-6 items-center md:items-center lg:items-center gap-3 md:gap-3 lg:gap-4 w-full md:w-full lg:w-[362px] h-9 md:h-8 lg:h-[40px] border border-[#0D2FA5] rounded-full">
              <FaUser className="text-[#0D2FA5]" />
              <input
                type="email"
                name="email"
                id=""
                value={formData.email}
                onChange={handleChange}
                placeholder="Username / Email"
                className="w-full h-auto outline-none"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
            <div className="flex px-4 py-1 md:px-4 lg:px-6 items-center md:items-center lg:items-center gap-3 md:gap-3 lg:gap-4 w-full md:w-full lg:w-[362px] h-9 md:h-8 lg:h-[40px] border border-[#0D2FA5] rounded-full">
              <MdVisibility className="text-[#0D2FA5]" />
              <input
                type="password"
                name="password"
                id=""
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full h-auto outline-none"
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div className="w-full justify-end md:w-full text-base md:text-base text-[#0D2FA5] flex items-center gap-2 md:gap-2 mb-10 md:mb-10 lg:mb-20">
            <NavLink to='/ForgetPassword'>Forget Password</NavLink>
          </div>

          <div className="flex w-full md:w-full lg:w-full justify-between md:justify-between items-center md:items-center">
            <button
              type="submit"
              className="w-24 md:w-24 lg:w-[155px] h-8 md:h-8 lg:h-[40px] flex justify-center items-center bg-[#0D2FA5] text-white text-base font-bold rounded-full"
            >
              Login
            </button>
            <NavLink to="/register">
              <button className="w-36 md:w-32 lg:w-[155px] h-8 md:h-8 lg:h-[40px] flex justify-center items-center text-[#0D2FA5] md:text-sm lg:text-base font-bold rounded-full border border-black border-b-4 border-opacity-30">
                Create Account
              </button>
            </NavLink>
          </div>
          {message && <p className="text-green-500 text-sm mt-4">{message}</p>}
        </form>
        
      </div>

      <div
        className="w-full h-96 md:w-[400px] md:h-[400px] lg:w-[572px] lg:h-[525px] bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
    </div>
  );
};

export default Login;
