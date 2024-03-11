import VerifiedBadge from "@/components/reusable/VerifiedBadge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const ProApplicationCard = () => {
  return (
    <Card className=" mt-2 bg-gray-100 hover:bg-sky-300 transition grid grid-cols-8">
      <CardHeader className="flex flex-row items-center -my-1 py-3 px-2 col-span-5">
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
      <CardContent className="col-span-3 m-0 p-0 flex items-center justify-center">
        <h2 className="text-xs">
          Applied for:
          <Badge className="font-normal ml-2">Driver</Badge>
        </h2>
      </CardContent>
    </Card>
  );
};

export default ProApplicationCard;
