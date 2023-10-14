import React from 'react';

const AdverTizeCom = ({styleBg, heading, text}) => {
   return (
      <div className="bg-img text-center py-20 lg:mx-20 my-20 grid place-items-center">
      <div className={`w-3/4 text-center ${styleBg} px-16 py-8 text-black`}>
         <h3 className='text-3xl uppercase mb-2'>{heading}</h3>
         <p>{text}</p>
      </div>
   </div>
   );
};

export default AdverTizeCom;