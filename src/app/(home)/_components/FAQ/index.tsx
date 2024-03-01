import React from "react";
import Accordians from "./Accordians";
import Animated from "./Animated";

const FAQ = () => {
  return (
    <section className="my-8">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden sm:h-80 lg:order-last lg:h-full rounded-full shadow-sm">
            <Animated />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Get to <span className="text-primary">Know us?</span>
            </h2>
            <Accordians />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
