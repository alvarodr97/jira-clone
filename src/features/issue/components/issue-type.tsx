import { useState } from "react";
import { useUpdateIssue } from "../api/update-issue";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IssueTypeEnum } from "@/types/issue";
import { IconSVG } from "../../../components/icon-svg";

export const IssueType = ({
  issueType,
  id,
}: {
  issueType: IssueTypeEnum;
  id: string;
}) => {
  const [selectedType, setSelectedType] = useState<IssueTypeEnum>(issueType);
  const { mutate } = useUpdateIssue();

  const handleChange = (value: IssueTypeEnum) => {
    setSelectedType(value);
    mutate({ data: { type: value }, issueId: id });
  };

  return (
    <div className="ml-[-10px]">
      <Select onValueChange={handleChange} defaultValue={selectedType}>
        <SelectTrigger
          className={`w-fit focus-visible:ring-0 border-none hover:bg-gray-300/40 focus:hover:bg-white`}
          isArrow={false}
          aria-label="Issue type"
        >
          <SelectValue>
            <div className="flex flex-row uppercase font-semibold text-textMedium items-center">
              <IconSVG icon={selectedType} classname="h-6 w-6 mr-1.5" />
              {selectedType} {" - "} {id}
            </div>
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {Object.values(IssueTypeEnum).map((option) => (
              <SelectItem
                key={option}
                value={option}
                className={`p-2 ${selectedType === option && "hidden"}`}
              >
                <div className="flex flex-row uppercase font-semibold text-textMedium items-center">
                  <IconSVG icon={option} classname="h-6 w-6 mr-1" />
                  {option}
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
