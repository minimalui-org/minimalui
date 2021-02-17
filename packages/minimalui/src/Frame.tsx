import * as React from "react";
import { View, ViewProps, ViewStyle } from "react-native";

import useTheme from "./useTheme";

export type FrameProps = ViewProps & {
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
};

export const Frame: React.FunctionComponent<FrameProps> = ({
  maxWidth,
  style,
  ...props
}) => {
  const theme = useTheme();

  /**
   * Needed if maxWidth is provided to center the view
   */
  const centeredStyle: ViewStyle = {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  };

  const frameStyle = [
    {
      flex: 1,
      maxWidth: maxWidth && theme.breakpoint[maxWidth],
    },
    style,
  ];

  return (
    <View style={centeredStyle}>
      <View {...props} style={frameStyle} />
    </View>
  );
};

export default Frame;
