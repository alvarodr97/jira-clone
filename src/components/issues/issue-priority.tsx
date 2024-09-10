import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useBoundStore from "@/store/store";
import { IssuePriority as IssuePriorityType } from "@/types/project";
import { IconSVG } from "../icon-svg";
import { ISSUES_PRIORITY } from "@/constants/issues-constants";

export const IssuePriority = ({
  issuePriority,
  id,
}: {
  issuePriority: string;
  id: string;
}) => {
  const [selectedPriority, setSelectedPriority] = useState(issuePriority);
  const updateIssue = useBoundStore((state) => state.updateIssue);

  const handleChange = (value: IssuePriorityType) => {
    setSelectedPriority(value);
    updateIssue(id, { priority: value });
  };

  // TODO: Fix select
  return (
    <>
      <div className="mt-6 mb-1 uppercase text-textMedium text-13 font-bold">
        Priority
      </div>
      <Select onValueChange={handleChange}>
        <SelectTrigger
          className={`w-fit focus-visible:ring-0 font-semibold border-none uppercase bg-[#f4f5f7]`}
          isArrow={false}
        >
          <SelectValue
            placeholder={selectedPriority}
            defaultValue={selectedPriority}
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {
              ISSUES_PRIORITY.map(({priority, icon, color}) => (
                <SelectItem key={priority} value={priority} className={`${selectedPriority === priority && "hidden"}`} isChecked={false}>
                  <span className="flex flex-row">
                    <IconSVG icon={icon} classname="w-6 h-6" color={color} /> {priority} 
                  </span>
                  </SelectItem>
              ))
            }
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};
