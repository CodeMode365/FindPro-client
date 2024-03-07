import { ArrowRight, Briefcase, Check, Star } from "lucide-react";
import Link from "next/link";
import React from "react";

const Stats = () => {
  const statsData = [
    {
      title: "Successful Hiring",
      Icon: Check,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit suscipit iusto voluptas voluptatibus officia?",
    },
    {
      title: "Years of Experience Hiring",
      Icon: Briefcase,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit suscipit iusto voluptas voluptatibus officia?",
    },
    {
      title: "Average Rating",
      Icon: Star,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit suscipit iusto voluptas voluptatibus officia?",
    },
  ];

  return (
    <div className="container px-5 py-10 mx-auto">
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
        {statsData.map((Stat, i) => (
          <div
            key={`stat-data-${i}`}
            className="p-4 md:w-1/3 flex flex-col text-center items-center"
          >
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-primary/10 text-primary mb-5 flex-shrink-0">
              <Stat.Icon size={42} />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                {Stat.title}
              </h2>
              <p className="leading-relaxed text-base">{Stat.desc}</p>
              <Link href={"#"} className="mt-3 text-primary inline-flex items-center">
                Learn More
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
