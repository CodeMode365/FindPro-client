import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <Image
            className="h-full w-full object-cover object-center absolute m-0 left-0 top-0"
            src="/assets/blue_sky.webp"
            alt="blog"
            height={320}
            width={900}
          />

          <div className="bg-white/20 backdrop-brightness-[.7] backdrop-blur-md relative flex lg:flex-row flex-col py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-100 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1 text-gray-300 leading-5">
                Kathmandu, Boudha Street (Near Boudha Pipalbot), Nepal
              </p>
            </div>

            <div className="hidden lg:block">
              <Separator className="bg-gray-300" orientation="vertical" />
            </div>

            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-100 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-sky-400 leading-relaxed">example@email.com</a>
              <h2 className="title-font font-semibold text-gray-100 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed text-gray-300">123-456-7890</p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Leave a message
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Post-ironic portland shabby chic echo park, banjo fashion axe
          </p>
          <div className="relative mb-4">
            <Label htmlFor="name" className="leading-7 text-md text-gray-600">
              Name
            </Label>
            <Input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="relative mb-4">
            <Label htmlFor="email" className="leading-7 text-md text-gray-600">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="relative mb-4">
            <Label
              htmlFor="message"
              className="leading-7 text-md text-gray-600"
            >
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></Textarea>
          </div>
          <button className="text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-primary rounded text-lg flex items-center justify-center">
            <span className="mx-1">Message</span>
          </button>
        </div>
      </div>
    </section>
  );
};
export default Contact;
