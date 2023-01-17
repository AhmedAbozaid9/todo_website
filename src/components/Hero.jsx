import React from 'react';
import Section from "./Section.jsx";
import reminder from "../assets/reminder.svg"

const Hero = () => {
  return (
      <Section color="bg-pastelYellow" style="flex items-center mx-auto justify-around">
       <div className=" flex flex-col">
         <h1 className="text-7xl font-semibold leading-[90px]">Manage All <br /> Your Tasks <br /> With Ease</h1>
         <p className="text-dimBlack text-lg max-w-xl py-16">Do more than you could ever dream of in one day, and make your days twice as long by managing your tasks with our App. Sign in and start using it today.</p>
         <button className="self-start font-semibold bg-pastelOrange rounded-md py-3 px-4">Get Started</button>
       </div>
        <img src={reminder} alt="reminder" className="w-[400px]" draggable={"false"}/>
      </Section>
  );
};

export default Hero;