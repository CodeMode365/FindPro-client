import ReviewStats from "./ReviewStats";
import AddReview from "./AddReview";
import { Separator } from "@/components/ui/separator";
import Comments from "./Comments";

const Reviews = () => {
  return (
    <div className="container px-5 py-10 mx-auto">
      <div className="sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 border rounded-md px-2 bg-gray-100/60  pt-8 grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-4 px-2 md:px-4">
          <ReviewStats />
          <Separator />
          <AddReview />
        </div>
        <div className="col-span-12 md:col-span-8 mx-2 md:px-2">
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
