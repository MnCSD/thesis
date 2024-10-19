"use client";

import { TypeAnimation } from "react-type-animation";
import { Header } from "../components/header";
import Figure from "../images/teacher-3d.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-[#122316] to-[#101E13] pl-10">
      <Header />

      <div className="flex items-center w-full h-[calc(100%-51px)] ">
        <div className="flex flex-col items-center justify-center w-[50%]">
          <h1 className="text-6xl font-bold text-center uppercase font-sans text-white">
            Your Personalized AI Tutor,
          </h1>
          {/* <p className="text-6xl font-bold text-center uppercase font-sans text-[#55DC49]">
            Ready 24/7
          </p> */}
          <TypeAnimation
            sequence={[
              "Guiding You Step by Step",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "24/7",
              1000,
              "Tailored to Your Needs",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "3.35rem",
              display: "inline-block",
              color: "#55DC49",
              fontWeight: "bold",
              fontFamily: "sans-serif",
              textTransform: "uppercase",
            }}
            repeat={Infinity}
          />
        </div>

        <div className="flex flex-col items-start justify-end w-[50%]  h-full  ">
          <div className="relative">
            <Image src={Figure} alt="3D Teacher" width={700} height={700} />
            {/* make a cloudy above his head */}

            <div className="w-[350px] h-[200px] bg-white absolute top-[calc(100%-550px)] -right-[calc(100%-520px)] rounded-md border-[#55DC49] border">
              <div className="h-10 w-10  absolute left-[-20px] top-[50%] translate-y-[-50%] rotate-45 bg-white border-[#55DC49] border-l border-b" />
              <div className="w-4 h-4 border border-black rounded-full top-1 left-[6px] absolute" />
              <div className="h-[1px] w-full absolute left-0 top-[25px] translate-y-[-50%] bg-black " />
              <div className="h-[1px] w-full absolute left-0 top-[55px] translate-y-[-50%] bg-black " />
              <div className="h-[1px] w-full absolute left-0 top-[85px] translate-y-[-50%] bg-black " />
              <div className="h-[1px] w-full absolute left-0 top-[115px] translate-y-[-50%] bg-black " />
              <div className="h-[1px] w-full absolute left-0 top-[145px] translate-y-[-50%] bg-black " />
              <div className="h-[1px] w-full absolute left-0 top-[175px] translate-y-[-50%] bg-black " />
              <div className="w-[1px] h-full ml-7 bg-red-400 top-0 z-[999] absolute" />
              <div className="w-4 h-4 border border-black rounded-full top-[50%] translate-y-[-50%] left-[6px] absolute" />
              <div className="w-4 h-4 border border-black rounded-full bottom-[2px] left-[6px] absolute" />
              <div>
                {/* Example steps */}
                <div className="flex items-start flex-col font-bold text-gray-700 font-sans ml-8">
                  <div className="flex items-start flex-col  ml-2">
                    <span className="text-xl">Step 1:</span>
                    <span className="text-[#55DC49] text-3xl mt-[-2px]">
                      ···
                    </span>
                  </div>

                  <div className="flex items-start flex-col  ml-2 mt-[-4px]">
                    <span className="text-xl">Step 2:</span>
                    <span className="text-[#55DC49] text-3xl">···</span>
                  </div>

                  <div className="flex items-start flex-col  ml-2 mt-[-3px]">
                    <span className="text-xl">Step 3:</span>
                    <span className="text-[#55DC49] text-3xl">···</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
