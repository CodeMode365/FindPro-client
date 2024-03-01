import React from "react";
import CategoryCarousel from "../Categories/CategoryCarousel";

const Animated = () => {
  return (
    <div className="h-full w-full -rotate-[25deg]">
      <CategoryCarousel direction="forward" speed={0.3} />
      <CategoryCarousel direction="backward" speed={0.2} />
      <CategoryCarousel direction="forward" />
      <CategoryCarousel direction="backward" speed={0.6} />
      <CategoryCarousel direction="forward" speed={0.1} />
      <CategoryCarousel direction="backward" speed={0.4} />
      <CategoryCarousel direction="forward" speed={0.8} />
      <CategoryCarousel direction="backward" />
    </div>
  );
};

export default Animated;
