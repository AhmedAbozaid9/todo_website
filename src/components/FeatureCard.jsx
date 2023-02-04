import React from 'react';

const FeatureCard = ({title,content,img}) => {
  return (
    <div className="bg-white p-4 lg:w-[370px] lg:h-[200px] md:w-[260px] md:h-[150px] w-[220px] h-[120px] relative">
      <h3 className="text-2xl font-normal md:text-xl">{title}</h3>
      <p className="text-dimBlack md:text-lg sm:text-sm text-[12px]">{content}</p>
      <img draggable={"false"} src={img} alt={title} className="lg:w-[45px] md:w-[28px] w-[23px] absolute bottom-4 right-4"/>
    </div>
  );
};

export default FeatureCard;