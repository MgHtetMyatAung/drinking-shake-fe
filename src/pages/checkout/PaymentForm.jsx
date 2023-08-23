import React, { useState } from "react";
import kbz from "../../assets/kbz.svg";
import wave from "../../assets/WaveMoney.png";
const PaymentForm = () => {
  const [payBank,setPayBank] =useState("kbz");
  return (
    <>
      <div className=" w-[100%]  space-y-5 md:space-y-0 md:grid gap-3">
        <div className="  flex flex-col gap-2">
          <label htmlFor="">Name</label>
          <input
            type="text"
            className="  border   bg-transparent shadow-sm p-2 lg:p-3 rounded-sm focus:border-blue-300"
          />
        </div>

        <div className="  flex flex-col gap-2">
          <label htmlFor="">Email </label>
          <input
            type="email"
            className="  border   bg-transparent shadow-sm p-2 lg:p-3 rounded-sm focus:border-blue-300"
          />
        </div>

        <div className="  md:flex   md:gap-3 items-center">
          <div className="  flex flex-col gap-2  md:flex-1">
            <label htmlFor="">PhoneNumber </label>
            <input
              type="tel"
              className="  border   bg-transparent shadow-sm p-2 md:p-3 rounded-sm focus:border-blue-300"
            />
          </div>
        </div>
      </div>

      <div className=" ">
        <h1 className=" text-xl font-medium my-5">Payment Method</h1>

        <div className="  border   bg-transparent shadow-sm p-4 rounded-sm focus:border-blue-300 ">
          <div className=" flex items-center gap-3">
            <input type="checkbox" />
            <span>Credit Card</span>
          </div>
        </div>

        {/* card number  */}
        <div className="  flex flex-col gap-2  my-5">
          <label htmlFor="">Card Number </label>
          <input
            type="tel"
            className="  border   bg-transparent shadow-sm p-3 rounded-sm focus:border-blue-300"
            placeholder="XXX  XXX XXX"
          />
        </div>

        {/* kbz or payapal */}
        <div className="  border   bg-transparent shadow-sm p-4 rounded-sm focus:border-blue-300  flex justify-between items-center">
          <div className=" flex items-center gap-3">
            <input type={payBank && "checkbox"} />
            <span>KBZ Bank </span>
          </div>

          <img
            src={kbz}
            alt="kbz logo"
            className=" w-8 h-8 md:w-12 md:h-12 object-cover"
          />
        </div>

        {/* wave  */}
        <div className="  border   bg-transparent shadow-sm p-4 rounded-sm focus:border-blue-300  flex justify-between items-center my-5">
          <div className=" flex items-center gap-3">
            <input type={payBank  && "checkbox"} />
            <span>WayMoney </span>
          </div>

          <img
            src={wave}
            alt="kbz logo"
            className="w-8 h-8 md:w-12 md:h-12 object-cover"
          />
        </div>

        <button className="  py-3 border  text-center bg-violet-500/10 shadow-md w-[100%] rounded-md">
          Continue
        </button>
      </div>
    </>
  );
};

export default PaymentForm;
