import React from 'react';
import { Parallax} from 'react-parallax';

const AdverTizeCom = ({img, style, heading, text }) => {
   return (
      <div className='xsm:mt-10 md:mt-20'>
         <Parallax
         blur={{ min: -20, max: 20 }}
         bgImage={img}
         bgImageAlt="the dog"
         strength={-200}
      >
         <div className=" text-center xsm:py-8 md:py-12 lg:py-20 lg:mx-20 xsm:mx-5 my-20 grid place-items-center">
            <div className={`w-3/4 text-center ${style} xsm:px-3 md:px-10 lg:px-16 xsm:py-8 sm:py-10 md:py-16 text-black`}>
               <h3 className='xsm:text-xl md:text-3xl uppercase mb-2'>{heading}</h3>
               <p className='xsm:text-sm sm:text-lg'>{text}</p>
            </div>
         </div>
      </Parallax>
      </div>
   );
};

export default AdverTizeCom;