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

export type IconButtonProps = ButtonProps & {
  children: JSX.Element;
  color?: string;
  size?: number;
};

export const IconButton: React.FunctionComponent<IconButtonProps> = ({
  children,
  size = 24,
  style,
  ...props
}) => {
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
