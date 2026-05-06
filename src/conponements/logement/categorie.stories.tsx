import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Categorie from './categorie';

const meta = {
  component: Categorie,
} satisfies Meta<typeof Categorie>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    "categorie": [
      "categorie"
    ]
  },
};