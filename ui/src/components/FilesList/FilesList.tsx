import { useRepoStore } from '@/store';
import { useRepo } from '@/api';
import { Loading } from '@/components';

export const FilesList = () => {
  const { selectedRepo } = useRepoStore();
  const { data, isLoading, isError } = useRepo(selectedRepo?.owner?.login, selectedRepo?.name);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <>
      <div>{selectedRepo?.name}</div>
      {data?.map((file: any) => {
        if (file.name.endsWith('.txt')) {
          return (
            <div key={file.name}>
              <a href={file}>{file.name}</a>
            </div>
          );
        }
      })}
    </>
  );
};
