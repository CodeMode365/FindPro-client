"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoPlay from "embla-carousel-autoplay";
import GalleryCard from "./GalleryCard";

const GalleryCarousel = () => {
  return (
    <>
      <Carousel
        opts={{
          align: "start",
          loop: true,
          dragFree: false,
        }}
        className="w-full "
        plugins={[
          AutoPlay({ delay: 3000, jump: false, stopOnInteraction: false }),
        ]}
      >
        <CarouselContent className="">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <GalleryCard />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
};

export default GalleryCarousel;
