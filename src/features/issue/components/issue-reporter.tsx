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

export const IssueReporter = ({
  issueReporter,
  id,
}: {
  issueReporter: string;
  id: string;
}) => {
  const [selectedReporter, setSelectedReporter] = useState(issueReporter);
  const users = useBoundStore((state) => state.users);
  const updateIssue = useBoundStore((state) => state.updateIssue);

  const handleChange = (value: string) => {
    setSelectedReporter(value);
    updateIssue(id, { reporterId: value });
  };

  return (
    <>
      <div className="mt-6 mb-1 uppercase text-textMedium text-13 font-bold">
        Reporter
      </div>
      <Select onValueChange={handleChange} defaultValue={selectedReporter}>
        <SelectTrigger
          className={`w-fit focus-visible:ring-0 border-none bg-[#f4f5f7] hover:bg-[#eceef0]`}
          isArrow={false}
          aria-label="Reporter"
        >
          <SelectValue
            placeholder={selectedReporter}
            defaultValue={selectedReporter}
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {users.map((option) => (
              <SelectItem
                key={option.id}
                value={option.id}
                className={`p-2 ${selectedReporter === option.id && "hidden"}`}
              >
                <div className="flex flex-row gap-x-2">
                  <img
                    src={option.avatarUrl}
                    alt="Reporter image"
                    className="rounded-full w-[20px] h-[20px]"
                  />
                  {option.name}
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};
