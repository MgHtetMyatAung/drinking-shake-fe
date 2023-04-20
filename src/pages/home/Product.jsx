import React from "react";
import oImg from "../../assets/o-img.png";
import gImg from "../../assets/g-img.png";
import yImg from "../../assets/y-img.png";
import ProductCard from "./ProductCard";

const data = [
  {
    id: 1,
    title: "Lemon iced Tea",
    price: 45.99,
    image: yImg,
    class: "bg-yellow",
  },
  {
    id: 2,
    title: "Green Tea",
    price: 30.99,
    image: gImg,
    class: "bg-green",
  },
  {
    id: 3,
    title: "Peach Iced Tea",
    price: 40.99,
    image: oImg,
    class: "bg-orange",
    },
    {
        id: 4,
        title: "Lemon iced Tea",
        price: 45.99,
        image: yImg,
        class: "bg-yellow",
      },
      {
        id: 5,
        title: "Green Tea",
        price: 30.99,
        image: gImg,
        class: "bg-green",
      },
      {
        id: 6,
        title: "Peach Iced Tea",
        price: 40.99,
        image: oImg,
        class: "bg-orange",
      },
];
const Product = () => {
  return (
    <div className=" container mx-auto">
      <h3 className="p-head mb-12">Feature Product</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-20">
        {data.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
      <div className="text-center md:mt-10">
        <button className=" black-btn">See More</button>
      </div>
    </div>
  );
};

export default Product;
