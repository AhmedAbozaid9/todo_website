import React from 'react';
import Section from "./Section.jsx";
import reminder from "../assets/reminder.svg"

const Hero = () => {
  return (
      <Section color="bg-pastelYellow" style="flex md:flex-row flex-col items-center mx-auto sm:justify-around justify-center">
       <div className=" flex flex-col">
         <h1 className="md:text-7xl text-5xl font-semibold md:leading-[90px] sm:leading-[50px]">Manage All <br /> Your Tasks <br /> With Ease</h1>
         <p className="text-dimBlack text-lg max-w-xl sm:py-16 py-6">Do more than you could ever dream of in one day, and make your days twice as long by managing your tasks with our App. Sign in and start using it today.</p>
         <button className="self-start font-semibold bg-pastelOrange rounded-md sm:mb-0 mb-6 py-3 px-4">Get Started</button>
       </div>
        <img src={reminder} alt="reminder" className="w-[400px]" draggable={"false"}/>
      </Section>
  );
};

export default Hero;