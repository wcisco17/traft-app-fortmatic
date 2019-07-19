import * as React from "react";
import { Fragment } from "react";
import { theme, ThemeProvider } from ".";

export const ThemeContainer: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Fragment>{children}</Fragment>
  </ThemeProvider>
);
