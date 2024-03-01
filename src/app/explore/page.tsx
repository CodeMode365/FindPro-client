import React from "react";
import Filter from "./_components/Filter";
import Professionals from "./_components/Professionals";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import BannerCarousel from "./_components/Banner/BannerCrousel";

const Explore = () => {
  return (
    <div className="w-full md:ml-4 md:p-2 ">
      <div className=" h-auto col-span-full rounded-md shadow-lg mb-4">
        <BannerCarousel />
      </div>

      <div className="grid grid-cols-2 xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6  px-4 md:px-0 my-4">
        <Professionals />
      </div>

      <div className="col-span-full">
        <Pagination className="mx-auto ">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                isActive
                className="text-primary border-primary"
              >
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default Explore;
