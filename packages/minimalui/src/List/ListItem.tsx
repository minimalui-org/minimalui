import * as React from "react";
import {
  StyleProp,
  Text,
  TextStyle,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";

import useTheme from "../useTheme";

export type ListTitleProps = ViewProps & {
  left?: (props: { size: number }) => React.ReactNode;
  right?: (props: { size: number }) => React.ReactNode;
  subtitle?: React.ReactNode;
  subtitleNumberOfLines?: number;
  title: React.ReactNode;
  titleNumberOfLines?: number;
};

const LEFT_SIZE = 40;

export const ListTitle: React.FunctionComponent<ListTitleProps> = ({
  left,
  right,
  subtitle,
  subtitleNumberOfLines = 1,
  title,
  titleNumberOfLines = 1,
}) => {
  const theme = useTheme();

  const containerStyle: StyleProp<ViewStyle> = [
    {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
      minHeight: subtitle || left || right ? 72 : 50,
    },
  ];

  const leftStyle: StyleProp<ViewStyle> = [
    {
      height: LEFT_SIZE,
      justifyContent: "center",
      marginRight: 16,
      width: LEFT_SIZE,
    },
  ];

  const rightStyle: StyleProp<ViewStyle> = [];

  const contentStyle: StyleProp<ViewStyle> = [
    { flex: 1, flexDirection: "column", justifyContent: "center" },
  ];

  const titleStyle: StyleProp<TextStyle> = [theme.typography.subheading];

  const subtitleStyle: StyleProp<TextStyle> = [theme.typography.caption];

  return (
    <View style={containerStyle}>
      {left ? (
        <View style={leftStyle}>
          {left({
            size: LEFT_SIZE,
          })}
        </View>
      ) : null}

      <View style={contentStyle}>
        {title ? (
          <Text numberOfLines={titleNumberOfLines} style={titleStyle}>
            {title}
          </Text>
        ) : null}

        {subtitle ? (
          <Text numberOfLines={subtitleNumberOfLines} style={subtitleStyle}>
            {subtitle}
          </Text>
        ) : null}
      </View>

      <View style={rightStyle}>{right ? right({ size: 24 }) : null}</View>
    </View>
  );
};

export default ListTitle;
