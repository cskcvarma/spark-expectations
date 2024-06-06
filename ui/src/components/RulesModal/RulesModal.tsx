import React, { useState } from 'react';
import { Modal, Button, Textarea, RadioGroup, Radio, Group, Stack } from '@mantine/core';
import { useForm } from '@mantine/form';

export const RulesModal = ({ isOpen, onClose, rowData, onSave }) => {
  const form = useForm({
    initialValues: rowData || {},
  });

  const handleSubmit = (values) => {
    console.log(values);
    onSave(values);
    onClose();
  };

  return (
    <Modal opened={isOpen} onClose={onClose} title="Edit Row Data">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          {Object.entries(rowData).map(([key, value]) => (
            <Textarea
              key={key}
              label={key.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())}
              {...form.getInputProps(key)}
            />
          ))}
          <Group position="right">
            <Button type="submit">Save</Button>
          </Group>
        </Stack>
      </form>
    </Modal>
  );
};
