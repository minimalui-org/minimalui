import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import merge from "ts-deepmerge";

import elevations from "./utilities/elevations";

export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";

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
  };
  spacing: (size: number) => number;
  typography: {
    [key in
      | "button"
      | "caption"
      | "headline"
      | "paragraph"
      | "subheading"
      | "title"]: TextStyle;
  };
};

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export const createTheme = (userTheme: DeepPartial<Theme> = {}): Theme => {
  const breakpoint: Theme["breakpoint"] = {
    xs: 0, // eslint-disable-line sort-keys
    sm: 600, // eslint-disable-line sort-keys
    md: 960, // eslint-disable-line sort-keys
    lg: 1280, // eslint-disable-line sort-keys
    xl: 1920, // eslint-disable-line sort-keys
  };

  const elevation: Theme["elevation"] = (depth = 1) => elevations[depth];

  const lightPalette: Theme["palette"] = {
    background: {
      default: "white",
      paper: "#eceff1",
    },
    divider: "#d3d3d3",
    error: "#f44336",
    info: "#2196f3",
    primary: "#45afe8",
    secondary: "#4bd1b8",
    success: "#4caf50",
    text: {
      disabled: "rgba(0, 0, 0, 0.38)",
      primary: "#000000",
      secondary: "#545454",
    },
    touchable: "#eeeeee",
    type: "light",
    warning: "#ff9800",
  };

  const darkPalette: Theme["palette"] = {
    background: {
      default: "#212121",
      paper: "#333333",
    },
    divider: "white",
    error: "#f44336",
    info: "#2196f3",
    primary: "#45afe8",
    secondary: "#4bd1b8",
    success: "#4caf50",
    text: {
      disabled: "rgba(0, 0, 0, 0.38)",
      primary: "white",
      secondary: "white",
    },
    touchable: "#353535",
    type: "dark",
    warning: "#ff9800",
  };

  const palette =
    userTheme?.palette?.type === "dark" ? darkPalette : lightPalette;

  const spacing: Theme["spacing"] = (size = 1) => size * 8;

  const defaultFontSize = 14;

  const typography: Theme["typography"] = StyleSheet.create({
    button: {
      fontWeight: "600",
      fontFamily: "NotoSansBold",
      fontSize: defaultFontSize,
    },
    caption: {
      color: palette.text.secondary,
      fontFamily: "NotoSansRegular",
      fontSize: defaultFontSize,
    },
    headline: {
      color: palette.text.primary,
      fontFamily: "NotoSansBold",
      fontSize: defaultFontSize * 2.5,
    },
    paragraph: {
      color: palette.text.secondary,
      fontFamily: "NotoSansRegular",
      fontSize: defaultFontSize,
    },
    subheading: {
      color: palette.text.primary,
      fontFamily: "NotoSansBold",
      fontSize: defaultFontSize * 1.1,
    },
    title: {
      color: palette.text.primary,
      fontFamily: "NotoSansBold",
      fontSize: defaultFontSize * 1.3,
    },
  });

  return merge(
    {
      breakpoint,
      elevation,
      palette,
      shape: {
        borderRadius: 15,
      },
      spacing,
      typography,
    },
    userTheme
  );
};

export default createTheme;
