
import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import TitleComp from "../../../Components/TitleComp/TitleComp";
import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'

const Category = () => {
   var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
   return (
      <>
         <div>
            <TitleComp
               subtitle="From 11:00am to 10:00pm"
               title="ORDER ONLINE"
            ></TitleComp>
         </div>

         <div className="lg:px-20 mb-10">
            <Slider {...settings}>
               <div className="relative">
                  <img className="mx-auto" src={img1} alt="" />
                  <p className="text-2xl text-white absolute bottom-8 left-1/2 -translate-x-1/2">SALADS</p>
               </div>
               <div className="relative">
                  <img className="mx-auto" src={img2} alt="" />
                  <p className="text-2xl text-white absolute bottom-8 left-1/2 -translate-x-1/2">SOUPS</p>
               </div>
               <div className="relative">
                  <img className="mx-auto" src={img3} alt="" />
                  <p className="text-2xl text-white absolute bottom-8 left-1/2 -translate-x-1/2">PIZZA</p>
               </div>
               <div className="relative">
                  <img className="mx-auto" src={img4} alt="" />
                  <p className="text-2xl text-white absolute bottom-8 left-1/2 -translate-x-1/2">DESSEPTS</p>
               </div>
               <div className="relative">
                  <img className="mx-auto" src={img5} alt="" />
                  <p className="text-2xl text-white absolute bottom-8 left-1/2 -translate-x-1/2">SALADS</p>
               </div>
            </Slider>
         </div>
      </>
   );
};

export default Category;