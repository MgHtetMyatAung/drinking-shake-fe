import React from "react";
import oImg from "../../assets/o-img.png";
import gImg from "../../assets/g-img.png";
import yImg from "../../assets/y-img.png";
import sunkitImg from "../../assets/sunkit-img.png";
import firedImg from "../../assets/fired-img.png";
import carabaoImg from "../../assets/carabao-img.png";
import booImg from "../../assets/boo-img.png";
import lemonImg from "../../assets/lemon-img.png";
import magiImg from "../../assets/magi-img.png";
import maxImg from "../../assets/max-img.png";
import stbImg from "../../assets/stb-img.png";
import hypeImg from "../../assets/hype-img.png";
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
    price: 35,
    image: oImg,
    class: "bg-orange",
  },
  {
    id: 4,
    title: "Lemon iced Tea",
    price: 40.99,
    image: stbImg,
    class: "bg-yellow",
  },
  {
    id: 5,
    title: "Green Tea",
    price: 39,
    image: maxImg,
    class: "bg-green",
  },
  {
    id: 6,
    title: "Peach Iced Tea",
    price: 20.99,
    image: sunkitImg,
    class: "bg-orange",
  },
  {
    id: 7,
    title: "Peach Iced Tea",
    price: 39,
    image: hypeImg,
    class: "bg-yellow",
  },
  {
    id: 8,
    title: "Peach Iced Tea",
    price: 33,
    image: lemonImg,
    class: "bg-green",
  },
  {
    id: 9,
    title: "Peach Iced Tea",
    price: 28.76,
    image: magiImg,
    class: "bg-orange",
  },
];
const Product = ({ title }) => {
  return (
    <div className=" container mx-auto mb-[60px]">
      <h3 className="p-head mb-12">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-20">
        {data.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Product;
