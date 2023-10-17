import React from 'react';

const CommonBtn = ({text}) => {
   return (
      <div className='mt-5 mb-5 text-center xsm:w-1/2 md:w-3/12 mx-auto'>
         <p className='uppercase py-2 border-b-4 font-medium cursor-pointer'>{text}</p>
      </div>
   );
};

export default CommonBtn;