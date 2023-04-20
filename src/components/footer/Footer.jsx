import React from "react";
import logoImg from "../../assets/logo-star.png";
import { FaFacebookF, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" py-20 bg-gray-700 text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 lg:gap-5">
        <div className=" ">
          <div className=" flex gap-3 items-center">
            <img src={logoImg} alt="logo star" className="" />
            <h3 className=" font-playFair text-xl font-bold">Discount Shop</h3>
          </div>
          <p className=" text-sm text-gray-300 my-5">
            Discount shop iced tea tastes great and makes it easier to get more
            essential prebiotic fiber in your day
          </p>
          <div className="">
            <p className=" font-semibold mt-3">Follow Us</p>
            <div className=" flex gap-5 items-center mt-5 text-orange-400">
              <FaTwitter className=" text-[18px]" />
              <FaInstagram className=" text-[18px]" />
              <FaFacebookF className=" text-[18px]" />
              <FaGoogle className=" text-[18px]" />
            </div>
          </div>
        </div>
        <div className=" ">
          <h4 className=" text-xl font-medium">Home</h4>
          <ul className=" text-gray-300 mt-3 flex flex-col gap-2">
            <li>Shop</li>
            <li>FAQ</li>
            <li>Wholesale</li>
          </ul>
        </div>
        <div className=" ">
          <h4 className=" text-xl font-medium">About Us</h4>
          <ul className=" text-gray-300 mt-3 flex flex-col gap-2">
            <li>Shop</li>
            <li>FAQ</li>
            <li>Wholesale</li>
          </ul>
        </div>
        <div className="">
          <h4 className="text-xl font-medium">Let’s Keep In Touch</h4>
          <p className=" text-sm text-gray-300 mt-3">
            The ingredients in the Discount Shop drink truly are beneficial for
            gut health.
          </p>
          <input type="email" placeholder="Your email" className=" text-sm py-3 border-b-[1px] border-gray-500 w-full focus-visible:outline-none bg-transparent" />
          <button className="sub-btn">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
