import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@/api';
import { useAuthStore } from '@/store';
import { organizationQueryKeys } from '../query-keys';

export const getOrganizationsFn = async () => {
  const response = await apiClient.get(
    `/repos/${useAuthStore.getState().username}/spark-expectations/contents/ui/test-utils/rules.yaml`,
    {
      headers: {
        Authorization: `Bearer ${useAuthStore.getState().token}`,
      },
    }
  );

  return response.data;
};

export const useOrganizations = () =>
  useQuery({
    queryKey: organizationQueryKeys.all,
    queryFn: getOrganizationsFn,
  });
