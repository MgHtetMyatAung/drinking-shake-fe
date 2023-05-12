import React, { useEffect, useRef, useState } from "react";
import Routes from "./routes/Routes";
import Home from "./pages/home/Home";
import FindUs from "./pages/Find-us/FindUs";
import Faq from "./pages/faq/Faq";
import AddToCard from "./pages/add-to-card/AddToCard";
import Profile from "./pages/profile/Profile";
import { useNavigate } from "react-router-dom";

const sliderRoute = [
  {
    id: 1,
    path: "/",
    component: <Home className={"container animate__animated animate__fadeIn"} />,
  },
  {
    id: 2,
    path: "/find-us",
    component: <FindUs className={"container animate__animated animate__fadeIn"} />,
  },
  {
    id: 3,
    path: "/faq",
    component: <Faq className={"container animate__animated animate__fadeIn"} />,
  },
  {
    id: 4,
    path: "/add-to-card",
    component: <AddToCard className={"container animate__animated animate__fadeIn"} />,
  },
  {
    id: 5,
    path: "/profile",
    component: <Profile className={"container animate__animated animate__fadeIn"} />,
  },
];

const App = () => {
  const [position, setPosition] = useState(0);
  const sliderRef = useRef(null);
  const navigate = useNavigate();
  let startX = 0;
  let currentX = 0;

  const handleTouchStart = (event) => {
    startX = event.touches[0].clientX;
  };

  const handleTouchMove = (event) => {
    const diffX = event.touches[0].clientX - startX;
    currentX = position + diffX;
  };

  const handleTouchEnd = () => {
    const screenWidth = window.innerWidth;
    const threshold = screenWidth / 5;

    if (currentX < -threshold && position < sliderRoute.length - 1) {
      setPosition((prevPosition) => prevPosition + 1);
      navigate(sliderRoute[position + 1].path);
    } else if (currentX > threshold && position > 0) {
      setPosition((prevPosition) => prevPosition - 1);
      navigate(sliderRoute[position - 1].path);
    }
  };

  useEffect(() => {
    const sliderElement = sliderRef.current;
    sliderElement.addEventListener("touchstart", handleTouchStart);
    sliderElement.addEventListener("touchmove", handleTouchMove);
    sliderElement.addEventListener("touchend", handleTouchEnd);

    return () => {
      sliderElement.removeEventListener("touchstart", handleTouchStart);
      sliderElement.removeEventListener("touchmove", handleTouchMove);
      sliderElement.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleTouchStart, handleTouchMove, handleTouchEnd]);
  return (
    <div className="" ref={sliderRef}>
      <Routes />
    </div>
  );
};

export default App;
