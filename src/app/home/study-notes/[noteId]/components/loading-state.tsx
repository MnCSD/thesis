"use client";

import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

export function LoadingState() {
  return (
    <div className="bg-[#0F0F0F] w-full h-[100vh] overflow-hidden flex items-center justify-center">
      <ClimbingBoxLoader color="#55DC49" className="rotate-45" />
    </div>
  );
}
