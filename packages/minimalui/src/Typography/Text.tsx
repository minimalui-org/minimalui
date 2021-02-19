import * as React from "react";
import {
  StyleProp,
  Text as LegacyText,
  TextProps as LegacyTextProps,
  TextStyle,
} from "react-native";

import useTheme from "../useTheme";

export type TextProps = LegacyTextProps & {
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
};

export const Text: React.FunctionComponent<TextProps> = ({
  color = "default",
  style,
  ...props
}) => {
  const theme = useTheme();

  const textStyle: StyleProp<TextStyle> = [
    theme.typography.paragraph,
    style,
    color !== "default" && { color: theme.palette[color] },
  ];

  return <LegacyText {...props} style={textStyle} />;
};

export default Text;
