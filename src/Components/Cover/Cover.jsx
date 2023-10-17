import React from 'react';

const Cover = ({img, title, subtitle}) => {
   return (
      <div className="hero h-[600px]" style={{ backgroundImage: `url(${img}) `}}>
         <div className="hero-overlay bg-opacity-60"></div>
         <div className="hero-content text-center text-neutral-content">
            <div className="xsm:w-[200] sm:w-[400px] md:w-[700px] bg-black bg-opacity-40 text-center xsm:px-8 sm:px-10 md:px-20 xsm:py-5 md:py-10">
               <h3 className="mb-5 xsm:text-2xl sm:text-3xl md:text-5xl font-bold uppercase">{title}</h3>
               <p className="mb-5 uppercase">{subtitle}</p>
            </div>
         </div>
      </div>
   );
};

export default Cover;