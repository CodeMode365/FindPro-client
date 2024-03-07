import { Download, Flag, Headphones, Users } from "lucide-react";
import React from "react";

const Stats = () => {
  const iconClass = "h-12 w-12 mb-4 text-primary mx-auto";

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            App <span className="text-primary">Stats</span>
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600">
            Our platform is growing gradually every day. Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Eaque soluta eligendi
            repudiandae necessitatibus magnam placeat?
          </p>
        </div>

        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 md:w-1/4 w-1/2">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <Download className={iconClass} />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                2.7K
              </h2>
              <p className="leading-relaxed">Downloads</p>
            </div>
          </div>

          <div className="p-4 md:w-1/4 w-1/2">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <Users className={iconClass} />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                1.3K
              </h2>
              <p className="leading-relaxed">Users</p>
            </div>
          </div>

          <div className="p-4 md:w-1/4 w-1/2">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <Headphones className={iconClass} />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                74
              </h2>
              <p className="leading-relaxed">Files</p>
            </div>
          </div>

          <div className="p-4 md:w-1/4 w-1/2">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <Flag className={iconClass} />
              <h2 className="title-font font-medium text-3xl text-gray-900">
                46
              </h2>
              <p className="leading-relaxed">Places</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
