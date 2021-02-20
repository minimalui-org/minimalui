import * as React from "react";
import { View, ViewProps, ViewStyle } from "react-native";

import { BreakpointProps } from "./Theme";
import useResponsive from "./useResponsive";
import useTheme from "./useTheme";

export type ContainerProps = ViewProps &
  BreakpointProps & {
    align?: ViewStyle["alignItems"];
    direction?: "column" | "row";
    flex?: number | true;
    justify?: ViewStyle["justifyContent"];
    spacing?: number;
  };

export const Container: React.FunctionComponent<ContainerProps> = ({
  align,
  direction = "column",
  flex,
  justify,
  style,
  spacing = 2,
  ...props
}) => {
  const theme = useTheme();
  const containerStyle = [
    {
      alignItems: align,
      flex: flex === true ? 1 : flex,
      flexDirection: direction,
      justifyContent: justify,
      padding: theme.spacing(useResponsive(props) || spacing),
    },
    style,
  ];

  return <View {...props} style={containerStyle} />;
};

export default Container;
