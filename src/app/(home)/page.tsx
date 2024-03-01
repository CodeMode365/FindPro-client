import Hero from "./_components/Hero";
import Populars from "./_components/Populars";
import FAQ from "./_components/FAQ";
import Trending from "./_components/Trending";
import CategoryCarousel from "./_components/Categories/CategoryCarousel";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="w-10/12 mx-auto">
        <CategoryCarousel direction="forward" />
        <CategoryCarousel direction="backward" />
      </div>
      <Populars />
      <Trending />
      <FAQ />
    </>
  );
};

export default Home;
