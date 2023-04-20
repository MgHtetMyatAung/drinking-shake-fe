import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardItem from "./CardItem";
import emptyImg from "../../assets/empty.gif";
import questionImg from "../../assets/question.gif";
import { useNavigate } from "react-router-dom";
import { removeAllCard } from "../../features/addToCardSlice";

const AddToCard = () => {
  const cards = useSelector((state) => state.cardList.card);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const deleteAllItem = () => {
    setShow(true);
  };

  useEffect(() => {
    document.getElementById("qtn-btn-group").addEventListener('click', event => {
      if (event.target.getAttribute('sure') == 'yes-btn') {
        dispatch(removeAllCard());
        setShow(false);
      } else {
        setShow(false);
      }
    })
  },[])
  return (
    <>
      <div className=" container mx-auto">
        {cards?.length > 0 ? (
          <div className=" grid grid-cols-1 lg:grid-cols-3 min-h-[60vh]">
            <div className=" lg:col-span-2 mb-10">
              <table className=" w-full py-5 border-separate border-spacing-y-3">
                <thead className="table-head">
                  <tr className="">
                    <th className=" text-start p-5">Products</th>
                    <th className=" text-start">Quantity</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cards?.map((card, i) => (
                    <CardItem key={i} item={card} />
                  ))}
                </tbody>
              </table>
              <button className=" del-btn" onClick={deleteAllItem}>
                Remove All
              </button>
            </div>
            <div className=""></div>
          </div>
        ) : (
          <div className=" min-h-[80vh] lg:min-h-[70vh] flex flex-col justify-center items-center">
            <img src={emptyImg} alt="" className=" w-[200px]" />
            <h3 className=" md:text-[20px]">Your cards is empty !</h3>
            <button className=" black-btn mt-3" onClick={() => navigate("/")}>
              Go to shop
            </button>
          </div>
        )}
      </div>
      <div className={`${!show && 'hidden'} fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-[#333333af] z-50`}>
        <div className=" py-5 px-7 bg-white rounded-lg">
          <img src={questionImg} alt="" className=" h-[100px] mx-auto"/>
          <p>Are you sure to delete all ?</p>
          <div className="flex justify-center gap-5 mt-5" id="qtn-btn-group">
            <button className=" py-2 px-5 bg-green-600 rounded-md text-white text-sm" sure="yes-btn">Yes</button>
            <button className=" py-2 px-5 bg-red-600 rounded-md text-white text-sm" sure="no-btn">No</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToCard;
