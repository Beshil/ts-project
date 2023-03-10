import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/congif/storybook/ThemeDecorator/ThemeDecorator';

import { Button, ThemeButton, ButtonSize } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'text',
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'text',
  theme: ThemeButton.CLEAR,
};
export const Outline = Template.bind({});
Outline.args = {
  children: 'text',
  theme: ThemeButton.OUTLINE,
};
export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'text',
  theme: ThemeButton.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
  children: 'Text',
  theme: ThemeButton.OUTLINE,
  size: ButtonSize.L,
};

export const OutlineSizeXl = Template.bind({});
OutlineSizeXl.args = {
  children: 'Text',
  theme: ThemeButton.OUTLINE,
  size: ButtonSize.XL,
};

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
  children: 'Text',
  theme: ThemeButton.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  children: 'Text',
  theme: ThemeButton.BACKGROUND_INVERTED,
};

export const Square = Template.bind({});
Square.args = {
  children: '>',
  theme: ThemeButton.BACKGROUND_INVERTED,
  square: true,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
  children: '>',
  theme: ThemeButton.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.L,
};

export const SquareSizeXl = Template.bind({});
SquareSizeXl.args = {
  children: '>',
  theme: ThemeButton.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.XL,
};
