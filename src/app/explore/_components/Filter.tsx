"use client";

import { dummyCategories } from "@/components/dummy/categories";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { generatePathname } from "@/lib/helpers";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const Filter = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeListItemRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    const urlCategory = searchParams.get("category");
    if (urlCategory) {
      setActiveCategory(urlCategory);
    }
    if (!urlCategory || urlCategory == "null") {
      const pageNo = searchParams.get("page");
      router.replace(`/explore?category=all&page=${pageNo}`);
    }
  }, [activeCategory, searchParams, router]);

  useEffect(() => {
    if (activeListItemRef.current) {
      activeListItemRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [router]);

  const setCurrentCategory = (category: string) => {
    const pageNo = searchParams.get("page");
    router.replace(
      `/explore?category=${generatePathname(category)}&page=${pageNo}`
    );
  };

  return (
    <>
      <div>
        <h2 className="text-lg font-semibold w-full border-b">Categories</h2>
        <ScrollArea className="h-64">
          <ul>
            {["All", ...dummyCategories].map((category, i) => (
              <li
                ref={
                  activeCategory === generatePathname(category, false)
                    ? activeListItemRef
                    : null
                }
                key={"cate-item-" + i}
                className={` px-2 rounded-sm py-1 cursor-pointer transition-colors ${
                  activeCategory === generatePathname(category, false)
                    ? "bg-primary text-white"
                    : "bg-white my-1 text-black  hover:bg-primary hover:text-white "
                }
                `}
                onClick={() => setCurrentCategory(category)}
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
