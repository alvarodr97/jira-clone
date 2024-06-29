import { ChangeEvent, useEffect, useMemo, useState } from "react";
import useBoundStore from "@/store/store";
import { SearchIssueComponentBox } from "./SearchIssueComponentBox";
import { Input } from "@/components/ui/input";
import { Issue } from "@/types/project";
import { IconSVG } from "@/components/icon-svg";

export const SearchIssueComponent = () => {
  const issues = useBoundStore((state) => state.issues);
  const filterByTitle = useBoundStore((state) => state.filterByTitle);

  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<Issue[]>([]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
  };

  const sortedIssues = useMemo(() => {
    const sortIssues = (issues: Issue[]) =>
      issues.sort(
        (a, b) =>
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
      );

    if (searchTerm) {
      return sortIssues(filterByTitle(searchTerm));
    } else {
      return sortIssues(issues).slice(0, 5);
    }
  }, [issues, searchTerm, filterByTitle]);

  useEffect(() => {
    setResults(sortedIssues);
  }, [sortedIssues]);

  return (
    <div className="flex flex-col w-full h-full overflow-y-auto mt-3">
      <Input
        type="text"
        placeholder="Search issues by title"
        value={searchTerm}
        onChange={handleSearch}
      />
      <h4 className="font-bold text-sm mb-3 mt-10">RECENT ISSUES</h4>
      <ul className="flex flex-col">
        {results.map((issue) => (
          <li key={issue.id} className="cursor-pointer">
            <SearchIssueComponentBox issue={issue} />
          </li>
        ))}
      </ul>

      {searchTerm.length != 0 && results.length === 0 && (
        <div className="flex flex-col items-center gap-y-8 mt-6">
          <div>
            <IconSVG icon="No-result" classname="h-36 w-36" />
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="font-bold">
              We couldn't find anything matching your search
            </p>
            <p className="text-sm">Try again with a different term.</p>
          </div>
        </div>
      )}
    </div>
  );
};
