import React from "react";
import PaymentForm from "./PaymentForm";
import OrderCheckout from "./OrderCheckout";

const CheckOut = () => {
  return (
    <div className=" container mx-auto my-10 ">
      <div className=" bg-gray-50 p-5 shadow-md">
        <h2 className=" text-xl mb-3 font-medium">Billing Details</h2>

        <div className=" space-y-5 md:space-y-0 lg:flex  lg:justify-between  lg:space-y-0">
          <div className="  md:max-w-xl md:mx-auto lg:mx-0 lg:w-6/12">
            <PaymentForm />
          </div>

          <div className=" lg:w-5/12  md:px-5">
            <h1 className="  font-medium my-5 text-2xl">Your Order</h1>

           <OrderCheckout />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
