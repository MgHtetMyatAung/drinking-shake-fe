import React from "react";

import Banner1 from "../../assets/banner1.jpg";
import Banner2 from "../../assets/banner2.jpg";
import Banner3 from "../../assets/banner3.jpg";
import Banner4 from "../../assets/banner4.jpg";

import { HiOutlineChevronRight } from "react-icons/hi";
import { FaAngleLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const banners = [
  {
    id: 1,
    image: Banner1,
  },
  {
    id: 2,
    image: Banner2,
  },
  {
    id: 3,
    image: Banner3,
  },
  {
    id: 4,
    image: Banner4,
  },
];

const Banner = () => {
  return (
    <div className=" container mx-auto py-[30px] mb-[60px]">
      <h3 className="p-head mb-9">Promotion Programs</h3>
      <Swiper
        spaceBetween={20} // Adjust the space between slides
        slidesPerView={3} // Number of slides per view
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        noSwiping={true}
        breakpoints={{
          // Define responsive breakpoints
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <img src={banner.image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
