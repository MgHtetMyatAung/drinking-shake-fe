import React from "react";
import newImg1 from "../../assets/new-1.png";
import newImg2 from "../../assets/new-2.png";
import NewCard from "./NewCard";

const data = [
  {
    id: 1,
    title: "How it started ...",
    desc: "Overworked & overstressed, co-founder Ulcerative Colitis - a lifelong digestive disease at just 18 years old. After losing 80 lbs, he and bff Mike started looking for fun ways to improve their gut health and overall health, too.",
    image: newImg1,
  },
  {
    id: 2,
    title: "How if's going ...",
    desc: "Find us in over 1200 retailers, including Target and Publix to name a few! And we're just getting started. We're on a mission to create a new generation of iced tea.",
    image: newImg2,
  },
];
const New = () => {
  return (
    <div className=" container mx-auto py-10">
      <h3 className="p-head mb-12">
        Latest News from <span className=" text-orange">Discount Shop</span>
      </h3>
      <div className=" grid grid-cols-1">
        {data.map((item) => (
          <NewCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default New;
