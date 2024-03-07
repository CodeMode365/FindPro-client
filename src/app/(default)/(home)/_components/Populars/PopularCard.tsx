import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import React, { FC } from "react";
import { IconType } from "react-icons";

interface iProps {
  Icon: LucideIcon | IconType;
  title: string;
  content: string;
}

const PopularCard: FC<iProps> = ({ Icon, title, content }) => {
  return (
    <Card className="border-none">
      <div className="max-w-max min-h-max bg-primary border border-green-500 flex p-[4px] rounded-full">
        <Icon className="text-white" />
      </div>
      <CardTitle className="mt-1 text-xl font-bold">{title}</CardTitle>
      <CardDescription className="mt-1 text-sm text-black/50 h-20 text-ellipsis">
        {content}
      </CardDescription>
    </Card>
  );
};

export default PopularCard;
