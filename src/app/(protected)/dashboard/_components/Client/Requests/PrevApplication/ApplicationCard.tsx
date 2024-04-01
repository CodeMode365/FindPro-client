import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const ApplicationCard = ({
  status,
}: {
  status: "Pending" | "Success" | "Rejected";
}) => {
  const statusClass = () => {
    switch (status) {
      case "Pending":
        return "bg-yellow-500 hover:bg-yellow-500/80";
      case "Success":
        return "bg-emerald-500 hover:bg-emerald-500/80";
      case "Rejected":
        return "bg-rose-500 hover:bg-rose-500/80";
      default:
        return "bg-primary hover:bg-primary/80";
    }
  };
  return (
    <Card className="grid grid-cols-12 p-2 hover:bg-sky-100 tex cursor-pointer transition -pb-2 mb-2 ">
      <CardHeader className="col-span-9 p-0">
        <CardTitle className="text-md">Application fo Driver</CardTitle>
        <CardDescription className="leading-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit...
        </CardDescription>
      </CardHeader>
      <CardContent className="col-span-3 flex items-center  flex-col p-1">
        <Badge className="my-2 ">Driver</Badge>
        <Badge className={cn(statusClass())}>{status}</Badge>
      </CardContent>
    </Card>
  );
};

export default ApplicationCard;
