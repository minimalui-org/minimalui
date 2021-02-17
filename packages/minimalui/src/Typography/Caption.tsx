import * as React from "react";
import { StyleProp, Text, TextProps, TextStyle } from "react-native";

import useTheme from "../useTheme";

export type CaptionProps = TextProps;

export const Caption: React.FunctionComponent<CaptionProps> = ({
  style,
  ...props
}) => {
  const theme = useTheme();

  const textStyle: StyleProp<TextStyle> = [theme.typography.caption, style];

  return <Text {...props} style={textStyle} />;
};

export default Caption;
