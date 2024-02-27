import React from "react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Briefcase, Check, Star } from "lucide-react";
import { MdVerified } from "react-icons/md";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const ProCard = () => {
  return (
    <Card>
      {
        <Link
          href="#"
          className="block rounded-lg  shadow-sm shadow-indigo-100 overflow-hidden"
        >
          <Image
            alt={"work"}
            src={"/assets/professionals/bill_1.jpeg"}
            height={56}
            width={100}
            className="h-[12rem] w-full object-cover transition-transform hover:scale-105"
          />

          <div className="m-2">
            <dl>
              <div className="flex justify-between">
                <div className="">
                  <dt className="sr-only">Role</dt>
                  <dd className="text-sm text-gray-500">
                    <Badge
                      variant={"outline"}
                      className="text-primary border-primary"
                    >
                      Driver
                    </Badge>
                  </dd>
                </div>
                <div>
                  <Tooltip>
                    <TooltipTrigger>
                      <span className="h-auto w-auto rounded-full ">
                        <MdVerified className="text-primary text-2xl" />
                      </span>
                    </TooltipTrigger>
                    <TooltipContent className="text-primary">Verified</TooltipContent>
                  </Tooltip>
                </div>
              </div>

              <div className="flex items-baseline flex-col justify-between mt-2 -mb-2">
                <span className="">
                  <dt className="sr-only">Name</dt>
                  <dd className="font-medium">Shyam Majhi</dd>
                </span>
                <span className="text-xs text-gray-500">
                  <dt className="sr-only">Address</dt>
                  <dd className="font-medium">Kathmandu, Nepal</dd>
                </span>
              </div>
            </dl>

            <div className="mt-6 flex items-center justify-evenly text-xs  mb-4">
              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <Check className="text-primary" />
                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">Completed</p>
                  <p className="font-medium">34 jobs</p>
                </div>
              </div>

              <Separator orientation="vertical" className="h-full bg-red-500" />

              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <Star className="text-primary" />
                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">Ratings</p>
                  <p className="font-medium">4.5 stars</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      }
    </Card>
  );
};

export default ProCard;
