import React from 'react';

const FeatureCard = ({title,content,img}) => {
  return (
    <div className="bg-white p-4 md:w-[370px] w-[260px] md:h-[200px] h-[150px] relative">
      <h3 className="text-2xl font-normal">{title}</h3>
      <p className="text-dimBlack">{content}</p>
      <img draggable={"false"} src={img} alt={title} className="md:w-[45px] w-[28px] absolute bottom-4 right-4"/>
    </div>
  );
};

export default FeatureCard;