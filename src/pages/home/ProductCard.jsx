import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div className={`${item.class} rounded-xl p-5 relative mb-10 md:mb-auto group`}>
      <h5 className=" font-medium">Limited Edition</h5>
      <h4 className=" text-xl md:text-2xl font-semibold">{item.title}</h4>
      <h3 className=" text-2xl md:text-3xl font-semibold mt-3">$45.99</h3>
      <button className="p-btn">Buy</button>
      <img
        src={item.image}
        alt=""
        className=" h-[130px] absolute top-7 right-5 drop-shadow-xl md:right-[-15px] group-hover:animate-bounce"
      />
    </div>
  );
};

export default ProductCard;
