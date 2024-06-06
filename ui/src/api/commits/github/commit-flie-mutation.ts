import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Buffer } from 'buffer';
import { useAuthStore, useRepoStore } from '@/store';
import { apiClient } from '@/api';

// @ts-ignore
export const commitChangesFn = async ({ content }) => {
  const { selectedRepo, selectedBranch, selectedFile } = useRepoStore.getState();
  console.log(selectedFile, 'im executed');

  const commit = await apiClient.put(
    `/repos/${selectedRepo?.owner.login}/${selectedRepo?.name}/contents/${selectedFile.path}`,
    {
      message: 'Update rule_changer.yaml',
      content: Buffer.from(content).toString('base64'),
      sha: selectedFile.sha,
      branch: selectedBranch?.name,
    },
    {
      headers: {
        Authorization: `Bearer ${useAuthStore.getState().token}`,
      },
    }
  );

  console.log(commit.data, 'asdfs');
};

export const useCommitChanges = () => {
  const queryClient = useQueryClient();
  return useMutation(commitChangesFn, {
    onSuccess: () => {
      queryClient.invalidateQueries('commits');
    },
    onError: (err) => {
      console.log('error', err);
    },
  });
};
