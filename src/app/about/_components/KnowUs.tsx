import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const KnowUs = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto  px-5 py-10 relative">
        <div className="w-full h-[30rem]">
          <Image
            className="object-cover object-center rounded h-full w-full blur-md"
            alt="hero"
            src="/assets/blueish.jpg"
            height={700}
            width={600}
          />
        </div>
        <div className="16 flex flex-col  items-center justify-center text-center absolute top-1/2 lg:top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Get to <span className="text-primary">know Us</span>
          </h1>
          <p className="mb-8 text-white/80">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className="flex justify-center">
            <Button className="mx-2">Contact Us</Button>
            <Button
              variant={"outline"}
              className="border-primary text-primary hover:bg-gray-100 hover:text-primary mx-2"
            >
              Register now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowUs;
