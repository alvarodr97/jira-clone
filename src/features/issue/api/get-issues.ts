import { queryOptions, useQuery } from "@tanstack/react-query";

import { api } from "@/lib/api-client";
import { QueryConfig } from "@/lib/react-query";
import { IssueI } from "@/types/issue";

export const getIssues = (): Promise<IssueI[]> => {
  return api.get("/issues");
};

export const getIssuesQueryOptions = () => {
  return queryOptions({
    queryKey: ["issues"],
    queryFn: () => getIssues(),
  });
};

type UseIssuesOptions = {
  queryConfig?: QueryConfig<typeof getIssuesQueryOptions>;
};

export const useIssues = ({ queryConfig }: UseIssuesOptions = {}) => {
  return useQuery({
    ...getIssuesQueryOptions(),
    ...queryConfig,
  });
};
