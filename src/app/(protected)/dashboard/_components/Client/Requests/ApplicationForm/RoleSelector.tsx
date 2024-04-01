"use client";

import * as React from "react";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReusableCommand from "@/components/reusable/ReusableCommand";
import ReusablePopover from "@/components/reusable/ReusablePopover";

const roles = [
  {
    value: "Engineer",
    label: "Engineer",
  },
  {
    value: "Doctor",
    label: "Doctor",
  },
  {
    value: "Other",
    label: "Others",
  },
];

export default function RoleSelector() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
      <ReusablePopover
        open={open}
        setOpen={setOpen}
        trigger={
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {value
              ? roles.find((role) => role.value === value)?.label
              : "Role..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        }
      >
        <ReusableCommand
          options={roles}
          setOpen={setOpen}
          value={value}
          setValue={setValue}
        />
      </ReusablePopover>
  );
}
