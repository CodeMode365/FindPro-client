import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import clsx from "clsx";
import { Users, LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

interface iProps {
  colorMode: "blue" | "green" | "red" | "yellow";
  icon: LucideIcon | IconType;
}
const StatCard = ({ colorMode, icon: Icon }: iProps) => {
  const generatateColor = () => {
    switch (colorMode) {
      case "blue":
        return "bg-sky-200 text-sky-600";
      case "green":
        return "bg-emerald-200 text-emerald-600";
      case "red":
        return "bg-rose-200 text-rose-600";
      case "yellow":
        return "bg-amber-200 text-amber-600";
    }
  };
  return (
    <Card
      className={clsx("border grid grid-cols-4 grid-rows-2", generatateColor())}
    >
      <CardHeader className="-mb-4 col-span-3">
        <CardTitle className="text-3xl">203</CardTitle>
        <CardDescription className="text-lg">Total Users</CardDescription>
      </CardHeader>
      <div className="row-span-2 my-auto">
        <Icon size={48} />
      </div>
      <CardContent className="col-span-3">
        <h2 className="text-2xl">+30%</h2>
        <span className="text-muted-foreground text-lg">This month</span>
      </CardContent>
    </Card>
  );
};

export default StatCard;
