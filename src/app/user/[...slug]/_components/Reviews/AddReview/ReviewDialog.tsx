import Star from "@/components/reusable/Star";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import StarRater from "./StarRater";

const ReviewDialog = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-[90vw] sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Write your experience</DialogTitle>
          <DialogDescription>
            Share your experience with the current person so that others can
            also read the review before hiring them.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-2">
          <StarRater />
          <Textarea className="" placeholder="Write your review here!" />
        </div>
        <DialogFooter>
          <Button type="submit" size={"sm"}>
            Post review
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ReviewDialog;
