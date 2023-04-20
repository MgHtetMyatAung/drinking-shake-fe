import React from "react";
import { BsArrowRight } from "react-icons/bs";

const NewCard = ({ item }) => {
  return (
    <div className="flex flex-col md:flex-row gap-3 md:gap-10 mb-10">
      <img src={item.image} alt="new img 1" className=" w-full md:w-[300px] md:h-[200px] object-cover" />
      <div className=" relative">
        <h3 className=" font-medium md:font-semibold mb-2 md:text-lg">{item.title}</h3>
        <p className="mb-8 md:mb-0 text-gray-500 text-sm md:text-base">{item.desc}</p>
        <button className="absolute bottom-0 text-orange flex items-center gap-5 text-sm md:text-base">
          Continute reading <BsArrowRight />{" "}
        </button>
      </div>
    </div>
  );
};

export default NewCard;
