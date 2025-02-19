import React from "react";
import logo from '../assets/CarePoint-Icon.png'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className=" text-[#0d0e0e] py-8 px-6 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Left - Logo */}
        <div className="flex items-center space-x-3">
          <div className=" w-12 h-12 flex items-center justify-center rounded-full">
            <span className="text-white text-lg font-bold"><img src={logo} alt="" /></span>
          </div>
          <h2 className="text-lg font-semibold">Care Point Ltd .</h2>
        </div>

        {/* Center - Navigation */}
        <nav className="mt-4 md:mt-0">
          <ul className="flex space-x-6 text-[#0d0e0e] font-medium">
          <Link to={'/'}>
          <li className="hover:text-[#7e9695] cursor-pointer">Home</li>
          </Link>
           <Link to={'/careBoat'}>
           <li className="hover:text-[#7e9695] cursor-pointer">care bot</li>
           </Link>
           <Link to={'/aboutUs'}>
           <li className="hover:text-[#7e9695] cursor-pointer">About us</li>
           </Link>
          <Link to={'/support'}>
          <li className="hover:text-[#7e9695] cursor-pointer">support</li>
          </Link>
          </ul>
        </nav>

        {/* Right - Social Media */}
        <div className="mt-4 md:mt-0 flex space-x-4 text-[#0d0e0e]">
         <a href="https://www.facebook.com" target="_blank"> <FaFacebook className="text-2xl hover:text-[#8fb0ae] cursor-pointer" /></a>
         <a href="https://x.com/?lang=en" target="_blank">
         <FaTwitter className="text-2xl hover:text-[#8fb0ae] cursor-pointer" />
         </a>
          <a href="https://www.instagram.com/accounts/suspended/?next=https%3A%2F%2Fwww.instagram.com%2F%3F__coig_ufac%3D1#" target="_blank"><FaInstagram className="text-2xl hover:text-[#8fb0ae] cursor-pointer" /></a>
        <a target="_blank" href="https://www.linkedin.com/in/mohi-bullah247/">  <FaLinkedin className="text-2xl hover:text-[#8fb0ae] cursor-pointer" /></a>
        </div>
      </div>

   
      <div className="border-t border-[#a8bdbc] mt-6 pt-4 text-center text-sm">
        <p>© {new Date().getFullYear()} Care Point ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
