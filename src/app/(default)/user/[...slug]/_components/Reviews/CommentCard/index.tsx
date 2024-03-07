import LoadingUi from "@/components/reusable/LoadingUi";
import Star from "@/components/reusable/Star";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MoreVertical } from "lucide-react";
import React from "react";
import CardActions from "./CardActions";

const CommentCard = () => {
  return (
    <Card className="pb-4 mb-4">
      <CardHeader className="flex flex-row items-start justify-between">
        <div className="flex flex-row items-center">
          <Avatar className="h-14 w-14">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="ml-2">
            <CardTitle className="text-md">Rajesh Hamal</CardTitle>
            <span className="flex">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star varient="unfilled" />
            </span>
            <CardDescription className="my-1">Dec 23, 2023</CardDescription>
          </div>
        </div>
        <CardActions>
          <button>
            <MoreVertical className="float-right text-gray-800" />
          </button>
        </CardActions>
      </CardHeader>

      <CardContent className="-mt-2 max-h-24 overflow-hidden relative">
        <div className="hidden">
          <LoadingUi />
        </div>
        <p className="text-gray-500 overflow-hidden">
          {` Hello this guy is very superb. You may really want to go and work with
          him. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Inventore, expedita. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quaerat asperiores ratione harum, voluptate impedit
          odit rem cumque temporibus sint ad sequi eum ut obcaecati quas
          aspernatur optio quia molestias velit! Lorem ipsum dolor sit amet
          sed illo temporibus error officiis fugiat quo eos eligendi, nihil sit
          laudantium tempore quibusdam quam fugit eaque reprehenderit!`.slice(
            0,
            300
          ) + "..."}
        </p>
        <button className="text-primary hover:underline">Read more</button>
      </CardContent>
    </Card>
  );
};

export default CommentCard;
