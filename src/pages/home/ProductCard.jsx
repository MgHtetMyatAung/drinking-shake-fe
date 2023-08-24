import React from "react";
import { useDispatch } from "react-redux";
import { addCard } from "../../features/addToCardSlice";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={`${item.class} rounded-xl p-5 relative mb-10 md:mb-auto group overflow-hidden shadow-lg`}
    >
      <h5 className=" font-medium">Limited Edition</h5>
      <h4 className=" text-xl md:text-2xl font-semibold">{item.title}</h4>
      <h3 className=" text-2xl md:text-3xl font-semibold mt-3">
        ${item.price}
      </h3>
      <button className="p-btn" onClick={() => dispatch(addCard(item))}>
        Buy
      </button>
      <img
        src={item.image}
        alt=""
        className=" h-[130px] absolute top-7 right-5 drop-shadow-xl group-hover:animate-bounce z-20"
      />
      <div className=" w-[400px] h-[400px] rounded-full bg-[#edecec] absolute top-[-60%] right-[-80%] md:right-[-90%] lg:right-[-65%]">
        <div className=" h-[40px] bg-red-500"></div>
      </div>
    </div>
  );
};

export default ProductCard;
