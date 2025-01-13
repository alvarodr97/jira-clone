import { useQuery, queryOptions } from "@tanstack/react-query";

import { api } from "@/lib/api-client";
import { QueryConfig } from "@/lib/react-query";
import { IssueI } from "@/types/issue";

export const getIssue = ({ issueId }: { issueId: string }): Promise<IssueI> => {
  return api.get(`/issue/${issueId}`);
};

export const getIssueQueryOptions = (issueId: string) => {
  return queryOptions({
    queryKey: ["issue", issueId],
    queryFn: () => getIssue({ issueId }),
  });
};

type UseIssueOptions = {
  issueId: string;
  queryConfig?: QueryConfig<typeof getIssueQueryOptions>;
};

export const useIssue = ({ issueId, queryConfig }: UseIssueOptions) => {
  return useQuery({
    ...getIssueQueryOptions(issueId),
    ...queryConfig,
  });
};
