import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MdVerified } from "react-icons/md";

interface iProps {
  size?: number;
}

const VerifiedBadge = ({ size = 24 }: iProps) => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <span className="h-auto w-auto rounded-full ">
          <MdVerified className="text-primary" size={size} />
        </span>
      </TooltipTrigger>
      <TooltipContent className="text-primary">Verified</TooltipContent>
    </Tooltip>
  );
};

export default VerifiedBadge;
