import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BsFillHandbagFill } from "react-icons/bs";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { FaMapMarkerAlt, FaUserCircle } from "react-icons/fa";
import { AiFillShop } from "react-icons/ai";
import starLogo from "../../assets/logo-star.png";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const cards = useSelector((state) => state.cardList.card);
  return (
    <>
      <div className="container mx-auto md:hidden flex gap-3 pt-3">
        <img src={starLogo} alt="star-logo" className="" />
        <span className="logo-text font-bold">Discount Shop</span>
      </div>
      <div className="header">
        <nav className="nav-bar">
          <div className="logo">
            <img src={starLogo} alt="star-logo" className="" />
            <span className="logo-text">Discount Shop</span>
          </div>
          <ul className="menu">
            <li className="menu-item">
              <NavLink to={"/"} className="menu-item-link">
                <AiFillShop className=" text-[23px]" />
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink to={"/find-us"} className="menu-item-link">
                <FaMapMarkerAlt className=" text-[20px]" />
              </NavLink>
            </li>
            <li className="menu-item">
              {" "}
              <NavLink to={"/faq"} className="menu-item-link">
                <MdOutlineQuestionAnswer className=" text-[23px]" />
              </NavLink>
            </li>
            <li
              className="menu-item relative cursor-pointer"
              onClick={() => navigate("/add-to-card")}
            >
              <NavLink to={"/add-to-card"} className="menu-item-link">
                <BsFillHandbagFill className=" text-[20px]" />
              </NavLink>
              {cards.length > 0 && (
                <>
                  <span className="animate-ping md:hidden bg-red-500 text-center px-1 min-w-[19px] min-h-[19px] md:px-2 rounded-full text-[9px] md:text-[11px] absolute top-2 right-[-5px] md:right-2"></span>
                  <span className=" bg-red-500 text-center text-white px-1 min-w-[19px] md:px-2 rounded-full text-[10px] md:text-[12px] absolute top-2 right-[-5px] md:right-2">
                    {cards.length}
                  </span>
                </>
              )}
            </li>
            <li className="menu-item md:hidden">
              <NavLink to={"/profile"} className="menu-item-link">
                <FaUserCircle className=" text-[23px]" />
              </NavLink>
            </li>
          </ul>
          <button className="black-btn hidden md:block">Account</button>
        </nav>
      </div>
    </>
  );
};

export default Header;
