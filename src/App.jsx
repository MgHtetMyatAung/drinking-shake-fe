import React, { useEffect, useRef, useState } from "react";
import Routes from "./routes/Routes";
import { useNavigate } from "react-router-dom";
import { mobileSliderRoute, tabletSliderRoute } from "./routes/sliderRoutes";

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
    if (screenWidth < 650) {
      const threshold = screenWidth / 5;

      if (currentX < -threshold && position < mobileSliderRoute.length - 1) {
        setPosition((prevPosition) => prevPosition + 1);
        navigate(mobileSliderRoute[position + 1].path);
      } else if (currentX > threshold && position > 0) {
        setPosition((prevPosition) => prevPosition - 1);
        navigate(mobileSliderRoute[position - 1].path);
      }
    } else {
      const threshold = screenWidth / 5;

      if (currentX < -threshold && position < tabletSliderRoute.length - 1) {
        setPosition((prevPosition) => prevPosition + 1);
        navigate(tabletSliderRoute[position + 1].path);
      } else if (currentX > threshold && position > 0) {
        setPosition((prevPosition) => prevPosition - 1);
        navigate(tabletSliderRoute[position - 1].path);
      }
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
