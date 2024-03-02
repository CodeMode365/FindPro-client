import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";
import CommentCard from "./CommentCard";
import { Button } from "@/components/ui/button";

const Comments = () => {
  return (
    <>
      <h1 className="text-black text-lg font-semibold mb-1">Recent Reviews</h1>
      <ScrollArea className="border-none h-[70vh]">
        <CommentCard />
        <CommentCard />
        <CommentCard />
      </ScrollArea>
      <div className="w-full flex items-center">
        <Button
          className="hover:underline hover:text-primary mx-auto my-2"
          variant={"outline"}
          size={"sm"}
        >
          Load More
        </Button>
      </div>
    </>
  );
};

export default Comments;
