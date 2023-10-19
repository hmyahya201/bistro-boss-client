import React, { useEffect, useState } from 'react';
import TitleComp from '../../../Components/TitleComp/TitleComp';
import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import FoodCard from '../../../Components/FoodCard/FoodCard';

const ChefRecomends = () => {
        const button = <button className="py-2 px-5 bg-base-300 border-b-4 rounded-lg text-orange-400 text-sm border-orange-400 uppercase hover:bg-black transition-colors">add to cart</button> 
   return (
      <div>
         <TitleComp
            subtitle="Should Try"
            title="CHEF RECOMMENDS"
         ></TitleComp>

         <div className='lg:mx-20 my-20 px-5'>
            <div className='grid md:grid-cols-3 gap-6'>
               <div className="card card-compact w-auto h-96 bg-base-100 shadow-xl">
                  <figure><img className='w-full' src={img1} alt="receipe" /></figure>
                  <div className="card-body text-center">
                     <h2 className="font-medium text-2xl">Caeser Salad</h2>
                     <p>If a dog chews shoes whose shoes does he choose? he choose</p>
                     <div className="card-actions justify-center mt-3">
                      {button}
                     </div>
                  </div>
               </div>

               <div className="card card-compact w-auto h-96 bg-base-100 shadow-xl">
                  <figure><img className='w-full' src={img2} alt="Shoes" /></figure>
                  <div className="card-body text-center">
                     <h2 className="font-medium text-2xl">Caeser Salad</h2>
                     <p>If a dog chews shoes whose shoes does he choose? he choose</p>
                     <div className="card-actions justify-center mt-3">
                        {button}
                     </div>
                  </div>
               </div>

               <div className="card card-compact w-auto h-96 bg-base-100 shadow-xl">
                  <figure><img className='w-full' src={img3} alt="Shoes" /></figure>
                  <div className="card-body text-center">
                     <h2 className="font-medium text-2xl">Caeser Salad</h2>
                     <p>If a dog chews shoes whose shoes does he choose? he choose</p>
                     <div className="card-actions justify-center mt-3">
                        {button}
                     </div>
                  </div>
               </div>
            </div>
         </div>

      </div>
   );
};

export default ChefRecomends;