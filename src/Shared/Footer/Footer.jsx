import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
   return (
      <footer className="bg-black">
         <div className="flex">
            <div className="bg-neutral w-1/2 text-white text-center py-10">
               <p className="py-2">CONTACT US</p>
               <small className="block">123 ABS Street, Uni 21, Bangladesh</small>
               <small className="block">+88 123456789</small>
               <small className="block">Mon - Fri: 08:00 - 22:00</small>
               <small className="block">Sat - Sun: 10:00 - 23:00</small>

            </div>
            <div className="bg-black w-1/2 text-white flex items-center justify-center flex-col">
               <h3>Follow US</h3>
               <small>Join us on social media</small>
               <div className="flex gap-2 py-5 text-2xl">
                  <FaFacebook></FaFacebook>
                  <FaInstagram></FaInstagram>
                  <FaTwitter></FaTwitter>
               </div>
            </div>
         </div>
         <div className="footer footer-center p-4 text-base-content">
            <aside>
               <p className="text-white">Copyright © 2023 - All right reserved by hmyahya</p>
            </aside>
         </div>
      </footer>
   );
};

export default Footer;