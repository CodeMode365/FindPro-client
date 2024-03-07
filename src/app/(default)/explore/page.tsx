import Professionals from "./_components/Professionals";
import BannerCarousel from "./_components/Banner/BannerCrousel";
import Paginator from "./_components/Paginator";

const Explore = () => {
  

  return (
    <div className="w-full md:ml-4 md:p-2 ">
      <div className=" h-auto col-span-full rounded-md shadow-lg mb-4">
        <BannerCarousel />
      </div>

      <div className="grid grid-cols-2 xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6  px-4 md:px-0 my-4">
        <Professionals />
      </div>

      <div className="col-span-full">
        <Paginator />
      </div>
    </div>
  );
};

export default Explore;
