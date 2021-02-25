import * as React from "react";
import { StyleProp, View, ViewStyle } from "react-native";

import { ButtonProps } from "./Button";
import IconButton, { IconButtonProps } from "./IconButton";
import useTheme from "./useTheme";

/** Any other props supplied will be provided to the element [IconButton](/icon_button). */
export type FabProps = {
  /** Position on the screen where the Fab should be aligned. Default is *center*. */
  align?: "center" | "left" | "right";
};

/**
 * > FabExample
 *
 * ```typescript
 * import { Feather } from "@expo/vector-icons";
 * import { Fab } from "@minimalui/core";
 * import * as React from "react";
 *
 * export const FabExample: React.FunctionComponent = () => {
 *   return (
 *     <Fab onPress={() => null}>
 *         <Feather name="plus" />
 *     </Fab>
 *   );
 * };
 *
 * export default FabExample;
 * ```
 */
export const Fab: React.FunctionComponent<
  ButtonProps & IconButtonProps & FabProps
> = ({ align = "center", style, ...props }) => {
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
