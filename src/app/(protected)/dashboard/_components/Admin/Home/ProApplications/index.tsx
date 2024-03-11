import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ProApplicationCard from "./ProApplicationCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const ProApplication = () => {
  return (
    <Card className=" pb-2">
      <CardHeader className="-mt-2">
        <CardTitle className="text-lg text-center mt-2 -mb-4">
          Recent Professionals Application
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4">
        <ScrollArea className="h-80 lg:h-56">
          {Array.from({ length: 10 }).map((_, i) => (
            <Link href={"#"} key={"app-item-" + i}>
              <ProApplicationCard />
            </Link>
          ))}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <Button variant={"link"}>View all</Button>
      </CardFooter>
    </Card>
  );
};

export default ProApplication;
