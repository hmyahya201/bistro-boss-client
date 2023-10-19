import React from 'react';

const FoodCard = ({item}) => {
   const {image, name, recipe} = item
   return (
      <div className="card card-compact w-auto h-96 bg-base-100 shadow-xl">
         <figure><img className='w-full' src={image} alt="receipe" /></figure>
         <div className="card-body text-center">
            <h2 className="font-medium text-2xl">{name}</h2>
            <p>{recipe}</p>
            <div className="card-actions justify-center mt-3">
            <button className="py-2 px-5 bg-base-300 border-b-4 rounded-lg text-orange-400 text-sm border-orange-400 uppercase hover:bg-black transition-colors">add to cart</button>
            </div>
         </div>
      </div>
   );
};

export default FoodCard;