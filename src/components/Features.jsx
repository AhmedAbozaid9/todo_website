import React from 'react';
import Section from "./Section.jsx";
import features from "../constants/features.js";
import FeatureCard from "./FeatureCard.jsx";
import superWoman from "../assets/superWoman.svg"

const Features = () => (
  <Section color="bg-pastelOrange" style="flex flex-col justify-around items-center">
    <h1 className=" text-3xl sm:text-4xl font-semibold text-white"><span className="border-b-4 border-b-white font-robotoSlab">Powered</span> by Technology</h1>
    <div className="grid md:grid-rows-1 md:grid-cols-2 grid-rows-2 grid-cols-1 justify-center items-center">
      <div className="flex gap-2 lg:min-w-[800px] md:min-w-[550px] min-w-[450px] flex-wrap">
        {features.map(feature => <FeatureCard key={feature.id} {...feature} />)}
      </div>
      <img src={superWoman} alt="superWoman" className="sm-[500px] md:w-[700px] "/>
    </div>
  </Section>
);

export default Features;