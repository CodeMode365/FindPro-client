import TrendingCarousel from "./TrendingCarousel";

const Trending = () => {
  return (
    <>
      <div className="mx-auto text-center mb-4 max-w-lg">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Trending <span className="text-primary">Professionals</span>
        </h2>

        <p className="mt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
          aliquam doloribus nesciunt eos fugiat.
        </p>
      </div>

      <div className="mb-4 w-10/12 md:w-11/12 mx-auto">
       <TrendingCarousel/>
      </div>
    </>
  );
};

export default Trending;
