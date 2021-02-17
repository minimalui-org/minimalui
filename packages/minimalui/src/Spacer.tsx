import * as React from "react";
import { View, ViewProps } from "react-native";

import useTheme from "./useTheme";

export type SpacerProps = ViewProps & {
  spacing?: number;
};

export const Spacer: React.FunctionComponent<SpacerProps> = ({
  spacing = 2,
  style,
  ...props
}) => {
  const theme = useTheme();

  const spacerStyle = [
    { height: theme.spacing(spacing), width: theme.spacing(spacing) },
    style,
  ];

  return <View {...props} style={spacerStyle} />;
};

export default Spacer;
