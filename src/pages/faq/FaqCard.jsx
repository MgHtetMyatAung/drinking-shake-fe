import React, { useEffect, useState } from "react";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

const FaqCard = ({ data }) => {
  const [toggle, settoggle] = useState(false);

  return (
    <div
      className=" my-5 p-5 bg-white relative cursor-pointer "
      onClick={() => settoggle(!toggle)}
    >
      {toggle ? (
        <BiMinus className=" text-[20px] absolute top-5 right-5" />
      ) : (
        <BsPlus className=" text-[20px] absolute top-5 right-5" />
      )}

      <h2 className="font-medium">{data.title}</h2>
      <p
        className={`${
          toggle ? " block" : " hidden"
        } mt-3 transition-all duration-200 text-gray-500`}
      >
        {data.description}
      </p>
    </div>
  );
};

export default FaqCard;
