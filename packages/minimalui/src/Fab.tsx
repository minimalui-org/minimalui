import * as React from "react";
import { StyleProp, View, ViewStyle } from "react-native";

import IconButton, { IconButtonProps } from "./IconButton";
import useTheme from "./useTheme";

export type FabProps = IconButtonProps & {
  align?: "center" | "left" | "right";
};

export const Fab: React.FunctionComponent<FabProps> = ({
  align = "center",
  style,
  ...props
}) => {
  const theme = useTheme();

  const fabStyle: StyleProp<ViewStyle> = [
    {
      alignItems: "center",
      bottom: theme.spacing(2),
      left: align === "right" ? undefined : theme.spacing(2),
      padding: theme.spacing(1),
      position: "absolute",
      right: align === "left" ? undefined : theme.spacing(2),
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
