import React, {useState} from 'react';
import Section from "./Section.jsx";
import pricingPlans from "../constants/pricingPlans.js";
import PriceCard from "./PriceCard.jsx";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true)
  return (
    <Section color="bg-pastelGreen">
      <h1 className=" text-2xl sm:text-4xl font-semibold text-center">Our Pricing</h1>
      <button onClick={() => setIsMonthly(!isMonthly)}>click me</button>
      <div className="flex justify-center items-center gap-4">
        {pricingPlans.map(plan => <PriceCard key={plan.id} name={plan.name} features={plan.features} price={plan.price} monthly={isMonthly}/>)}
      </div>
    </Section>
  )
}

export default Pricing;