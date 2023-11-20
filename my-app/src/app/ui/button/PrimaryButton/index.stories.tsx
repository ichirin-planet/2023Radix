import { PrimaryButton } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PrimaryButton> = {
  component: PrimaryButton,
  args: {
    children: 'テストボタン',
  },
};

export default meta;

type Story = StoryObj<typeof PrimaryButton>;

export const Default: Story = {};
