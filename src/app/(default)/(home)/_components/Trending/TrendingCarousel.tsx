'use client'

import AutoPlay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TrendingCard from "./TrendingCard";

const TrendingCarousel = () => {
  const dummyProfessionals = [
    {
      id: 111,
      name: "John Doe",
      age: 34,
      address: "Kathmandu, Nepal",
      totalBookings: 34,
      rating: 4,
      image: "/assets/professionals/ps_1.webp",
      role: "Personal Trainer",
    },
    {
      id: 112,
      name: "John Doe",
      age: 34,
      address: "Kathmandu, Nepal",
      totalBookings: 34,
      rating: 4,
      image: "/assets/professionals/bill_1.webp",
      role: "Photographer",
    },
    {
      id: 113,
      name: "John Doe",
      age: 34,
      address: "Kathmandu, Nepal",
      totalBookings: 34,
      rating: 4,
      image: "/assets/professionals/blackman.webp",
      role: "Web developer",
    },
    {
      id: 114,
      name: "John Doe",
      age: 34,
      address: "Kathmandu, Nepal",
      totalBookings: 34,
      rating: 4,
      image: "/assets/professionals/hacker_1.webp",
      role: "Engineer",
    },
    {
      id: 115,
      name: "John Doe",
      age: 34,
      address: "Kathmandu, Nepal",
      totalBookings: 34,
      rating: 4,
      image: "/assets/professionals/twoP_1.webp",
      role: "Tutor",
    },
  ];

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
      plugins={[
        AutoPlay({ delay: 3000, jump: false, stopOnInteraction: false }),
      ]}
    >
      <CarouselContent>
        {dummyProfessionals.map((pro, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <TrendingCard {...pro} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="hidden lg:block">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
};

export default TrendingCarousel;
