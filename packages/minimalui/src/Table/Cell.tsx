import * as React from "react";
import { StyleProp, View, ViewProps, ViewStyle } from "react-native";

import useTheme from "../useTheme";

export type CellProps = ViewProps;

export const Cell: React.FunctionComponent<CellProps> = ({
  style,
  ...props
}) => {
  const theme = useTheme();

  const cellStyle: StyleProp<ViewStyle> = [
    { flex: 1, alignSelf: "stretch", padding: theme.spacing(2) },
    style,
  ];

  return <View {...props} style={cellStyle} />;
};

export default Cell;
