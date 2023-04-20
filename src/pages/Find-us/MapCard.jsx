import React from "react";
import { TiLocation } from "react-icons/ti";

const MapCard = ({ item }) => {
  return (
    <div className=" text-center p-10 mb-5 lg:mb-0 bg-gray">
      <div className=" grid place-items-center mb-3">
        <TiLocation className=" text-[23px]"/>
      </div>
      <h3 className=" md:text-xl font-semibold py-2">{item.title}</h3>
      <h4 className=" md:text-xl font-medium pb-2">{item.time}</h4>
      <p className=" text-[14px] md:text-base">{item.address}</p>
    </div>
  );
};

export default MapCard;
