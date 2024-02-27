"use client";

import * as React from "react";
import AutoPlay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

import Image from "next/image";
import { Briefcase, Check, Star } from "lucide-react";

const Trending = () => {
  const dummyProfessionals = [
    {
      id: 111,
      name: "John Doe",
      age: 34,
      address: "Kathmandu, Nepal",
      totalBookings: 34,
      rating: 4,
      image: "/assets/professionals/ps_1.jpeg",
      role: "Personal Trainer",
    },
    {
      id: 112,
      name: "John Doe",
      age: 34,
      address: "Kathmandu, Nepal",
      totalBookings: 34,
      rating: 4,
      image: "/assets/professionals/bill_1.jpeg",
      role: "Photographer",
    },
    {
      id: 113,
      name: "John Doe",
      age: 34,
      address: "Kathmandu, Nepal",
      totalBookings: 34,
      rating: 4,
      image: "/assets/professionals/blackman.jpg",
      role: "Web developer",
    },
    {
      id: 114,
      name: "John Doe",
      age: 34,
      address: "Kathmandu, Nepal",
      totalBookings: 34,
      rating: 4,
      image: "/assets/professionals/hacker_1.jpeg",
      role: "Engineer",
    },
    {
      id: 115,
      name: "John Doe",
      age: 34,
      address: "Kathmandu, Nepal",
      totalBookings: 34,
      rating: 4,
      image: "/assets/professionals/twoP_1.jpeg",
      role: "Tutor",
    },
  ];

  return (
    <>
      <div className="mx-auto max-w-lg text-center mb-4">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Trending <span className="text-primary">Professionals</span>
        </h2>

        <p className="mt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
          aliquam doloribus nesciunt eos fugiat.
        </p>
      </div>

      <div className="mb-4 w-11/12 mx-auto">
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
                  <Card>
                    {
                      /* <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent> */
                      <a
                        href="#"
                        className="block rounded-lg p-4 shadow-sm shadow-indigo-100"
                      >
                        {/* <img
                          alt=""
                          src={pro.image}
                          className="h-56 w-full rounded-md object-cover hover:scale-105 transition-all"
                        /> */}
                        <Image
                          alt={pro.name}
                          src={pro.image}
                          height={56}
                          width={100}
                          className="h-[18rem] w-full rounded-md object-cover hover:scale-105"
                        />

                        <div className="mt-2">
                          <dl>
                            <div>
                              <dt className="sr-only">Role</dt>
                              <dd className="text-sm text-gray-500">
                                <Badge>{pro.role}</Badge>
                              </dd>
                            </div>

                            <div className="flex items-baseline justify-between mt-2 -mb-2">
                              <span className="">
                                <dt className="sr-only">Name</dt>
                                <dd className="font-medium">{pro.name}</dd>
                              </span>

                              <span className="text-sm text-gray-500">
                                <dt className="sr-only">Address</dt>
                                <dd className="font-medium">{pro.address}</dd>
                              </span>
                            </div>
                          </dl>

                          <div className="mt-6 flex items-center gap-8 text-xs">
                            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                              <Check className="text-primary" />

                              <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Completed</p>

                                <p className="font-medium">34 jobs</p>
                              </div>
                            </div>

                            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                              <Briefcase className="text-primary" />

                              <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Experience</p>

                                <p className="font-medium">4 years</p>
                              </div>
                            </div>

                            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                              <Star className="text-primary" />

                              <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Ratings</p>

                                <p className="font-medium">4.5 stars</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    }
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};

export default Trending;
