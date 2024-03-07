import React from "react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section className="text-gray-600 body-font lg:-translate-y-1/2 px-8 lg:-mb-[15%]">
      <div className="container px-5 py-4 mx-auto">
        <div className="flex flex-wrap -m-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div className="p-4 lg:w-1/3" key={"branches-" + i}>
              <FeatureCard />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
