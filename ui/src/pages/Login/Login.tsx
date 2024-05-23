import { FC } from 'react';
import { Button, Container, Paper, Text, Title } from '@mantine/core';

export const Login: FC = () => {
  const ButtonName = 'Login with GitHub';
  return (
    <Container size={420} my={40}>
      <Title ta="center">Spark Expectations</Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Please login using one of the following providers:
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <Button fullWidth color="blue" onClick={() => {}}>
          {ButtonName}
        </Button>
      </Paper>
    </Container>
  );
};
