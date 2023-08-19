import React from 'react'
import kbz from "../../assets/kbz.svg";
import wave from "../../assets/WaveMoney.png"
const PaymentForm = () => {
  return (
    <>
        <div className=" w-[100%]  space-y-5 md:space-y-0 md:grid gap-3">
            <div className=" grid   lg:grid-cols-2 gap-3 ">
              <div className="  flex flex-col gap-2">
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  className="  border   bg-transparent shadow-md p-2 lg:p-3 rounded-sm focus:border-blue-300"
                />
              </div>
              <div className="  flex flex-col gap-2">
                <label htmlFor="">Last Name</label>
                <input
                  type="text"
                  className="  border   bg-transparent shadow-md p-2 lg:p-3 rounded-sm focus:border-blue-300"
                />
              </div>
            </div>

            <div className="  flex flex-col gap-2">
              <label htmlFor="">Email </label>
              <input
                type="email"
                className="  border   bg-transparent shadow-md p-2 lg:p-3 rounded-sm focus:border-blue-300"
              />
            </div>

            <div className="  md:flex   md:gap-3 items-center">
              <select
                name=""
                id=""
                className=" p-3 border border-gray-200 rounded-md  w-full my-3 md:mt-8 md:w-auto md:my-0"
              >
                <option className="  md:p-3">USA</option>
                <option className="  md:p-3">USA</option>
              </select>

              <div className="  flex flex-col gap-2  md:flex-1">
                <label htmlFor="">PhoneNumber </label>
                <input
                  type="tel"
                  className="  border   bg-transparent shadow-md p-2 md:p-3 rounded-sm focus:border-blue-300"
                />
              </div>
            </div>
          </div>

          <div className=" ">
            <h1 className=" text-xl font-medium my-5">Payment Method</h1>

            <div className="  border   bg-transparent shadow-md p-4 rounded-sm focus:border-blue-300 ">
              <div className=" flex items-center gap-3">
                <input type="checkbox" />
                <span>Credit Card</span>
              </div>
            </div>

            {/* cad month years  code */}
            <div className=" grid md:grid-cols-3 gap-3 md:my-3">
              <select
                name=""
                id=""
                className=" px-5 py-3 border border-gray-200 rounded-md mt-8 "
              >
                <option value="">Month</option>
                <option value="">Jan</option>
                <option value="">Feb</option>
              </select>

              <select
                name=""
                id=""
                className=" px-5 py-3 border border-gray-200 rounded-md mt-8 "
              >
                <option value="">Year</option>
                <option value="">Jan</option>
                <option value="">Feb</option>
              </select>

              <div className="  flex flex-col gap-2 flex-1">
                <label htmlFor="">Security Code </label>
                <input
                  type="tel"
                  className="  border   bg-transparent shadow-md p-3 rounded-sm focus:border-blue-300"
                  placeholder="Three Digital"
                />
              </div>
            </div>

            {/* card number  */}
            <div className="  flex flex-col gap-2  my-5">
              <label htmlFor="">Card Number </label>
              <input
                type="tel"
                className="  border   bg-transparent shadow-md p-3 rounded-sm focus:border-blue-300"
                placeholder="XXX  XXX XXX"
              />
            </div>

            {/* kbz or payapal */}
            <div className="  border   bg-transparent shadow-md p-4 rounded-sm focus:border-blue-300  flex justify-between items-center">
              <div className=" flex items-center gap-3">
                <input type="checkbox" />
                <span>KBZ Bank </span>
              </div>
              
                     <img src={kbz} alt="kbz logo"  className=" w-8 h-8 md:w-12 md:h-12 object-cover"/>
            
            </div>

            {/* wave  */}
            <div className="  border   bg-transparent shadow-md p-4 rounded-sm focus:border-blue-300  flex justify-between items-center my-5">
              <div className=" flex items-center gap-3">
                <input type="checkbox" />
                <span>WayMoney </span>
              </div>
              
                     <img src={wave} alt="kbz logo"  className="w-8 h-8 md:w-12 md:h-12 object-cover"/>
            
            </div>

           
            <button className="  py-3 border  text-center bg-violet-500/10 shadow-md w-[100%] rounded-md">Continue</button>
         
          </div>
    </>
  )
}

export default PaymentForm
