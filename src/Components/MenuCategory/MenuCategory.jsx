import React from 'react';
import MenuItems from '../../Shared/MenuItems/MenuItems';
import CommonBtn from '../CommonBtn/CommonBtn';

const MenuCategory = ({items}) => {
   console.log("items", items)
   return (
      <>
      <div className='grid md:grid-cols-2 lg:px-20 mb-10 gap-6 mt-10'>
            {
               items.map(item=><MenuItems key={item._id} item={item}></MenuItems>)
            }
      </div>
      <CommonBtn text="ORDER YOUR FAVOURITE FOOD"></CommonBtn>
      </>
   );
};

export default MenuCategory;