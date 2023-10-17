
import TitleComp from '../../../Components/TitleComp/TitleComp';
import MenuItems from '../../../Shared/MenuItems/MenuItems';
import CommonBtn from '../../../Components/CommonBtn/CommonBtn';
import useMenu from '../../../hooks/UseMenu';

const MenuSec = () => {
   const [menu] = useMenu()
   const popular = menu.filter(item=>item.category === 'popular')
   return (
      <div className='my-10'>
         <TitleComp
            title="FROM OUR MENU"
            subtitle="Check it out"
         ></TitleComp>

         <div className='grid md:grid-cols-2 lg:px-20 mb-10 gap-6 mt-6'>
            {popular.map(item => <MenuItems
               key={item._id}
               item={item}
            ></MenuItems>)}
         </div>
         <CommonBtn text = "View Full Menu"></CommonBtn>
      </div>
   );
};

export default MenuSec;