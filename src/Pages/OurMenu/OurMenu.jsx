import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Components/Cover/Cover';
import banner from '../../assets/menu/banner3.jpg'
import MenuSec from '../Home/PopulerMenu/MenuSec';
import AdverTizeCom from '../../Components/AdverTizeCom/AdverTizeCom';
const OurMenu = () => {
   return (
      <div>
         <Helmet>
            <title>Bistro Boss | Menu</title>
         </Helmet>
         <Cover img={banner} title="Our Menu" subtitle="Would you like to try a dish?"></Cover>
         <MenuSec></MenuSec>
         <AdverTizeCom style="bg-black bg-opacity-40 text-white" heading="desserts" text ="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></AdverTizeCom>
         <MenuSec></MenuSec>
         <AdverTizeCom style="bg-black bg-opacity-40 text-white" heading="pizza" text ="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></AdverTizeCom>
         <MenuSec></MenuSec>
         <AdverTizeCom style="bg-black bg-opacity-40 text-white" heading="salad" text ="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></AdverTizeCom>
         <MenuSec></MenuSec>
         <AdverTizeCom style="bg-black bg-opacity-40 text-white" heading="soup" text ="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></AdverTizeCom>
         <MenuSec></MenuSec>
      </div>
   );
};

export default OurMenu;