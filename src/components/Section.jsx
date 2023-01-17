import React from 'react';

const Section = ({style, color, children}) => (
  <div className={`${color} sticky top-0`}>
    <div className={`${style} h-[100vh] p-5 max-w-[1500px]`}>
      {children}
    </div>
  </div>
);

export default Section;