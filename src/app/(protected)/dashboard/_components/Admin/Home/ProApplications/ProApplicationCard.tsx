import VerifiedBadge from "@/components/reusable/VerifiedBadge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ProApplicationCard = () => {
  return (
    <Card className=" mt-2">
      <CardHeader className="flex flex-row items-center -my-2">
        <span className="mx-2 cursor-pointer relative">
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </span>
        <span>
          <CardTitle className="text-md leading-tight">
            Ramesh Poudel
            <span className="ml-1">
              <VerifiedBadge size={18} />
            </span>
          </CardTitle>
          <CardDescription className="text-xs">
            Kathmandu, Nepal
          </CardDescription>
        </span>
      </CardHeader>
      <CardContent className="-mt-4">
        <h3 className="text-sm text-muted-foreground">
          Applided for:
          <span className="text-primary"> Driver</span>
        </h3>
      </CardContent>
      <CardFooter className="-mt-4 -mb-2">
        <Button
          size={"sm"}
          variant={"outline"}
          className="text-emerald-500 hover:bg-emerald-200 hover:text-emerald-700"
        >
          Accept
        </Button>
        <Button
          size={"sm"}
          variant={"outline"}
          className="text-rose-500 hover:bg-rose-200 hover:text-rose-700 ml-2"
        >
          Reject
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProApplicationCard;
