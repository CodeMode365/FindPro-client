import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import ReviewDialog from "./ReviewDialog";

const AddReview = () => {
  return (
    <Card className="my-4">
      <CardHeader className="p-4">
        <CardTitle className="text-md">Share your experience</CardTitle>
        <CardDescription>
          Add rating and share your thoughts about the service of the current
          professional.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <ReviewDialog>
          <Button className="w-full bg-gray-50 border " variant={"ghost"}>
            Write a review
          </Button>
        </ReviewDialog>
      </CardFooter>
    </Card>
  );
};

export default AddReview;
