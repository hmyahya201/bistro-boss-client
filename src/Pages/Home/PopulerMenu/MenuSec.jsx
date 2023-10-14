import React, { useEffect, useState } from 'react';
import TitleComp from '../../../Components/TitleComp/TitleComp';
import MenuItems from '../../../Shared/MenuItems/MenuItems';

const MenuSec = () => {
   const [menu, setMenu] = useState([])
   useEffect(() => {
      fetch('menu.json')
         .then(res => res.json())
         .then(data => {
            const popularItems = data.filter(db => db.category === 'popular')
            setMenu(popularItems)
         })
   }, [])
   return (
      <div className='my-10'>
         <TitleComp
            title="FROM OUR MENU"
            subtitle="Check it out"
         ></TitleComp>

         <div className='grid md:grid-cols-2 lg:px-20 mb-10 gap-6 mt-6'>
            {menu.map(item => <MenuItems
               key={item._id}
               item={item}
            ></MenuItems>)}
         </div>
         <div className='mt-5 text-center w-2/12 mx-auto'>
            <p className='uppercase py-2 border-b-4 font-medium cursor-pointer'>View Full Menu</p>
         </div>
      </div>
   );
};

export default MenuSec;