import * as styledComponents from "styled-components";

const {
  default: styled,
  css,
  createGlobalStyle,
  ServerStyleSheet,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  IThemeInterface
>;

export interface ICustomProps {
  width?: string;
  height?: string;
  image?: string;
  id?: string;
  isFlex?: boolean;
  facebook?: boolean;
  google?: boolean;
  backgroundImage?: string;
}

export interface IThemeInterface {
  primary: string;
  primaryYellow: string;
  primaryGreen: string;
  primaryGray: string;
  backgroundHome: string;
  facColor: string;
  white: string;
  blue: string;
  gray: string;
  media: {
    MEDIA_SMALL_300PX: string;
  };
}

export const theme: IThemeInterface = {
  primary: "#00A4E5",
  primaryYellow: "#FFF500",
  backgroundHome: "#FBFBFB",
  primaryGreen: "#0FD9A3",
  gray: "#A3A3A3",
  primaryGray: "#5A5252",
  facColor: "#3B5998",
  white: "#FFFFFF",
  blue: "#0066FF",
  media: {
    MEDIA_SMALL_300PX: `@media screen and (max-width: 320px)`
  }
};

export default styled;
export { css, keyframes, createGlobalStyle, ThemeProvider, ServerStyleSheet };
