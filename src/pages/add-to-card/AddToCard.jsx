import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CardItem from "./CardItem";
import emptyImg from "../../assets/empty.gif";
import { useNavigate } from "react-router-dom";
import { removeAllCard } from "../../features/addToCardSlice";

const AddToCard = () => {
  const cards = useSelector((state) => state.cardList.card);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className=" container mx-auto">
      {cards?.length > 0 ? (
        <div className=" grid grid-cols-1 lg:grid-cols-3 min-h-[60vh]">
          <div className=" lg:col-span-2 mb-10">
            <table className=" w-full py-5 border-separate border-spacing-y-3">
              <thead className="table-head">
                <tr className="">
                  <th className=" text-start p-5">Products</th>
                  <th className=" text-start">Quantity</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cards?.map((card, i) => (
                  <CardItem key={i} item={card} />
                ))}
              </tbody>
            </table>
            <button className=" del-btn" onClick={()=>dispatch(removeAllCard())}>Remove All</button>
          </div>
          <div className=""></div>
        </div>
      ) : (
        <div className=" min-h-[80vh] lg:min-h-[70vh] flex flex-col justify-center items-center">
          <img src={emptyImg} alt="" className=" w-[200px]" />
          <h3 className=" md:text-[20px]">Your cards is empty !</h3>
          <button className=" black-btn mt-3" onClick={() => navigate("/")}>
            Go to shop
          </button>
        </div>
      )}
    </div>
  );
};

export default AddToCard;
