import React, { useEffect } from "react";
import { removeAllCard } from "../../features/addToCardSlice";

const Toast = ({ show, setShow,img,dispatch }) => {
  useEffect(() => {
    document
      .getElementById("qtn-btn-group")
      .addEventListener("click", (event) => {
        if (event.target.getAttribute("sure") == "yes-btn") {
          dispatch(removeAllCard());
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
        <img src={img} alt="" className=" h-[100px] mx-auto" />
        <p>Are you sure to delete all ?</p>
        <div className="flex justify-center gap-5 mt-5" id="qtn-btn-group">
          <button
            className=" py-2 px-5 bg-green-600 rounded-md text-white text-sm"
            sure="yes-btn"
          >
            Yes
          </button>
          <button
            className=" py-2 px-5 bg-red-600 rounded-md text-white text-sm"
            sure="no-btn"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toast;
