import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import React from "react";
import Categories from "./Categories";

const FAQ = () => {
  return (
    <section className="my-8">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden sm:h-80 lg:order-last lg:h-full rounded-full shadow-sm">
            <div className="h-full w-full -rotate-[25deg]">
              <Categories direction="forward" speed={0.3} />
              <Categories direction="backward" speed={0.2} />
              <Categories direction="forward" />
              <Categories direction="backward" speed={0.6} />
              <Categories direction="forward" speed={0.1} />
              <Categories direction="backward" speed={0.4} />
              <Categories direction="forward" speed={0.8} />
              <Categories direction="backward" />
            </div>
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Get to <span className="text-primary">Know us?</span>
            </h2>

            <Accordion type="single" collapsible defaultValue="item-1">
              <AccordionItem value="item-1">
                <AccordionTrigger>How does FindPro work?</AccordionTrigger>
                <AccordionContent>
                  FindPro is a platform that connects individuals and businesses
                  with top professionals across various industries. Simply
                  browse our extensive list of categories, select the
                  professional you need, and initiate contact to discuss your
                  project details.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  What types of professionals can I find on FindPro?
                </AccordionTrigger>
                <AccordionContent>
                  Find professionals for every project on our platform. From
                  photographers and web developers to graphic designers and
                  legal professionals, we have a diverse range of expertise to
                  meet your needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  How do I hire a professional on FindPro?
                </AccordionTrigger>
                <AccordionContent>
                  Hiring on FindPro is simple! Review profiles, portfolios, and
                  ratings of professionals. Contact them directly to discuss
                  projects and terms.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  How do I find the right professional for my needs?
                </AccordionTrigger>
                <AccordionContent>
                  Explore our advanced search filters to refine your search for
                  professionals. Browse detailed profiles, portfolios, and
                  client testimonials to find the perfect match based on
                  expertise, location, ratings, and more.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
