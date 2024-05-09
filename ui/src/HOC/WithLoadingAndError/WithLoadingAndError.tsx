import React, { ComponentType, FC } from 'react';
import { Alert } from '@mantine/core';
import { Loading } from '@/components';

interface WithLoadingAndErrorProps {
  isLoading: boolean;
  error: string | null;
}

// TODO: Not using this, as I dont want to get into prop drilling. Keeping it for reference,
//  need to investigate other venues
export const withLoadingAndError = <T extends JSX.IntrinsicAttributes>(
  WrappedComponent: ComponentType<T>
) => {
  const WithLoadingAndError: FC<T & WithLoadingAndErrorProps> = ({
    isLoading,
    error,
    ...props
  }) => {
    if (isLoading) {
      return <Loading />;
    }

    if (error) {
      return <ErrorComponent />; // You can style this or handle different types of errors differently
    }

    return <WrappedComponent {...(props as unknown as T)} />;
  };
};

const ErrorComponent = () => (
  <Alert title="Error" color="red">
    Error!
  </Alert>
);
