import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, StoryFn } from '@storybook/react';
import TextField, { FieldProps } from './UnderlineTextField';

export default {
  title: 'UnderlineTextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    invalid: {
      control: 'boolean',
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'large', 'responsive'],
      },
    },
  },
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: StoryFn<FieldProps> = (args) => <TextField {...args} />;

export const Field = Template.bind({});
Field.args = {
  disabled: false,
  invalid: false,
  size: 'responsive',
};
