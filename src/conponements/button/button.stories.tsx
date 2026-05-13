import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Button from './button';
import { fn } from 'storybook/test';

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  tags: ['autodocs'],
  args: {
    "TextBtn": "TextBtn",
    Onclick: fn()
  },
};