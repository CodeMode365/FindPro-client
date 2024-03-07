import React from "react";
import ProCard from "./ProCard";

const Professionals = () => {
  return (
    <>
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={"item-no-" + i}>
          <ProCard />
        </div>
      ))}
    </>
  );
};

export default Professionals;
