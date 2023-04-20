import React from "react";
import Discount from "../home/Discount";
import { BiSearchAlt2 } from "react-icons/bi";
import Map from "./Map";

const FindUs = () => {
  return (
    <>
      <div className=" lg:min-h-[50vh] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15277.662311522425!2d96.12541258651378!3d16.805727306179197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1eb46fd85e9eb%3A0xf8fce784abe0fff6!2sSanchaung%20Township%2C%20Yangon%2C%20Myanmar%20(Burma)!5e0!3m2!1sen!2ssg!4v1680864323549!5m2!1sen!2ssg"
          className=" w-full"
          height={450}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="flex items-center absolute top-[20%] md:top-[10%] right-[10%] bg-white rounded-lg overflow-hidden shadow-lg">
          <input
            type="text"
            placeholder="Type a passcode and address ..."
            className="px-3 py-2 text-sm bg-transparent focus-visible:outline-none min-w-[200px]"
          />
          <button className="p-2 bg-black text-white">
            <BiSearchAlt2 className=" text-[20px]" />
          </button>
        </div>
      </div>
      <Map/>
      <Discount />
    </>
  );
};

export default FindUs;
