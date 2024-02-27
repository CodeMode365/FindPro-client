"use client";

import { dummyCategories } from "@/components/dummy/categories";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const Filter = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <div>
        <h2 className="text-lg font-semibold w-full border-b">Categories</h2>
        <ScrollArea className="h-64">
          <ul>
            {dummyCategories.map((category, i) => (
              <li
                key={"cate-item-" + i}
                className={` px-2 rounded-sm py-1 cursor-pointer transition-colors ${
                  i === activeIndex
                    ? "bg-primary text-white"
                    : "bg-white my-1 text-black  hover:bg-primary hover:text-white "
                }
                `}
                onClick={() => setActiveIndex(i)}
              >
                {category}
              </li>
            ))}
          </ul>
        </ScrollArea>
      </div>

      <Separator className="my-2" />

      <div>
        <h2 className="text-lg font-semibold w-full border-b">
          Ratings <span className="text-sm font-normal">(above)</span>
        </h2>
        <div>
          <div className="flex m-2">
            <FaStar className="m-[1px] text-yellow-400 cursor-pointer text-lg" />
            <FaStar className="m-[1px] text-yellow-400 cursor-pointer text-lg" />
            <FaRegStar className="m-[1px] text-yellow-400 cursor-pointer text-lg" />
            <FaRegStar className="m-[1px] text-yellow-400 cursor-pointer text-lg" />
            <FaRegStar className="m-[1px] text-yellow-400 cursor-pointer text-lg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
