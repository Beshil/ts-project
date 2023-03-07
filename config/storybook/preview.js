import { addDecorator } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "../../src/shared/congif/storybook/ThemeDecorator/ThemeDecorator";
import { StyleDecorator } from "../../src/shared/congif/storybook/StyleDecorator/StyleDecorator";
import { RouterDecorator } from "../../src/shared/congif/storybook/RouterDecorator/RouterDecorator";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
