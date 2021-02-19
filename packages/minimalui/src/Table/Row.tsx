import * as React from "react";
import { StyleProp, View, ViewProps, ViewStyle } from "react-native";

import useTheme from "../useTheme";

export type RowProps = ViewProps;

export const Row: React.FunctionComponent<RowProps> = ({ style, ...props }) => {
  const theme = useTheme();

  const rowStyle: StyleProp<ViewStyle> = [
    {
      alignSelf: "stretch",
      borderBottomColor: theme.palette.divider,
      borderBottomWidth: 1,
      flex: 1,
      flexDirection: "row",
    },
    style,
  ];

  return <View {...props} style={rowStyle} />;
};

export default Row;
