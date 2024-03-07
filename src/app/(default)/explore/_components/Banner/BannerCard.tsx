import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const BannerCard = () => {
  return (
    <div className="overflow-hidden w-full">
      <Card className="overflow-hidden">
        <CardContent className="h-60 aspect-auto p-0 relative">
          <Image
            className="lg:h-72 md:h-36 w-full object-cover object-center brightness-50"
            src="/assets/gold.webp"
            alt="blog"
            height={320}
            width={900}
          />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-3xl font-semibold text-white leading-8 md:leading-relaxed">
              <span className="text-primary">Advertise</span> your business
            </h1>
            <p className="text-gray-300 leading-5 md:leading-relaxed sm:text-sm text-md mb-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed at
              aperiam error corrupti eum autem nisi!
            </p>
            <Button variant={"outline"} className="bg-transparent text-white">
              <Link href={"/contact"} >
                Book now
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BannerCard;
