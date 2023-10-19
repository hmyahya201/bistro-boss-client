import React from 'react';
import MenuItems from '../../Shared/MenuItems/MenuItems';
import CommonBtn from '../CommonBtn/CommonBtn';
import { Link } from 'react-router-dom';

const MenuCategory = ({items, title}) => {
   return (
      <>
      <div className='grid md:grid-cols-2 lg:px-20 mb-10 gap-6 mt-10'>
            {
               items.map(item=><MenuItems key={item._id} item={item}></MenuItems>)
            }
      </div>
      <Link to={`/ourshop/${title?title:""}`}><CommonBtn text="ORDER YOUR FAVOURITE FOOD"></CommonBtn></Link>
      </>
   );
};

export default MenuCategory;