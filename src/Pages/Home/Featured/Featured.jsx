import React from 'react';
import TitleComp from '../../../Components/TitleComp/TitleComp';
import img from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
   return (
      <div className="bg-fetured bg-fixed pt-10 mb-10 bg-black bg-opacity-30 relative">
        <div>
        <TitleComp title="Featured Items" index="text-white" subtitle="Check it Out"></TitleComp>
        </div>
         <div className='xsm:px-10 md:px-20 lg:px-40 pb-20'>
            <div className='xsm:flex-col md:flex md:flex-row items-center justify-center gap-6'>
               <img className='xsm:w-full md:w-1/2 rounded-lg z-10' src={img} alt="" />
               <div className='xsm:w-full md:w-1/2 z-10 mt-3'>
                  <p className='text-white'>March 20, 2023</p>
                  <h4 className='text-white text-xl font-normal'>WHERE CAN I GET SOME?</h4>
                  <p className='text-white text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Consequuntur omnis ullam maxime tenetur.</p>

                  <div className='mt-2'>
                  <button className="py-2 px-5 border-b-4 rounded-lg text-white text-sm border-white uppercase hover:bg-black transition">Read More</button>
                  </div>
               </div>
            </div>
         </div>
         <div className='absolute w-full h-full bg-black top-0 left-0 bg-opacity-30'></div>
      </div>
   );
};

export default Featured;