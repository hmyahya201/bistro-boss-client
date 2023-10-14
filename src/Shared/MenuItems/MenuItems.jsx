import React from 'react';

const MenuItems = ({item}) => {
   const {name, price, image, recipe} = item
   return (
      <div className='flex space-x-4'>
         <img className='w-[120px]' style={{borderRadius:'0 200px 200px 200px'}} src={image} alt="" />
         <div>
            <p className='uppercase text-xl'>{name}------------</p>
            <p className='text-sm pt-2'>{recipe}</p>
         </div>
         <p className='text-yellow-500'>{'$'+ price}</p>
         
      </div>
   );
};

export default MenuItems;