import React, { FC } from "react";
import { Briefcase, Check, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface iProps {
  name: string;
  image: string;
  address: string;
  role: string;
}

const TrendingCard: FC<iProps> = ({ name, image, address, role }) => {
  return (
    <Card>
      {
        <a
          href="#"
          className="block rounded-lg p-4 shadow-sm shadow-indigo-100"
        >
          <Image
            alt={name}
            src={image}
            height={400}
            width={400}
            className="h-[18rem] w-full rounded-md object-cover hover:scale-105"
          />

          <div className="mt-2">
            <dl>
              <div>
                <dt className="sr-only">Role</dt>
                <dd className="text-sm text-gray-500">
                  <Badge>{role}</Badge>
                </dd>
              </div>

              <div className="flex items-baseline justify-between mt-2 -mb-2">
                <span className="">
                  <dt className="sr-only">Name</dt>
                  <dd className="font-medium">{name}</dd>
                </span>

                <span className="text-sm text-gray-500">
                  <dt className="sr-only">Address</dt>
                  <dd className="font-medium">{address}</dd>
                </span>
              </div>
            </dl>

            <div className="mt-6 flex items-center gap-8 text-xs">
              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <Check className="text-primary" />

                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">Completed</p>

                  <p className="font-medium">34 jobs</p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <Briefcase className="text-primary" />

                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">Experience</p>

                  <p className="font-medium">4 years</p>
                </div>
              </div>

              <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <Star className="text-primary" />

                <div className="mt-1.5 sm:mt-0">
                  <p className="text-gray-500">Ratings</p>

                  <p className="font-medium">4.5 stars</p>
                </div>
              </div>
            </div>
          </div>
        </a>
      }
    </Card>
  );
};

export default TrendingCard;
