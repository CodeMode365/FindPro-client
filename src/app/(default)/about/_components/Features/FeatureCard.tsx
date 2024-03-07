import React from "react";
import { ArrowRight, Eye } from "lucide-react";
import Link from "next/link";

const FeatureCard = () => {
  return (
    <div className="h-full bg-white/90 shadow-md px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
      <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
        Kathmandu, Nepal
      </h2>
      <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
        Raclette Blueberry Nextious Level
      </h1>
      <p className=" mb-3 text-gray-500">
        Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
        microdosing tousled waistcoat.
      </p>
      <Link href="#" className="text-primary inline-flex items-center">
        Learn More
        <ArrowRight className="mx-2" />
      </Link>
      <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
        <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 ">
          <Eye className="mx-2" />
          1.2K
        </span>
      </div>
    </div>
  );
};

export default FeatureCard;
