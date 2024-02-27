import React from "react";
import ProCard from "./ProCard";


const Professionals = () => {
  return (
    <>
      {Array.from({ length: 8 }).map((_, i) => (
        <React.Fragment key={"item-no-" + i}>
          <ProCard />
        </React.Fragment>
      ))}
    </>
  );
};

export default Professionals;
