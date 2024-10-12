import Image from "next/image";
import React from "react";
import Logo from "../images/logo.png";

export const Header = () => {
  return (
    <div className="w-full pt-2">
      <div className="flex items-center space-x-2">
        <Image src={Logo} alt="Tutorly Logo" width={50} height={50} />
        <span className="text-[18px] font-bold uppercase mt-[2px]">
          Tutorly
        </span>
      </div>
    </div>
  );
};
