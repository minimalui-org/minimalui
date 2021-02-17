import * as React from "react";
import { StyleProp, Text, TextProps, TextStyle } from "react-native";

import useTheme from "../useTheme";

export type SubheadingProps = TextProps;

export const Subheading: React.FunctionComponent<SubheadingProps> = ({
  style,
  ...props
}) => {
  const theme = useTheme();

  const textStyle: StyleProp<TextStyle> = [theme.typography.subheading, style];

  return <Text {...props} style={textStyle} />;
};

export default Subheading;
