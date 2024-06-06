import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@/api';
import { useRepoStore } from '@/store';

const fetchCommitsFn = async (): Promise<any[]> => {
  const { selectedRepo } = useRepoStore.getState();
  const branch: Branch = useRepoStore.getState().selectedBranch;
  const response = await apiClient.get(
    `/repos/${selectedRepo?.owner.login}/${selectedRepo?.name}/commits?sha=${branch.commit.sha}`
  );
  return response.data;
};

export const useCommits = (isEnabled = true) =>
  useQuery({
    queryFn: fetchCommitsFn,
    queryKey: ['Github', 'commits'],
    enabled: isEnabled,
  });
