import * as React from "react";
import { StyleProp, View, ViewProps, ViewStyle } from "react-native";

import useTheme from "../useTheme";

export type TableProps = ViewProps;

export const Table: React.FunctionComponent<TableProps> = ({
  style,
  ...props
}) => {
  const theme = useTheme();

  const tableStyle: StyleProp<ViewStyle> = [
    { flex: 1, alignSelf: "stretch" },
    style,
  ];

  return <View {...props} style={tableStyle} />;
};

export default Table;
