import React from 'react';

import { AppShell, Container, Grid, Stack } from '@mantine/core';
import { Header } from '@/components';
import { ReposList } from '../ReposList';
import { FilesList } from '../FilesList';
import { RulesTable } from '../RulesTable/RulesTable';
import { CommitsList } from '../CommitsList/CommitsList';

export const Navigator = () => (
  <AppShell>
    <AppShell.Header>
      <Header />
    </AppShell.Header>
    <AppShell.Main>
      <Container fluid mt={50}>
        <Grid>
          <Grid.Col span={2}>
            <Stack>
              <ReposList />
              <FilesList />
            </Stack>
          </Grid.Col>
          <Grid.Col span={8}>
            <RulesTable />
          </Grid.Col>
          <Grid.Col span={2}>
            <CommitsList />
          </Grid.Col>
        </Grid>
      </Container>
    </AppShell.Main>
  </AppShell>
);
