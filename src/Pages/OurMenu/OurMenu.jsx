import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Components/Cover/Cover';
import banner from '../../assets/menu/banner3.jpg'
import AdverTizeCom from '../../Components/AdverTizeCom/AdverTizeCom';
import useMenu from '../../hooks/UseMenu';
import MenuCategory from '../../Components/MenuCategory/MenuCategory';
import TitleComp from '../../Components/TitleComp/TitleComp';
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
const OurMenu = () => {
   const [menu] = useMenu()
   const desserts = menu.filter(item=>item.category === 'dessert')
   const soups = menu.filter(item=>item.category === 'soup')
   const salads = menu.filter(item=>item.category === 'salad')
   const pizzaes = menu.filter(item=>item.category === 'pizza')
   const offereds = menu.filter(item=>item.category === 'offered')
   return (
      <div>
         <Helmet>
            <title>Bistro Boss | Menu</title>
         </Helmet>
         <Cover img={banner} title="Our Menu" subtitle="Would you like to try a dish?"></Cover>
         <TitleComp
            title="TODAY'S OFFER"
            subtitle="Don't miss"
         ></TitleComp>
        <MenuCategory items ={offereds} title="dessert"></MenuCategory>
         <AdverTizeCom img={dessertImg} style="bg-black bg-opacity-40 text-white" heading="desserts" text ="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></AdverTizeCom>
         <MenuCategory items ={desserts} title="dessert"></MenuCategory>

         <AdverTizeCom img={pizzaImg} style="bg-black bg-opacity-40 text-white" heading="pizza" text ="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></AdverTizeCom>
         <MenuCategory items ={pizzaes} title="pizza"></MenuCategory>

         <AdverTizeCom img={saladImg}  style="bg-black bg-opacity-40 text-white" heading="salad" text ="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></AdverTizeCom>
         <MenuCategory items ={salads} title="salad" ></MenuCategory>

         <AdverTizeCom img ={soupImg} style="bg-black bg-opacity-40 text-white" heading="soup" text ="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></AdverTizeCom>
         <MenuCategory items ={soups} title="soup"></MenuCategory>
      </div>
   );
};

export default OurMenu;