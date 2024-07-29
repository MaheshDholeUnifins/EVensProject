import React ,{useEffect} from "react";
import Navbar from "../Components/Navbar";
import Sec1 from "../HomeItems/Sec1";
import Sec2 from "../HomeItems/Sec2";
import Sec3 from "../HomeItems/Sec3";
import Sec4 from "../HomeItems/Sec4";
import Form from "../Components/Form"
import Sec5 from "../HomeItems/Sec5";
import Sec7 from "../HomeItems/Sec7";
import Sec8 from "../HomeItems/Sec8";
import Sec9 from "../HomeItems/Sec9";
import Sec10 from "../HomeItems/Sec10";
import Footer from "../Components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  // useEffect(()=>{
  //   if(!localStorage.getItem('authToken')){
  //     navigate('/login');
  //   }
  // },[navigate])

  // if(!localStorage.getItem('authToken')){
  //   return null;;
  // }

  return (
    <div>
      <Navbar />
      <Sec1 />
      <Sec2 />
      <Sec3 />
      <Sec4 />
      <Form/>
      <Sec5 />
      <Sec7 />
      <Sec8 />
      <Sec9 />
      <Sec10 />
      <Footer />
    </div>
  );

};

export default Home;
