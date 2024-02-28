import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FaArrowRight, FaRegComment, FaRegEye } from "react-icons/fa";
import Image from "next/image";

const GalleryCard = () => {
  return (
    <Card className="relative cursor-pointer group">
      <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
        <Image
          className="lg:h-72 md:h-36 w-full object-cover object-center"
          src="/assets/gold.webp"
          alt="blog"
          height={320}
          width={400}
        />
        <div className="p-6 py-3 backdrop-blur-md absolute bottom-0 bg-white/60 w-full translate-y-full group-hover:translate-y-0 transition-transform">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-700 mb-1">
            New York, USA
          </h2>
          <h1 className="title-font text-md font-medium text-gray-900">
            The Catalyzer
          </h1>
          <div className="flex items-center flex-wrap text-sm">
            <a className="text-primary inline-flex items-center md:mb-2 lg:mb-0">
              Learn More
              <FaArrowRight className="ml-2 " />
            </a>
            <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-500">
              <FaRegEye className="mr-2 text-xl" />
              1.2K
            </span>
            <span className="text-gray-500 inline-flex items-center leading-none text-sm">
              <FaRegComment className="mr-2 text-lg" />6
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default GalleryCard;
