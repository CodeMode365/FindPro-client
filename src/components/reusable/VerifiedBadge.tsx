import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MdVerified } from "react-icons/md";

const VerifiedBadge = () => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <span className="h-auto w-auto rounded-full ">
          <MdVerified className="text-primary text-2xl" />
        </span>
      </TooltipTrigger>
      <TooltipContent className="text-primary">Verified</TooltipContent>
    </Tooltip>
  );
};

export default VerifiedBadge;
