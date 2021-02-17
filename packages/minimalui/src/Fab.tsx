import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";

import IconButton, { IconButtonProps } from "./IconButton";
import useTheme from "./useTheme";

export type FabProps = IconButtonProps;

export const Fab: React.FunctionComponent<FabProps> = ({ style, ...props }) => {
  const theme = useTheme();

  const fabStyle: StyleProp<ViewStyle> = [
    {
      alignItems: "center",
      bottom: theme.spacing(2),
      left: 0,
      padding: theme.spacing(1),
      position: "absolute",
      right: 0,
    },
    style,
  ];

  return (
    <View style={fabStyle}>
      <IconButton elevation={5} size={48} variant="gradient" {...props} />
    </View>
  );
};

export default Fab;
