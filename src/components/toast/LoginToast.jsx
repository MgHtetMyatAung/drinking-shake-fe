import React, { useEffect } from "react";
import { removeAllCard } from "../../features/addToCardSlice";
import { useNavigate } from "react-router-dom";

const LoginToast = ({ show, setShow, img }) => {
    const navigate = useNavigate();
  useEffect(() => {
    document
      .getElementById("qtn-btn-group1")
      .addEventListener("click", (event) => {
        if (event.target.getAttribute("sure") == "yes-btn") {
          navigate('/login')
          setShow(false);
        } else {
          setShow(false);
        }
      });
  }, []);
  return (
    <div
      className={`${
        !show && "hidden"
      } fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-[#333333af] z-50`}
    >
      <div className=" py-5 px-7 bg-white rounded-lg">
        <img src={img} alt="" className=" h-[50px] mx-auto mb-3" />
        <p>Please login to your account !</p>
        <div className="flex justify-center gap-5 mt-5" id="qtn-btn-group1">
          <button
            className=" py-2 px-5 bg-green-600 rounded-md text-white text-sm"
            sure="yes-btn"
          >
            Login
          </button>
          <button
            className=" py-2 px-5 bg-red-600 rounded-md text-white text-sm"
            sure="no-btn"
          >
            Cancle
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginToast;
