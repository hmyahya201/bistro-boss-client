import AdverTize from "../AdverTize/AdverTize";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecomends from "../ChefRecomends/ChefRecomends";
import ContactSect from "../ContactSec/ContactSect";
import Featured from "../Featured/Featured";
import MenuSec from "../PopulerMenu/MenuSec";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
   return (
      <div>
        <Banner></Banner>
        <Category></Category>
        <AdverTize></AdverTize>
        <MenuSec></MenuSec>
        <ContactSect></ContactSect>
        <ChefRecomends></ChefRecomends>
        <Featured></Featured>
        <Testimonial></Testimonial>
      </div>
   );
};

export default Home;