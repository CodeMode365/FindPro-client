import PopularCard from "./PopularCard";
import Link from "next/link";
import { popularsdata } from "@/components/dummy/populars";
import { generatePathname } from "@/lib/helpers";

const Populars = () => {
  return (
    <section className="">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            <span className="text-primary">Popular</span> Categories
          </h2>

          <p className="mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
            fugit consequuntur saepe laborum.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {popularsdata.map((item, i) => (
            <Link
              key={`popular-card-item-${i}`}
              className="block rounded-xl border p-8 shadow-xl transition hover:border-primary/30 hover:shadow-primary/30"
              href={`/explore?category=${generatePathname(item.title)}`}
            >
              <PopularCard {...item} />
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/explore"
            className="inline-block rounded bg-primary text-white px-12 py-3 text-sm font-medium transition hover:bg-primary/80"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Populars;
