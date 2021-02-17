import * as React from "react";
import { StyleProp, StyleSheet, TextStyle, ViewStyle } from "react-native";

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

  return (
    <Button {...props} style={StyleSheet.flatten(iconButtonStyle)}>
      {(textStyle) =>
        React.cloneElement(children, {
          color: textStyle
            .map((t: TextStyle) => t.color)
            .filter((c) => c)
            .pop(),
          size,
        })
      }
    </Button>
  );
};

export default IconButton;
