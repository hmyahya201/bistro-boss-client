import React from 'react';

const MenuItems = ({item}) => {
   const {name, price, image, recipe} = item
   return (
      <div className='flex space-x-4 px-5'>
         <img className='xsm:w-[80px] xsm:h-[50px] md:w-[120px]' style={{borderRadius:'0 200px 200px 200px'}} src={image} alt="" />
         <div>
            <p className='uppercase xsm:text-lg text-xl'>{name}------------</p>
            <p className='text-sm pt-2'>{recipe}</p>
         </div>
         <p className='text-yellow-500'>{'$'+ price}</p>
         
      </div>
   );
};

export default MenuItems;