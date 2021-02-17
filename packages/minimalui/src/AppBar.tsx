import * as React from "react";
import {
  Animated,
  StyleProp,
  TextStyle,
  ViewProps,
  ViewStyle,
} from "react-native";

import useScroll from "./useScroll";
import useTheme from "./useTheme";

type AppBarProps = ViewProps & {
  left?: React.ReactNode;
  title?: string;
  right?: React.ReactNode;
};

export const AppBar: React.FunctionComponent<AppBarProps> = ({
  left,
  title,
  right,
  style,
  ...props
}) => {
  const { y } = useScroll();

  const theme = useTheme();

  const inputRange = [0, 100];

  const appBarStyle: StyleProp<ViewStyle> = [
    {
      alignItems: "center",
      // backgroundColor: theme.palette.background.default,
      borderBottomWidth: 1,
      flexDirection: "row",
      height: 64,
      maxHeight: 64,
      overflow: "hidden",
      paddingHorizontal: theme.spacing(2),
      zIndex: 12,
    },
    y &&
      (({
        borderBottomColor: y.interpolate({
          inputRange,
          outputRange: [
            theme.palette.background.default,
            theme.palette.divider,
          ],
          extrapolate: "clamp",
        }),
      } as unknown) as ViewStyle),
    style,
  ];

  const titleStyle: StyleProp<TextStyle> = [
    theme.typography.headline,
    {
      flex: 1,
      marginHorizontal: theme.spacing(2),
    },
    y &&
      (({
        opacity: y.interpolate({
          inputRange: [0, 100],
          outputRange: [0, 1],
          extrapolate: "clamp",
        }),
        position: "relative",
        top: y.interpolate({
          inputRange,
          outputRange: [50, 0],
          extrapolate: "clamp",
        }),
      } as unknown) as TextStyle),
  ];

  return (
    <Animated.View {...props} style={appBarStyle}>
      {left}
      {title && <Animated.Text style={titleStyle}>{title}</Animated.Text>}
      {right}
    </Animated.View>
  );
};

export default AppBar;
