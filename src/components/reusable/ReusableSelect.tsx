import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface iProps {
  data: {
    value: string;
    label: string;
  }[];
  title?: string;
  selectValue: string;
}

export default function ReusableSelect({
  data,
  title,
  selectValue,
}: iProps) {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={selectValue} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {title && <SelectLabel>{title}</SelectLabel>}
          {data.map((Item, i) => (
            <SelectItem key={"select-item-" + i} value={Item.value}>
              {Item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
