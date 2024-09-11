import { useState } from "react";
import useBoundStore from "@/store/store";
import { SearchIssueComponentBox } from "./SearchIssueComponentBox";
import { Input } from "@/components/ui/input";
import { IssueI } from "@/types/issue";
import { IconSVG } from "@/components/icon-svg";

interface Props {
  setIsSearchBoxOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SearchIssueComponent = ({ setIsSearchBoxOpen }: Props) => {
  const issues = useBoundStore((state) => state.issues);
  const filterByTitle = useBoundStore((state) => state.filterByTitle);

  const getLastFive = () => {
    return issues
      .sort(
        (a, b) =>
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
      )
      .slice(0, 5);
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<IssueI[]>(getLastFive());

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term) {
      const filteredResults = filterByTitle(term).sort(
        (a, b) =>
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
      );
      setResults(filteredResults);
    } else {
      setResults(getLastFive());
    }
  };

  return (
    <div className="flex flex-col w-full h-full overflow-y-auto mt-3">
      {/* Search bar */}
      <Input
        type="text"
        placeholder="Search issues by title"
        value={searchTerm}
        onChange={handleSearch}
      />
      <h4 className="font-bold text-sm mb-3 mt-10">RECENT ISSUES</h4>

      {searchTerm.length != 0 && results.length === 0 ? (
        // No results
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
      ) : (
        // Results
        <ul
          className="flex flex-col"
          onClick={() => {
            setIsSearchBoxOpen(false);
          }}
        >
          {results.map((issue) => (
            <li key={issue.id} className="cursor-pointer">
              <SearchIssueComponentBox issue={issue} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
