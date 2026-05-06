import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Equipement from './equipement';

const meta = {
  component: Equipement,
} satisfies Meta<typeof Equipement>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    "equipementlogement": [
      "equipementlogement"
    ]
  },
};