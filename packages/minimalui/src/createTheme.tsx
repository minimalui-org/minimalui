import merge from "ts-deepmerge";

import { Theme } from "./Theme";
import elevations from "./utilities/elevations";

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
      default: "#ffffff",
      paper: "#f8f9fa",
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
    divider: "#333333",
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

  const spacing: Theme["spacing"] = (size = 1) =>
    size * (userTheme.shape?.spacing || 8);

  const fontBold = userTheme.typography?.fontBold || "NotoSansRegular";
  const fontMedium = userTheme.typography?.fontMedium || "NotoSansMedium";
  const fontRegular = userTheme.typography?.fontRegular || "NotoSansBold";
  const fontSize = userTheme.typography?.fontSize || 14;

  const typography: Theme["typography"] = {
    button: {
      fontWeight: "600",
      fontFamily: fontMedium,
      fontSize,
    },
    caption: {
      color: palette.text.secondary,
      fontFamily: fontRegular,
      fontSize: fontSize * 0.9,
      lineHeight: fontSize * 0.9 * 1.5,
    },
    fontBold,
    fontMedium,
    fontRegular,
    fontSize,
    headline: {
      color: palette.text.primary,
      fontFamily: fontBold,
      fontSize: fontSize * 2.5,
      lineHeight: fontSize * 2.5 * 1.5,
    },
    paragraph: {
      color: palette.text.secondary,
      fontFamily: fontRegular,
      fontSize,
      lineHeight: fontSize * 1.5,
    },
    subheading: {
      color: palette.text.primary,
      fontFamily: fontMedium,
      fontSize: fontSize * 1.1,
      lineHeight: fontSize * 1.1 * 1.5,
    },
    title: {
      color: palette.text.primary,
      fontFamily: fontMedium,
      fontSize: fontSize * 1.5,
      lineHeight: fontSize * 1.5 * 1.5,
    },
  };

  return merge(
    {
      breakpoint,
      elevation,
      palette,
      shape: {
        borderRadius: 15,
        spacing: 8,
      },
      spacing,
      typography,
    },
    userTheme
  );
};

export default createTheme;
