import React, { useState } from 'react';
import Cover from '../../../Components/Cover/Cover';
import img from '../../../assets/shop/banner2.jpg'
import { Helmet } from 'react-helmet-async';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from './../../../hooks/UseMenu';
import FoodCard from '../../../Components/FoodCard/FoodCard';
import { useParams } from 'react-router-dom';

const Order = () => {
   const categories = ["salad", "pizza", "soup", "dessert", "drinks"]
   const {category} = useParams()
   const initialIndex = categories.indexOf(category)
   console.log("category", category)
   const [menu] = useMenu()
   const desserts = menu.filter(item=>item.category === 'dessert')
   const soups = menu.filter(item=>item.category === 'soup')
   const salads = menu.filter(item=>item.category === 'salad')
   const pizzaes = menu.filter(item=>item.category === 'pizza')
   const drinkses = menu.filter(item=>item.category === 'drinks')
   const [tabIndex, setTabIndex] = useState(initialIndex)
   return (
      <div>
         <Helmet>
            <title>Bistro Boss | Our Shop</title>
         </Helmet>
         <Cover img={img} title="Our Shop" subtitle="Would you like to try a dish"></Cover>

         <div className='xsm:px-5 sm:px-10 md:px-16 text-center my-10'>
         <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList className="text-center my-10">
               <Tab>Salad</Tab>
               <Tab>Pizza</Tab>
               <Tab>Soup</Tab>
               <Tab>Dessert</Tab>
               <Tab>Drinks</Tab>
            </TabList>
            <TabPanel>
               <div className='grid md:grid-cols-3 gap-6'>
                  {salads.map(item=><FoodCard key={item._id} item={item}></FoodCard>)}
               </div>
            </TabPanel>
            <TabPanel>
            <div className='grid md:grid-cols-3 gap-6'>
                  {pizzaes.map(item=><FoodCard key={item._id} item={item}></FoodCard>)}
               </div>
            </TabPanel>
            <TabPanel>
            <div className='grid md:grid-cols-3 gap-6'>
                  {soups.map(item=><FoodCard key={item._id} item={item}></FoodCard>)}
               </div>
            </TabPanel>
            <TabPanel>
            <div className='grid md:grid-cols-3 gap-6'>
                  {desserts.map(item=><FoodCard key={item._id} item={item}></FoodCard>)}
               </div>
            </TabPanel>
            <TabPanel>
            <div className='grid md:grid-cols-3 gap-6 place-items-center'>
                  {drinkses.map(item=><FoodCard key={item._id} item={item}></FoodCard>)}
               </div>
            </TabPanel>
         </Tabs>
         </div>
      </div>
   );
};

export default Order;