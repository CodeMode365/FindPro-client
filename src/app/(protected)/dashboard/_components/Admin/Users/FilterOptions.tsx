import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FilterOptions = () => {
  return (
    <>
      <div className="mx-2">
        <Select>
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="User Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="professional">Professional</SelectItem>
            <SelectItem value="client">Client</SelectItem>
            <SelectItem value="both">P/C</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="mx-2">
        <Select>
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Work type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="remote">Remote</SelectItem>
            <SelectItem value="physical">Physicals</SelectItem>
            <SelectItem value="both">P/R</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="mx-2">
        <Select>
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Verification" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="verified">Verified</SelectItem>
            <SelectItem value="unverified">Unverified</SelectItem>
            <SelectItem value="both">V/U</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default FilterOptions;
