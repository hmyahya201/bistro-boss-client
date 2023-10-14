
const TitleComp = ({title, subtitle, index}) => {
   return (
      <div className={`text-center mx-auto mt-10 md:w-4/12 ${index}`}>
         <p className="text-orange-300 text-xl italic z-10">---{subtitle}---</p>
         <h3 className="z-10 text-4xl py-3 border-y-4 mt-5 mb-10 w-full uppercase">{title}</h3>
      </div>
   );
};

export default TitleComp;