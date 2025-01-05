import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import useBoundStore from "@/store/store";

export const IssueTitle = ({ title, id }: { title: string; id: string }) => {
  const updateIssue = useBoundStore((state) => state.updateIssue);
  const [term, setTerm] = useState(title);

  function onBlur() {
    if (term.trim() === title.trim()) return;
    updateIssue(id, { title: term });
  }

  return (
    <TextareaAutosize
      className="w-full text-2xl p-1 font-medium resize-none hover:bg-gray-300/40 focus:hover:bg-white"
      value={term}
      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
        setTerm(e.target.value)
      }
      onBlur={onBlur}
      aria-label="Title"
    />
  );
};
