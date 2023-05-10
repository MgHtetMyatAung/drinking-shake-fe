import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardItem from "./CardItem";
import emptyImg from "../../assets/empty.gif";
import questionImg from "../../assets/question.gif";
import loginImg from "../../assets/login.gif";
import { useNavigate } from "react-router-dom";
import Toast from "../../components/toast/Toast";
import LoginToast from "../../components/toast/LoginToast";

const AddToCard = () => {
  const cards = useSelector((state) => state.cardList.card);
  const [show, setShow] = useState(false);
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const deleteAllItem = () => {
    setShow(true);
  };
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cards?.reduce((pv, cv) => pv + cv.price * cv.qty, 0));
  }, [cards]);

  const handleCheckout = () => {
    if (localStorage.getItem("user")){
    } else {
      setDisplay(true);
    }
  };

  return (
    <>
      <div className=" container mx-auto">
        {cards?.length > 0 ? (
          <div className=" grid grid-cols-1 lg:grid-cols-3 min-h-[60vh] gap-5">
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
            <div className=" bg-white shadow-lg p-5 mb-5 lg:mb-0">
              <h3 className=" text-lg font-semibold mb-3 lg:mt-5">
                Shopping Summary
              </h3>
              <table className=" w-full">
                <tbody>
                  <tr>
                    <td>Subtotal </td>
                    <td className=" text-end">$ {total.toFixed(2)}</td>
                  </tr>
                  <tr className=" border-b-2">
                    <td className="py-3">Estimated Tax </td>
                    <td className=" text-end">
                      $ {(total * (5 / 100)).toFixed(2)}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3">Total </td>
                    <td className=" text-end">
                      $ {(total + total * 0.05).toFixed(2)}
                    </td>
                  </tr>
                </tbody>
              </table>
              <button className="checkout-btn" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
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
      <Toast
        show={show}
        setShow={setShow}
        img={questionImg}
        dispatch={dispatch}
      />
      <LoginToast show={display} setShow={setDisplay} img={loginImg} />
    </>
  );
};

export default AddToCard;
