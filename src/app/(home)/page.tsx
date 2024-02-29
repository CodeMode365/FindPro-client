import Hero from "./_components/Hero";
import Populars from "./_components/Populars";
import Categories from "./_components/Categories";
import FAQ from "./_components/FAQ";
import Trending from "./_components/Trending";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="w-10/12 mx-auto">
        <Categories direction="forward"  />
        <Categories direction="backward" />
      </div>
      <Populars />
      <Trending />
      <FAQ />
    </>
  );
};

export default Home;
