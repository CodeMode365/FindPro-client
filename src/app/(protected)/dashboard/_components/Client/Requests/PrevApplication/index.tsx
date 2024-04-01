import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ApplicationCard from "./ApplicationCard";
import { ScrollArea } from "@/components/ui/scroll-area";

const PrevApplications = () => {
  return (
    <Card className="col-span-12 md:col-span-4">
      <CardHeader>
        <CardTitle>Previous Applications</CardTitle>
      </CardHeader>

      <CardContent className="px-2">
        <ScrollArea className="h-96">
          <ApplicationCard status="Pending" />
          <ApplicationCard status="Success" />
          <ApplicationCard status="Rejected" />
          <ApplicationCard status="Rejected" />
          <ApplicationCard status="Success" />
          <ApplicationCard status="Rejected" />
          <ApplicationCard status="Pending" />
          <ApplicationCard status="Rejected" />
        </ScrollArea>
      </CardContent>

      <CardFooter></CardFooter>
    </Card>
  );
};

export default PrevApplications;
