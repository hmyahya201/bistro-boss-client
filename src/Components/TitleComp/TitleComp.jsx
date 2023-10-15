
const TitleComp = ({title, subtitle, index}) => {
   return (
      <div className={`text-center mx-auto mt-10 md:w-4/12 ${index}`}>
         <p className="text-orange-300 xsm:text-sm sm:text-xl italic z-10">---{subtitle}---</p>
         <h3 className="z-10 xsm:text-xl sm:text-2xl md:text-4xl xsm:py-1 md:py-3 border-y-4 xsm:mt-2 md:mt-5 mb-10 w-full uppercase">{title}</h3>
      </div>
   );
};

export default TitleComp;