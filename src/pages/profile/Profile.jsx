import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import userImg from "../../assets/user.jpg";
import { FaRegEdit } from "react-icons/fa";

const Profile = () => {
  const navigate = useNavigate();
  const [photo, setPhoto] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));
  const loginData = JSON.parse(localStorage.getItem("login_data"));
  const userPhoto = JSON.parse(localStorage.getItem("user_photo"));
  const inputRef = useRef(null);
  const handleUpload = (event) => {
    const file = event.target.files[0];
    localStorage.setItem(
      "user_photo",
      JSON.stringify(URL.createObjectURL(file))
    );
    setPhoto(URL.createObjectURL(file));
  };
  return (
    <div className="animate__animated animate__fadeIn">
      {loginData ? (
        <div className="min-h-[90vh] flex flex-col justify-center items-center">
          <div className=" relative">
            <img
              src={photo || userImg}
              alt="user-img"
              className="w-[110px] h-[110px] rounded-full mb-3"
            />
            <FaRegEdit
              size={20}
              className=" absolute right-[-8px] bottom-3 cursor-pointer text-gray-500"
              onClick={() => inputRef.current.click()}
            />
          </div>
          <div className=" text-center">
            <p className=" text-xl font-semibold">{user?.name}</p>
            <p className="mt-3">{user?.email}</p>
          </div>
          <button
            onClick={() => {
              localStorage.removeItem("login_data");
              window.location.reload();
            }}
            className="w-[50%] md:w-fit px-10 block mx-auto py-2 bg-[#333] text-white mt-5 transition-all active:scale-95 duration-200 rounded-full"
          >
            Logout
          </button>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className=" hidden"
            onChange={handleUpload}
          />
        </div>
      ) : (
        <div className="min-h-[60vh] flex justify-center items-center">
          <div className="p-5 shadow">
            <p className=" text-red-500">Login to your account !</p>
            <button
              onClick={() => navigate("/login")}
              className=" w-full py-2 bg-[#333] text-white mt-5 transition-all active:scale-95 duration-200 rounded-full"
            >
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
