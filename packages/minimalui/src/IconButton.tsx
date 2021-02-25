import * as React from "react";
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

import Button, { ButtonProps } from "./Button";
import useTheme from "./useTheme";

/** Any other props supplied will be provided to the element [Button](/button). */
export type IconButtonProps = {
  children: JSX.Element;
  /** Size (height and width) of the button that will be forwarded to the icon. Default is *24*. */
  size?: number;
};

/**
 * > IconButtonExample
 *
 * ```typescript
 * import { Feather } from "@expo/vector-icons";
 * import { IconButton } from "@minimalui/core";
 * import * as React from "react";
 *
 * export const IconButtonExample: React.FunctionComponent = () => {
 *   return (
 *     <IconButton onPress={() => null}>
 *         <Feather name="plus" />
 *     </IconButton>
 *   );
 * };
 *
 * export default IconButtonExample;
 * ```
 */
export const IconButton: React.FunctionComponent<
  ButtonProps & IconButtonProps
> = ({ children, size = 24, style, ...props }) => {
  const theme = useTheme();

  const iconButtonStyle: StyleProp<ViewStyle> = [
    {
      borderRadius: 1000,
      padding: theme.spacing(1),
    },
    style,
  ];

  const iconContainerStyle: StyleProp<ViewStyle> = [
    {
      height: size,
      width: size,
    },
  ];

  return (
    <Button {...props} style={StyleSheet.flatten(iconButtonStyle)}>
      {(textStyle) => (
        <View style={iconContainerStyle}>
          {React.cloneElement(children, {
            color: textStyle
              .map((t: TextStyle) => t.color)
              .filter((c) => c)
              .pop(),
            size,
          })}
        </View>
      )}
    </Button>
  );
};

export default IconButton;
