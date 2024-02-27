"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { FC } from "react";

const pros = [
  "Photographer",
  "Videographer",
  "Graphic Designer",
  "Web Developer",
  "Digital Marketer",
  "Content Writer",
  "Event Planner",
  "Makeup Artist",
  "Hair Stylist",
  "Personal Trainer",
  "Tutor",
  "Interior Designer",
  "Home Services",
  "Legal Professional",
  "Financial Consultant",
];

const Content = () => {
  return (
    <CarouselContent>
      {pros.map((pro, index) => (
        <CarouselItem key={index} className="max-w-max cursor-pointer">
          <div className="p-1 ">
            <Card className="h-14 px-4 border-primary/30 shadow-xl flex  hover:bg-primary hover:text-white transition-all delay-100">
              <div className="h-full w-full flex items-center justify-center pt-auto">
                <h2 className="text-sm text-center font-semibold ">{pro}</h2>
              </div>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
  );
};

interface iProps {
  direction: "forward" | "backward";
  speed?: number;
}

const Categories: FC<iProps> = ({ direction, speed }) => {
  const carouselOptions: any = {
    loop: true,
    dragFree: false,
    startIndex: pros.length,
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
        <Content />
      </Carousel>
    </>
  );
};

export default Categories;
