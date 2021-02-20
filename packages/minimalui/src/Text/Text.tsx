import * as React from "react";
import {
  StyleProp,
  Text as LegacyText,
  TextProps as LegacyTextProps,
  TextStyle,
} from "react-native";

import Spacer from "../Spacer";
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
  gutter?: true | number;
  gutterBottom?: true | number;
  gutterTop?: true | number;
};

export const Text: React.FunctionComponent<TextProps> = ({
  color = "default",
  gutter,
  gutterBottom,
  gutterTop,
  style,
  ...props
}) => {
  const theme = useTheme();

  const textStyle: StyleProp<TextStyle> = [
    theme.typography.text,
    color !== "default" && { color: theme.palette[color] },
    style,
  ];

  return (
    <>
      {(gutterTop || gutter) && (
        <Spacer spacing={+(gutterTop || gutter || true)} />
      )}
      <LegacyText {...props} style={textStyle} />
      {(gutterBottom || gutter) && (
        <Spacer spacing={+(gutterBottom || gutter || true)} />
      )}
    </>
  );
};

export default Text;
