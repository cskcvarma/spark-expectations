import React from 'react';

import { AppShell, Container, Grid, Skeleton, Stack } from '@mantine/core';
import { Header } from '@/components';
import { ReposList } from '../ReposList';

const child = <Skeleton height="900" radius="md" animate={false} />;

export const Navigator = () => (
  <AppShell>
    <AppShell.Header>
      <Header />
    </AppShell.Header>
    <AppShell.Main>
      <Container fluid mt={50}>
        <Grid>
          <Grid.Col span={2}>
            <ReposList />
          </Grid.Col>
          <Grid.Col span={8}>{child}</Grid.Col>
          <Grid.Col span={2}>{child}</Grid.Col>
        </Grid>
      </Container>
    </AppShell.Main>
  </AppShell>
);
