import React from "react";
import KnowUs from "./_components/KnowUs";
import Stats from "./_components/Stats";
import Features from "./_components/Features";
import Gallery from "./_components/Gallery";

const About = () => {
  return (
    <>
      <KnowUs />
      <Features />
      <div className="my-4">
        <Gallery />
      </div>
      <Stats />
    </>
  );
};

export default About;
