import * as React from "react";
import { StyleProp, TextStyle } from "react-native";

import useTheme from "../useTheme";
import { Text, TextProps } from "./Text";

export type ParagraphProps = TextProps;

export const Paragraph: React.FunctionComponent<ParagraphProps> = ({
  style,
  ...props
}) => {
  const theme = useTheme();

  const textStyle: StyleProp<TextStyle> = [theme.typography.paragraph, style];

  return <Text {...props} style={textStyle} />;
};

export default Paragraph;
