import React from "react";
import { PulseLoader, RotateLoader } from "react-spinners";

const loading = () => {
  return (
    <div className="h-[80vh] w-full flex items-center justify-center">
      <div className="animate-pulse">
        <RotateLoader
          className="text-primary animate-ping"
          color={"#0ea5e9"}
          size={10}
          loading={true}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
};

export default loading;
