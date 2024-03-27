import React from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
  CommandItem,
} from "@/components/ui/command";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface iProps<T> {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  options: T;
}

const ReusableCommand = ({
  setOpen,
  value,
  setValue,
  options,
}: iProps<{ label: string; value: string }[]>) => {
  return (
    <Command>
      <CommandInput />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions" className="px-2">
          {options.map((opt) => (
            <CommandItem
              key={opt.value}
              value={opt.value}
              onSelect={(currentValue) => {
                setValue(currentValue === value ? "" : currentValue);
                setOpen(false);
              }}
              className="data-[disabled]:pointer-events-auto data-[disabled]:opacity-100"
            >
              <Check
                className={cn(
                  "mr-2 h-4 w-4",
                  value === opt.value ? "opacity-100" : "opacity-0"
                )}
              />
              {opt.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default ReusableCommand;
