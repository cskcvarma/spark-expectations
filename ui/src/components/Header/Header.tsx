import React, { FC } from 'react';
import { AppShellHeader, Button, Container, Group } from '@mantine/core';
import { useAuthStore } from '@/store';
import { ReposList } from './ReposList';
import { UserMenu } from './UserMenu';
import './Header.css';

export const Header2: FC = () => {
  const { token } = useAuthStore((state) => ({
    token: state.token,
  }));

  const tokenExists = !!token;

  return (
    <AppShellHeader data-testid="header">
      <Group h="100%" px="md" justify="space-between">
        <div>Logo</div>

        <ReposList />

        <div>
          <h4> Spark Expectations</h4>
        </div>

        {/*<Button name="open-token-button" data-testid="open-token-button" onClick={openModal}>*/}
        {/*  {tokenExists ? 'Update Token' : 'Enter Token'}*/}
        {/*</Button>*/}

        <UserMenu />
      </Group>
    </AppShellHeader>
  );
};

export const Header: FC = () => {
  const { openModal, token } = useAuthStore((state) => ({
    token: state.token,
    openModal: state.openModal,
  }));

  const tokenExists = !!token;

  return (
    <div className="header">
      <Container className="mainSection" size="md">
        <Group justify="space-between">
          <div>LOGO</div>
          <UserMenu />
        </Group>
      </Container>
    </div>
  );
};
