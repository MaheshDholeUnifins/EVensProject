import Home from "./Screen/Home";
import AboutUs from "./Screen/AboutUs";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Service from "./Screen/Service";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./Screen/ContactUs";
import Login from "./Screen/Login";
import Registration from './Screen/Registration'
import MobilePhones from "./Screen/MobilePhones";
import DesktopComputer from "./Screen/DesktopComputer";
import Laptops from "./Screen/Laptops";
import Printers from "./Screen/Printers";
import HardDrives from "./Screen/HardDrives";
import { CartProvider } from "./Components/ContextReducer.jsx";
import AddToCart from "./Screen/AddToCart.jsx";
import ForgetPassword from "./Screen/ForgetPassword.jsx";

const App = () => {
  return (
    <CartProvider>
        <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<><Navbar/><AboutUs/><Footer/></>} />
          <Route path="/Service" element={<><Navbar/><Service/><Footer/></>} />
          <Route path="/ContactUs" element={<><Navbar/><ContactUs/><Footer/></>} />
          <Route path="/login" element={<><Navbar/><Login/><Footer/></>} />
          <Route path="/register" element={<><Navbar/><Registration/><Footer/></>} />
          <Route path="/MobilePhones" element={<><Navbar/><MobilePhones/><Footer/></>} />
          <Route path="/DesktopComputers" element={<><Navbar/><DesktopComputer/><Footer/></>} />
          <Route path="/Laptops" element={<><Navbar/><Laptops/><Footer/></>} />
          <Route path="/Printers" element={<><Navbar/><Printers/><Footer/></>} />
          <Route path="/HardDrives" element={<><Navbar/><HardDrives/><Footer/></>} />
          <Route path="/AddToCart" element={<><Navbar/><AddToCart/><Footer/></>} />
          <Route path="/ForgetPassword" element={<><Navbar/><ForgetPassword/><Footer/></>} />
        </Routes>
      </div>
    </Router>
    </CartProvider>
    
  );
};

export default App;
