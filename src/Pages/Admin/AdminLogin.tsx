import React from "react";
import Login from "../../Component/Admin/AdminLogin/Login";
import backgroundImage from "/rainbow-vortex.png";

export default function AdminLogin() {
  return (
    <div className={`flex justify-center items-center w-full h-full`}>
      <img
        src={backgroundImage}
        alt="bg"
        className="w-[100vw] h-[100vh] object-cover relative"
      />
    <Login />
    </div>
  );
}
