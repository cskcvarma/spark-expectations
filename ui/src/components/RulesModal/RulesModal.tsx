import React, { useState } from 'react';
import { Modal, Button, Textarea, RadioGroup, Radio, Group, Stack } from '@mantine/core';
import { useForm } from '@mantine/form';

export const RulesModal = ({ isOpen, onClose, rowData, onSave }) => {
  const form = useForm({
    initialValues: rowData || {},
  });

  const handleSubmit = (values) => {
    onSave(values);
    onClose();
  };

  return (
    <Modal opened={isOpen} onClose={onClose} title="Edit Row Data">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          {Object.entries(rowData).map(([key, value]) => (
            // if (typeof value === 'boolean') {
            //   return (
            //     <RadioGroup
            //       key={key}
            //       label={key.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())}
            //       {...form.getInputProps(key)}
            //     >
            //       <Radio value="true">Enabled</Radio>
            //       <Radio value="false">Disabled</Radio>
            //     </RadioGroup>
            //   );
            // }
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
