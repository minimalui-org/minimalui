import * as React from "react";
import { StyleProp, Text, TextProps, TextStyle } from "react-native";

import useTheme from "../useTheme";

export type TitleProps = TextProps;

export const Title: React.FunctionComponent<TitleProps> = ({
  style,
  ...props
}) => {
  const theme = useTheme();

  const textStyle: StyleProp<TextStyle> = [theme.typography.title, style];

  return <Text {...props} style={textStyle} />;
};

export default Title;
