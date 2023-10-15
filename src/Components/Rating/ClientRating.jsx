import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import img from '../../assets/icon/Vector.png'
const ClientRating = ({ review }) => {
   const { name, details, rating } = review
   return (
      <div>
         <div>
            <div className='mx-auto grid place-items-center'>
               <Rating
                  style={{ maxWidth: 180 }}
                  value={rating}
                  readOnly
               />
            </div>
            <div className='flex items-center justify-center my-8 gap-2'>
               <img className='xsm:w-5 md:w-8' src={img} alt="" />
               <img className='xsm:w-5 md:w-8' src={img} alt="" />
            </div>
            <div className='text-center xsm:px-5 sm:px-10'>
               <p>{details}</p>
               <h4 className='text-orange-400 xsm:text-lg sm:text-xl font-medium uppercase italic mt-3'>{name}</h4>
            </div>
         </div>
      </div>
   );
};

export default ClientRating;