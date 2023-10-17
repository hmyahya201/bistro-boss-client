import { FaUserCircle, FaShoppingCart} from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
   const navOptions = <>
      <li className="text-xl mx-2 px-1 cursor-pointer"><Link to='/'>Home</Link></li>
      <li className="text-xl mx-2 px-1 cursor-pointer"><Link to='/ourmenu'>Our Menu</Link></li>
      <li className="text-xl mx-2 px-1 cursor-pointer"><a>Contact Us</a></li>
      <li className="text-xl mx-2 px-1 cursor-pointer"><a>Deshboard</a></li>
      <li className="text-xl mx-2 px-1 cursor-pointer"><a>Our Shop</a></li>
   </>
   return (
      <div className="navbar fixed z-10 bg-black bg-opacity-70 text-white max-w-screen-xl">
         <div className="navbar-start">
            <div className="dropdown">
               <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
               </label>
               <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  {navOptions}
               </ul>
            </div>
            <div className="normal-case">
               <a className="xsm:text-lg sm:text-2xl block font-bold">BISTRO BOSS</a>
               <a className="xsm:hidden sm:block md:text-lg tracking-[5px] text-center">RESTAURANT</a>
            </div>

         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu-horizontal px-1">
               {navOptions}
            </ul>
         </div>
         <div className="navbar-end">
            <div className="relative xsm:hidden sm:block">
               <span className="absolute top-0 right-0 rounded-full text-white text-center text-lg">0</span>
              <FaShoppingCart className="text-2xl text-green-800"></FaShoppingCart>
            </div>
            <button className="text-xl md:mx-2 px-1 cursor-pointer">Sign Out</button>
            <div className="xsm:hidden sm:block"><FaUserCircle className="text-3xl"></FaUserCircle></div>
         </div>
      </div>
   );
};

export default Navbar;