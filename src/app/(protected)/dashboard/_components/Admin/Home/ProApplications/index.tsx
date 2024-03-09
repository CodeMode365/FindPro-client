import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import ProApplicationCard from "./ProApplicationCard";
import { Button } from "@/components/ui/button";

const ProApplication = () => {
  return (
    <Card className=" pb-2">
      <CardHeader className="-mt-2">
        <CardTitle className="text-lg text-center">Professionals Application</CardTitle>
      </CardHeader>
      <CardContent className="">
        <ScrollArea className="h-56">
          <ProApplicationCard />
          <ProApplicationCard />
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <Button variant={"link"}>View all</Button>
      </CardFooter>
    </Card>
  );
};

export default ProApplication;
