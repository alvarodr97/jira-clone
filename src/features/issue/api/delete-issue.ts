import { useMutation, useQueryClient } from "@tanstack/react-query";

import { api } from "@/lib/api-client";
import { MutationConfig } from "@/lib/react-query";
import { getIssuesQueryOptions } from "./get-issues";

export const deleteIssue = ({ issueId }: { issueId: string }) => {
  return api.delete(`/issue/${issueId}`);
};

type UseDeleteIssueOptions = {
  mutationConfig?: MutationConfig<typeof deleteIssue>;
};

export const useDeleteIssue = ({
  mutationConfig,
}: UseDeleteIssueOptions = {}) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...restConfig } = mutationConfig || {};

  return useMutation({
    onSuccess: async (...args) => {
      await queryClient.invalidateQueries({
        queryKey: getIssuesQueryOptions().queryKey,
      });
      await queryClient.refetchQueries({
        queryKey: getIssuesQueryOptions().queryKey,
        exact: true,
      });

      onSuccess?.(...args);
    },
    ...restConfig,
    mutationFn: deleteIssue,
  });
};
