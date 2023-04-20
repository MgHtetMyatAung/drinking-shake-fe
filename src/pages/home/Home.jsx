import React from "react";
import headImg from "../../assets/head-img.png";
import { AiFillStar } from "react-icons/ai";
import cafeLogo from "../../assets/cafe-logo.png";
import Product from "./Product";
import New from "./New";
import Discount from "./Discount";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="flex flex-col-reverse lg:flex-row">
          <div className=" lg:w-1/2 home-left">
            <h3 className="heading-1">
              The new classic <span className=" text-orange">Iced Tea</span>
            </h3>
            <p className="mt-5">
              A better-for-you, gut-healthy iced tea made with prebiotics, lots
              of flavor, and way less sugar. Just refreshment with benefits.
            </p>
            <div className="mt-10">
              <button className="black-btn ">Shop Now</button>
              <button className=" ghost-btn ">Get 10% Off</button>
            </div>
          </div>
          <div className=" lg:w-1/2 home-right relative">
            <img
              src={cafeLogo}
              alt="cafe logo"
              className=" absolute top-[15%] right-[5%] w-[50px] md:w-[70px] z-[-1] animate-bounce"
            />
            <img src={headImg} alt="head img" className="w-full z-0" />
            <div className=" absolute top-[48%] md:top-[55%] md:left-[10%] max-w-[180px] md:max-w-[220px] rounded-lg shadow bg-white p-3 z-[0]">
              <div className=" flex gap-2">
                <AiFillStar className=" text-[15px] md:text-[25px]" />
                <AiFillStar className=" text-[15px] md:text-[20px]" />
                <AiFillStar className=" text-[15px] md:text-[20px]" />
                <AiFillStar className=" text-[15px] md:text-[20px]" />
                <AiFillStar className=" text-[15px] md:text-[20px]" />
              </div>
              <p className=" text-gray-500 text-[10px] md:text-sm mt-3">
                4.9 out of 5 Overall Star Rating for All Local Business.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Product />
      <New />
      <Discount/>
    </>
  );
};

export default Home;
