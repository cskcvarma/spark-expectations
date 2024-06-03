import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@/api';
import { useAuthStore } from '@/store';
import { repoQueryKeys } from '@/api/repos/repo-query-keys';

export const getRepoFn = async (
  owner: string | undefined,
  repoName: string | undefined,
  path = ''
) => {
  const response = await apiClient.get(`repos/${owner}/${repoName}/contents/${path}`, {
    headers: {
      Authorization: `Bearer ${useAuthStore.getState().token}`,
    },
  });

  return response.data;
};

export const useRepo = (owner: string | undefined, repoName: string | undefined, path = '') =>
  useQuery({
    queryKey: repoQueryKeys.detail([owner, repoName, path]),
    queryFn: () => getRepoFn(owner, repoName, path),
  });
