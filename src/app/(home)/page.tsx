"use client";

import { TypeAnimation } from "react-type-animation";
import { Header } from "../components/header";
import Figure from "../images/teacher-3d.png";
import { useMediaQuery } from "usehooks-ts";
import Image from "next/image";

export default function Home() {
  const matches = useMediaQuery("(max-width: 1024px)");

  return (
    <div className="bg-main h-screen w-full">
      <Header />

      <div className="flex items-center lg:flex-row flex-col w-full h-[calc(100%-51px)] ">
        <div className="flex flex-col items-center justify-center lg:w-[50%] w-full h-[100%]">
          <h1 className="lg:text-6xl text-4xl font-bold text-center uppercase font-sans text-white">
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
              fontSize: matches ? "3.35rem" : "1.5rem",
              display: "inline-block",
              color: "#55DC49",
              fontWeight: "bold",
              fontFamily: "sans-serif",
              textTransform: "uppercase",
            }}
            repeat={Infinity}
          />
        </div>

        <div className="flex flex-col items-start justify-end w-[100%] md:w-[50%] h-full">
          <div className="relative">
            <Image
              src={Figure}
              alt="3D Teacher"
              className="lg:w-[600px] lg:h-[700px] md:-ml-10 lg:ml-0 w-full object-contain"
            />
            {/* make a cloudy above his head */}

            <div className="lg:w-[350px] lg:h-[200px] w-[250px] bg-white absolute top-[calc(100%-350px)] -right-[calc(100%-250px)] lg:top-[calc(100%-550px)] lg:-right-[calc(100%-300px)] rounded-md border-[#55DC49] border hidden md:block lg:hidden 2xl:block">
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
