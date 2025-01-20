import { useMutation, useQueryClient } from "@tanstack/react-query";

import { api } from "@/lib/api-client";
import { MutationConfig } from "@/lib/react-query";
import { IssueI } from "@/types/issue";
import { getIssueQueryOptions } from "./get-issue";
import { getIssuesQueryOptions } from "./get-issues";
import { toast } from "sonner";

export const updateIssue = ({
  data,
  issueId,
}: {
  data: Partial<IssueI>;
  issueId: string;
}): Promise<IssueI> => {
  return api.patch(`/issue/${issueId}`, data);
};

type UseUpdateIssueOptions = {
  mutationConfig?: MutationConfig<typeof updateIssue>;
};

export const useUpdateIssue = ({
  mutationConfig,
}: UseUpdateIssueOptions = {}) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...restConfig } = mutationConfig || {};

  return useMutation({
    onSuccess: async (data, ...args) => {
      await queryClient.refetchQueries({
        queryKey: getIssueQueryOptions(data.id).queryKey,
      });
      await queryClient.invalidateQueries({
        queryKey: getIssuesQueryOptions().queryKey,
      });
      await queryClient.refetchQueries({
        queryKey: getIssuesQueryOptions().queryKey,
        exact: true,
      });

      toast.success(`Issue updated successfully`);

      onSuccess?.(data, ...args);
    },
    ...restConfig,
    mutationFn: updateIssue,
  });
};
