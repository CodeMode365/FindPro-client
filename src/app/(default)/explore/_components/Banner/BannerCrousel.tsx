"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoPlay from "embla-carousel-autoplay";
import BannerCard from "./BannerCard";

const BannerCarousel = () => {
  return (
    <Carousel
      className="rounded-md shaodw-lg"
      plugins={[
        AutoPlay({ delay: 3000, jump: false, stopOnInteraction: false }),
      ]}
    >
      <CarouselContent className="w-ful">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="w-full">
            <BannerCard />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default BannerCarousel;
