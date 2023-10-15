import ClientRating from "../../../Components/Rating/ClientRating";
import TitleComp from "../../../Components/TitleComp/TitleComp";
import { useEffect, useState } from "react";
import Slider from "react-slick";
const Testimonial = () => {

   function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style, display: "block", background: "green", borderRadius:"100%" }}
          onClick={onClick}
        />
      );
    }
    
    function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style, display: "block", background: "green", borderRadius:"100%" }}
          onClick={onClick}
        />
      );
    }
    

   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
   const [rating, setRating] = useState([])
   useEffect(()=>{
      fetch('review.json')
      .then(res=>res.json())
      .then(data=>{
         setRating(data)
         console.log("ddd", rating)
      })
   },[])
   return (
      <div>
         <TitleComp title="TESTIMONIALS" subtitle="What Our Clients Say"></TitleComp>
         <div className="py-5 xsm:px-5 xsm:mx-2 sm:mx-5  md:px-10 md:mx-20 mb-10">
         <Slider {...settings}>
            {
               rating.map(review=><ClientRating 
                  key={review._id}
                  review ={review}
               ></ClientRating>)
            }
        </Slider>
         </div>
      </div>
   );
};

export default Testimonial;