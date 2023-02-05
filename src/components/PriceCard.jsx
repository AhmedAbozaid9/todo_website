import React from 'react';

const PriceCard = ({name, price, features, monthly = true}) => (
  <div className="w-[260px] h-[300px] bg-white rounded-[20px] py-8 px-4 flex flex-col justify-center items-center">
    <h4 className="text-2xl">{name}</h4>
    <h3 className="my-5 text-4xl font-medium">{(price * (monthly ? 1: 10)).toFixed(2)} $</h3>
    <ul className="divide-y-2 text-center text-lg">
      {features.map((feature,id) => <ul key={id}>{feature}</ul>)}
    </ul>
  </div>
);

export default PriceCard;