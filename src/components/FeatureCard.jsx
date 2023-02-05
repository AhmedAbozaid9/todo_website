import React from 'react';

const FeatureCard = ({title,content,img}) => {
  return (
    <div className="bg-white p-4 lg:w-[370px] lg:h-[200px] md:w-[260px] md:h-[150px] sm:w-[220px] sm:h-[130px] w-[160px] h-[100px] relative">
      <h3 className="md:text-2xl font-normal sm:text-xl text-md">{title}</h3>
      <p className="text-dimBlack md:text-lg sm:text-sm text-[12px]">{content}</p>
      <img draggable={"false"} src={img} alt={title} className="lg:w-[45px] md:w-[28px] sm:w-[23px] w-[18px] absolute sm:bottom-4 sm:right-4 bottom-1 right-1"/>
    </div>
  );
};

export default FeatureCard;