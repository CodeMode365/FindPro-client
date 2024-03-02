import VerifiedBadge from "@/components/reusable/VerifiedBadge";
import { Button } from "@/components/ui/button";
import { Handshake, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

const Detailing = () => {
  return (
    <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <Image
          className="object-cover object-center rounded h-96 w-full transition cursor-pointer"
          alt="hero"
          height={320}
          width={900}
          src="/assets/security.webp"
        />
      </div>

      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <div>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            <span>Rajesh Hamal</span>
            <VerifiedBadge />
          </h1>
          <p className="mb-4 leading-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            perspiciatis tenetur voluptates voluptatum eum totam.
          </p>
        </div>

        <table className="mb-4">
          <tr>
            <th className="pr-4">Age</th>
            <td>: 22 years</td>
          </tr>
          <tr>
            <th className="pr-4">Address</th>
            <td>: Pokhara, Fewa lake</td>
          </tr>
          <tr>
            <th className="pr-4">Email</th>
            <td>: rajesh43hamal@gmail.com</td>
          </tr>
          <tr>
            <th className="pr-4">Highest Education</th>
            <td>: MBBS</td>
          </tr>
          <tr>
            <th className="pr-4">Member since</th>
            <td>: 2022</td>
          </tr>
        </table>

        <div className="flex justify-center">
          <Button className="mr-2">
            <Handshake size={20} className="mr-2" />
            <span>Hire now</span>
          </Button>
          <Button
            className="mx-2 text-primary border-primary hover:text-primary/80"
            variant={"outline"}
          >
            <Phone size={20} className="mr-2" />
            <span>Call now</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Detailing;
