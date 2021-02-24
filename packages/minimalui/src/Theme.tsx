import { TextStyle, ViewStyle } from "react-native";

export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";

export type BreakpointProps<T = number> = {
  [key in Breakpoint]?: T;
};

export type Theme = {
  breakpoint: { [key in Breakpoint]: number };
  elevation: (depth: number) => ViewStyle;
  palette: {
    background: {
      default: string;
      paper: string;
    };
    divider: string;
    error: string;
    info: string;
    primary: string;
    secondary: string;
    success: string;
    text: {
      disabled: string;
      primary: string;
      secondary: string;
    };
    touchable: string;
    type: "dark" | "light";
    warning: string;
  };
  shape: {
    borderRadius: number;
    spacing: number;
  };
  spacing: (size: number) => number;
  typography: {
    fontBold: string;
    fontMedium: string;
    fontRegular: string;
    fontSize: number;

    button: TextStyle;
    caption: TextStyle;
    headline: TextStyle;
    paragraph: TextStyle;
    subheading: TextStyle;
    title: TextStyle;
  };
};

export default Theme;
