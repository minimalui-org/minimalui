import * as React from "react";
import { StyleProp, TextStyle } from "react-native";

import useTheme from "../useTheme";
import { Text, TextProps } from "./Text";

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
