import { Avatar, Group, Text, UnstyledButton, Skeleton, Alert, Menu, rem } from '@mantine/core';
import { IconAlertCircle, IconChevronDown, IconSettings } from '@tabler/icons-react';
import './UserMenu.css';
import { useState } from 'react';
import { useUser } from '@/api';
import { useAuthStore } from '@/store';

export const UserMenu = () => {
  const { data, error, isLoading } = useUser();
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  const { openModal, token } = useAuthStore((state) => ({
    token: state.token,
    openModal: state.openModal,
  }));

  if (isLoading) {
    return <LoadingUserButton />;
  }

  if (error) {
    return <ErrorUserButton />;
  }

  return (
    <Menu
      width={260}
      position="bottom-end"
      transitionProps={{ transition: 'pop-top-right' }}
      onClose={() => setUserMenuOpened(false)}
      onOpen={() => setUserMenuOpened(true)}
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton className={userMenuOpened ? 'user userActive' : 'user'}>
          <Group gap={7}>
            <Avatar src={data?.avatar_url} alt={data?.name} radius="xl" size={20} />
            <Text fw={500} size="sm" lh={1} mr={3}>
              {data?.name}
            </Text>
            <IconChevronDown style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
          </Group>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>Settings</Menu.Label>
        <Menu.Item
          leftSection={<IconSettings style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
          onClick={openModal}
        >
          Change Token
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

const ErrorUserButton = () => (
  <UnstyledButton>
    <Group>
      <div style={{ flex: 1 }}>
        <Alert icon={<IconAlertCircle size={16} />} color="red">
          Failed to load user data
        </Alert>
      </div>
    </Group>
  </UnstyledButton>
);

const LoadingUserButton = () => (
  <UnstyledButton>
    <Group>
      <Skeleton circle width={40} height={40} />
      <div style={{ flex: 1 }}>
        <Skeleton height={8} width="50%" mb="xs" />
        <Skeleton height={8} width="30%" />
      </div>
      <Skeleton width={20} height={20} />
    </Group>
  </UnstyledButton>
);
