import { useState } from "react";
import useBoundStore from "@/store/store";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IssueStatusEnum, IssueStatusDisplay } from "@/types/issue";

const getBackgroundColorClass = (status: string) => {
  switch (status) {
    case "Done":
      return "bg-green-500 text-white";
    case "In Progress":
      return "bg-blue-500 text-white";
    default:
      return "bg-[#f4f5f7]";
  }
};

export const IssueStatus = ({ issueStatus, id }: { issueStatus: string, id: string }) => {
  const [selectedStatus, setSelectedStatus] = useState(issueStatus);
  const updateIssue = useBoundStore((state) => state.updateIssue);

  const handleChange = (value: IssueStatusEnum) => {
    setSelectedStatus(value);
    updateIssue(id, { status: value })
  };

  return (
    <>
      <div className="mt-6 mb-1 uppercase text-textMedium text-13 font-bold">
        Status
      </div>
      <Select onValueChange={handleChange}>
        <SelectTrigger
          className={`w-fit focus-visible:ring-0 font-semibold border-none uppercase ${getBackgroundColorClass(
            selectedStatus
          )}`}
          isArrow={false}
        >
          <SelectValue
            placeholder={selectedStatus}
            defaultValue={selectedStatus}
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {Object.entries(IssueStatusDisplay).map(([value, description]) => (
              <SelectItem
                key={value}
                value={value}
                className={`uppercase ${selectedStatus === value && "hidden"}`}
                isChecked={false}
              >
                {description}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};
