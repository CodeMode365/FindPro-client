import Star from "@/components/reusable/Star";
import AddReview from "./AddReview";
import { Separator } from "@radix-ui/react-separator";

const ReviewStats = () => {
  const statsData = [
    { st: 1, perc: 8 },
    { st: 2, perc: 12 },
    { st: 3, perc: 34 },
    { st: 4, perc: 22 },
    { st: 5, perc: 78 },
  ];
  return (
    <div className="px-4 mb-4">
      <div>
        <h1 className="font-semibold text-lg text-black">Customer Review</h1>
      </div>

      <div className="flex items-center">
        <div className="flex">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star varient="outlined" />
        </div>
        <p className="ml-2 text-sm">Based on 1624 Reviews</p>
      </div>
      <div className="text-gray-400">
        {statsData.reverse().map((data, i) => {
          const { perc, st } = data;
          return (
            <div className="flex items-center mt-2" key={"stats-item-" + i}>
              <a
                href="#"
                className="flex  items-center text-sm font-medium hover:underline"
              >
                {st} <Star className="ml-2" />
              </a>
              <div className="w-3/4 h-3 mx-4 bg-gray-200 rounded-lg ">
                <div
                  className={`h-3 bg-yellow-400 rounded-lg`}
                  style={{ width: `${perc}%` }}
                />
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {perc}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReviewStats;
