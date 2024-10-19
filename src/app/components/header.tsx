import Image from "next/image";
import React from "react";
import Logo from "../images/logo.png";

export const Header = () => {
  return (
    <div className="w-full pt-2">
      <div className="flex items-center justify-between pr-10">
        <div className="flex items-center space-x-2">
          <Image src={Logo} alt="Tutorly Logo" width={50} height={50} />
          <span className="text-[18px] font-bold uppercase mt-[2px] text-white">
            Tutorly
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <button className="px-4 py-1 bg-transparent border border-[#55DC49] text-[#55DC49] font-semibold rounded-md">
            Login
          </button>
          <button className="px-4 py-1 bg-[#55DC49] rounded-md font-bold text-black">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};
