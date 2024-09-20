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
import { IssuePriorityEnum } from "@/types/issue";
import { IconSVG } from "../../../components/icon-svg";
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

  const handleChange = (value: IssuePriorityEnum) => {
    setSelectedPriority(value);
    updateIssue(id, { priority: value });
  };

  return (
    <>
      <div className="mt-6 mb-1 uppercase text-textMedium text-13 font-bold">
        Priority
      </div>
      <Select onValueChange={handleChange} defaultValue={selectedPriority}>
        <SelectTrigger
          className={`w-fit focus-visible:ring-0 border-none bg-[#f4f5f7] hover:bg-[#eceef0]`}
          isArrow={false}
        >
          <SelectValue
            placeholder={selectedPriority}
            defaultValue={selectedPriority}
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {ISSUES_PRIORITY.map(({ priority, icon, color }) => (
              <SelectItem
                key={priority}
                value={priority}
                className={`p-2 ${selectedPriority === priority && "hidden"}`}
                isChecked={false}
              >
                <div className="flex flex-row space-x-2 items-center">
                  <IconSVG icon={icon} classname="w-6 h-6" color={color} />{" "}
                  <span>{priority}</span>
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};
