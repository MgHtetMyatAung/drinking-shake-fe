import React from "react";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { addQty, decreaseQty, removeCard } from "../../features/addToCardSlice";

const CardItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <tr className=" bg-white shadow-lg relative">
      <td className=" max-w-[100px] md:w-auto">
        <div className="flex items-center gap-3 md:gap-5 p-3">
          <img src={item.image} alt="" className=" h-[60px] md:h-[70px]" />
          <p className=" font-medium text-sm md:text-base">{item.title}</p>
        </div>
      </td>
      <td className=" text-center">
        <p className=" md:hidden text-start mb-3 text-sm md:text-base">
          $ {(item.price * item.qty).toFixed(2)}
        </p>
        <div className="flex">
          <button
            className="qty-btn"
            onClick={() => item.qty > 1 && dispatch(decreaseQty(item))}
          >
            <BiMinus />
          </button>
          <p className="w-[30px]">{item.qty}</p>
          <button className="qty-btn" onClick={() => dispatch(addQty(item))}>
            <BsPlus />
          </button>
        </div>
      </td>
      <td className=" text-center">
        <p className=" hidden md:block text-sm md:text-base">
          $ {(item.price * item.qty).toFixed(2)}
        </p>
      </td>
      <td className=" text-center">
        <div
          className=" cursor-pointer"
          onClick={() => dispatch(removeCard(item))}
        >
          <RxCross2 className=" absolute md:static top-3 md:top-0 right-3 md:right-0 md:mx-auto" />
        </div>
      </td>
    </tr>
  );
};

export default CardItem;
