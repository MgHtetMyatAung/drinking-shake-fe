import React from "react";
import { IoMdMail } from "react-icons/io";
import FormSelect from "./FormSelect";

const Discount = () => {
  return (
    <div className=" bg-gray py-10">
      <div className=" container mx-auto py-5">
        <div className="max-w-[500px] mx-auto">
          <div className=" icon-box">
            <IoMdMail className=" text-[20px]" />
          </div>
          <h3 className=" text-xl md:text-4xl font-semibold my-5 text-center">
            Get 25% Discount in our shop
          </h3>
          <p className=" text-center text-sm md:text-base">
            Sign up for exclusive discounts, limited edition drops, updates, and
            more exclusive perks. Never spammy, always chill.{" "}
          </p>
          <div className="mt-7">
            <input
              type="email"
              className="email-input"
              placeholder="Enter your email address"
            />
            <div className="flex flex-col md:flex-row justify-between md:items-center mt-5">
              <FormSelect />
              <button className="sign-btn">Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
