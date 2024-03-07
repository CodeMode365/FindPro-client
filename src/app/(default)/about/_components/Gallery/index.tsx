import React from "react";
import GalleryCarousel from "./GalleryCarousel";

const Gallery = () => {
  return (
    <>
      <div className="flex flex-col text-center w-full mb-10 px-5">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Our <span className="text-primary">Gallery</span>
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify, subway tile poke farm-to-table.
        </p>
      </div>

      <GalleryCarousel />
    </>
  );
};

export default Gallery;
