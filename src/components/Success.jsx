import React from "react";
import "./Success.css";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="flex flex-col min-h-screen items-center  bg-[#fff]">
      <svg
        className="checkmark mt-20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 52 52"
      >
        <circle
          className="checkmark__circle"
          cx="26"
          cy="26"
          r="25"
          fill="none"
        />
        <path
          className="checkmark__check"
          fill="none"
          d="M14.1 27.2l7.1 7.2 16.7-16.8"
        />
      </svg>
      <Link to={"/"}>
        <button className="px-6 -mt-16 py-3 bg-[#EB5B00] hover:scale-105 transition delay-150 mb-3 text-white rounded-md font-bold">
          Go Home
        </button>
      </Link>
      <h2 className="text-4xl text-[#282c3f] font-bold tracking-tight">
        Order Placed Successfully
      </h2>
    </div>
  );
};

export default Success;
