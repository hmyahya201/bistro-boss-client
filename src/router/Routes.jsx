import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";
import Order from "../Pages/Order/Order/Order";
 
export const router = createBrowserRouter([
   {
     path: "/",
     element: <Main></Main>,
     children:[
      {
         path:'/',
         element: <Home></Home>
      },
      {
         path:'ourmenu',
         element: <OurMenu></OurMenu>
      },
      {
         path:'ourshop/:category',
         element: <Order></Order>
      }
     ]
   },
 ]);