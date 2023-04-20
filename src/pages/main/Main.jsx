import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Main = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname ? (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default Main;
