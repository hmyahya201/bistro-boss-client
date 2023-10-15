import React from 'react';

const AdverTizeCom = ({styleBg, heading, text}) => {
   return (
      <div className="bg-img bg-fixed text-center xsm:py-8 md:py-12 lg:py-20 lg:mx-20 xsm:mx-5 my-20 grid place-items-center">
      <div className={`w-3/4 text-center ${styleBg} xsm:px-3 md:px-10 lg:px-16 py-8 text-black`}>
         <h3 className='xsm:text-xl md:text-3xl uppercase mb-2'>{heading}</h3>
         <p className='xsm:text-sm sm:text-lg'>{text}</p>
      </div>
   </div>
   );
};

export default AdverTizeCom;