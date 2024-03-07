"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { FC } from "react";
import { dummyCategories } from "@/components/dummy/categories";
import CategoryCard from "./CategoryCard";

interface iProps {
  direction: "forward" | "backward";
  speed?: number;
}

const CategoryCarousel: FC<iProps> = ({ direction, speed }) => {
  const carouselOptions: any = {
    loop: true,
    dragFree: false,
    startIndex: dummyCategories.length,
  };
  const scrollOptions = {
    delay: 0,
    speed: speed ?? 0.5,
    stopOnInteraction: false,
  };

  return (
    <>
      <Carousel
        opts={carouselOptions}
        plugins={[AutoScroll({ ...scrollOptions, direction })]}
        className="w-full"
      >
        <CarouselContent>
          {dummyCategories.map((pro, index) => (
            <CarouselItem key={index} className="max-w-max cursor-pointer">
              <div className="p-1">
                <CategoryCard pro={pro} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
};

export default CategoryCarousel;
