import React from "react";
import FaqCard from "./FaqCard";

const productDatas = [
  {
    id: 1,
    title: "What is Discount Shop?",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    id: 2,
    title: "What is Discount Shop?",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    id: 3,
    title: "What is Discount Shop?",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    id: 4,
    title: "What is Discount Shop?",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    id: 5,
    title: "What is Discount Shop?",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
];

const otherDatas = [
  {
    id: 1,
    title: "What is Discount Shop?",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    id: 2,
    title: "What is Discount Shop?",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    id: 3,
    title: "What is Discount Shop?",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    id: 4,
    title: "What is Discount Shop?",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    id: 5,
    title: "What is Discount Shop?",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
];

const Faq = () => {
  return (
    <div className=" container mx-auto bg-gray py-10 animate__animated animate__fadeIn">
      <h1 className=" text-2xl md:text-4xl font-bold text-center my-5 md:my-10">
        Frequently Asked Questions
      </h1>
      <div className="lg:mx-20 mt-10 md:mt-5">
        <h2 className=" text-lg md:text-2xl font-semibold">Product Questions</h2>
        {productDatas.map((data) => (
          <FaqCard key={data.id} data={data} />
        ))}
      </div>
      <div className="lg:mx-20 mt-16">
        <h2 className=" text-lg md:text-2xl font-semibold">Other Questions</h2>
        {otherDatas.map((data) => (
          <FaqCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
