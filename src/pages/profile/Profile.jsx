import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="min-h-[60vh] flex justify-center items-center">
        <div className="p-5 shadow">
          <p className=" text-red-500">Login to your account !</p>
          <button onClick={()=>navigate('/login')} className=" w-full py-2 bg-[#333] text-white mt-5 transition-all active:scale-95 duration-200 rounded-full">Login</button>
        </div>
      </div>
    </>
  );
};

export default Profile;
