import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { notifications } from '@mantine/notifications';
import { useOAuth } from '@/api';
import { useAuthStore } from '@/store';
import { Loading } from '@/components';

export const OAuthCallback: FC = () => {
  const code = new URLSearchParams(window.location.search).get('code');
  const { data, isLoading, isError, error } = useOAuth({ code });
  const navigate = useNavigate();
  const { setToken } = useAuthStore();

  useEffect(() => {
    if (data) {
      setToken(data.access_token);
      navigate('/');
    }
  }, [data, setToken, navigate]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    notifications.show({
      title: 'Error while authenticating, redirecting to login page',
      message: error.message,
    });
    navigate('/login');
  }

  return null;
};
