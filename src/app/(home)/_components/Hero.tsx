import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <Image
              fill
              alt=""
              src="/assets/work.webp"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-24 flex flex-col items-center text-center md:text-left md:items-start">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Unlock Your Potential with{" "}
              <span className="text-primary">Experienced Professionals</span>
            </h2>

            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
              hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
              minus veniam tempora deserunt? Molestiae eius quidem quam
              repellat.
            </p>

            <Link
              href="/explore"
              className="mt-8 inline-block rounded bg-primary px-12 py-3 text-sm font-medium text-white transition hover:bg-primary/80"
            >
              Explore now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
