import React from 'react';

import { AppShell, Button, Container, Grid, Skeleton, Stack } from '@mantine/core';
import { Header } from '@/components';
import { useOrganizations } from '@/api/organizations';

const child = <Skeleton height="900" radius="md" animate={false} />;

export const Navigator = () => {
  const { data } = useOrganizations();
  console.log(data);
  return (
    <AppShell>
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Main>
        <Container fluid mt={50}>
          <Grid>
            <Grid.Col span={2}>
              <Stack gap="md">
                <Button>1</Button>
                <Button>1</Button>
                <Button>1</Button>
              </Stack>
            </Grid.Col>
            <Grid.Col span={8}>{child}</Grid.Col>
            <Grid.Col span={2}>{child}</Grid.Col>
          </Grid>
        </Container>
      </AppShell.Main>
    </AppShell>
  );
};
