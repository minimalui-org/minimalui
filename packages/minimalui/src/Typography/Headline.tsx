import * as React from "react";
import { StyleProp, Text, TextProps, TextStyle } from "react-native";

import useTheme from "../useTheme";

export type HeadlineProps = TextProps;

export const Headline: React.FunctionComponent<HeadlineProps> = ({
  style,
  ...props
}) => {
  const theme = useTheme();

  const textStyle: StyleProp<TextStyle> = [theme.typography.headline, style];

  return <Text {...props} style={textStyle} />;
};

export default Headline;
