"use client";
import React from "react";
import { ScaleLoader } from "react-spinners";

const LoadingUi = () => {
  return (
    <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center bg-gray-100">
      <ScaleLoader
        className="text-primary"
        color={"#0ea5e9"}
        loading={true}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default LoadingUi;
