import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/congif/storybook/ThemeDecorator/ThemeDecorator';

import { AppLink, AppLinkTheme } from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
  <AppLink {...args} />
);

export const PRIMARY = Template.bind({});
PRIMARY.args = {
  children: 'text',
  theme: AppLinkTheme.PRIMARY,
};

export const RED = Template.bind({});
RED.args = {
  children: 'text',
  theme: AppLinkTheme.RED,
};

export const SECONDARY = Template.bind({});
SECONDARY.args = {
  children: 'text',
  theme: AppLinkTheme.INVERTED,
};

export const PRIMARYDARK = Template.bind({});
PRIMARYDARK.args = {
  children: 'text',
  theme: AppLinkTheme.PRIMARY,
};
PRIMARYDARK.decorators = [ThemeDecorator(Theme.DARK)];
export const REDDARK = Template.bind({});
REDDARK.args = {
  children: 'text',
  theme: AppLinkTheme.RED,
};
REDDARK.decorators = [ThemeDecorator(Theme.DARK)];
export const SECONDARYDARK = Template.bind({});
SECONDARYDARK.args = {
  children: 'text',
  theme: AppLinkTheme.INVERTED,
};
SECONDARYDARK.decorators = [ThemeDecorator(Theme.DARK)];
