import React from 'react';
import { List, ListItem, Text, Container, Title } from '@mantine/core';
import { useCommits } from '@/api/commits/github/use-commits';
import { Loading } from '@/components';
import { useRepoStore } from '@/store';

export const CommitsList = () => {
  const { selectedBranch } = useRepoStore((state) => ({ selectedBranch: state.selectedBranch }));
  const { data, error, isLoading } = useCommits(!!selectedBranch);
  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Text color="red">Error: {error.message}</Text>;
  }

  return (
    <Container>
      <Title order={2}>Commits in {selectedBranch?.name}</Title>
      <List>
        {data?.map((commit) => (
          <ListItem key={commit.sha}>
            <Text w={500}>{commit.commit.message}</Text>
            <Text size="sm" color="dimmed">
              {commit.commit.author.name} - {new Date(commit.commit.author.date).toLocaleString()}
            </Text>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};
