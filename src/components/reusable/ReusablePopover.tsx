"use client";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { ChevronsUpDown } from "lucide-react";

interface iProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ReusablePopover = ({ trigger, children, setOpen, open }: iProps) => {
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">{children}</PopoverContent>
    </Popover>
  );
};

export default ReusablePopover;
