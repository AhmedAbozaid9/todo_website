import React from 'react';
import Section from "./Section.jsx";
import features from "../constants/features.js";
import FeatureCard from "./FeatureCard.jsx";
import superWoman from "../assets/superWoman.svg"

const Features = () => (
  <Section color="bg-pastelOrange" style="flex flex-col justify-around items-center">
    <h1 className=" text-3xl sm:text-4xl font-semibold text-white"><span className="border-b-4 border-b-white font-robotoSlab">Powered</span> by Technology</h1>
    <div className="flex flex-col md:flex-row justify-center items-center">
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        {features.map(feature => <FeatureCard key={feature.id} {...feature} />)}
      </div>
      <img src={superWoman} alt="superWoman" className="w-[500px] md:w-[700px]"/>
    </div>
  </Section>
);

export default Features;