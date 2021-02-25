import * as React from "react";
import {
  StyleProp,
  Text as LegacyText,
  TextProps as LegacyTextProps,
  TextStyle,
} from "react-native";

import useTheme from "../useTheme";

/** Any other props supplied will be provided to the element [Text](https://reactnative.dev/docs/text). */
export type TextProps = LegacyTextProps & {
  /** Color of the text. Default is *default* which is either `theme.palette.text.primary` or `theme.palette.text.secondary` depending of the component. */
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
};

/**
 * > TextExample
 *
 *```typescript
 *import {
 *  Caption,
 *  Headline,
 *  Paragraph,
 *  Subheading,
 *  Title,
 *} from "@minimalui/core";
 *import * as React from "react";
 *
 *export const TextExample: React.FunctionComponent = () => {
 *  return (
 *    <>
 *      <Headline>Headline</Headline>
 *      <Title>Title</Title>
 *      <Subheading>Subheading</Subheading>
 *      <Paragraph>Paragraph</Paragraph>
 *      <Caption>Caption</Caption>
 *    </>
 *  );
 *};
 *
 *export default TextExample;
 *
 *```
 */
export const Text: React.FunctionComponent<TextProps> = ({
  color = "default",
  style,
  ...props
}) => {
  const theme = useTheme();

  const textStyle: StyleProp<TextStyle> = [
    {
      color: theme.palette.text.primary,
      fontFamily: theme.typography.fontRegular,
      fontSize: theme.typography.fontSize,
    },
    color !== "default" && { color: theme.palette[color] },
    style,
  ];

  return <LegacyText {...props} style={textStyle} />;
};

export default Text;
