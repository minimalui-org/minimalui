import * as Color from "color";
import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import {
  Platform,
  Pressable,
  PressableProps,
  StyleProp,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

import ConditionalWrapper from "./ConditionalWrapper";
import useTheme from "./useTheme";
import pick, {
  MarginStyleKeys,
  PaddingStyleKeys,
  TextStyleKeys,
} from "./utilities/pick";

export type ButtonProps = Omit<PressableProps, "children" | "style"> & {
  children: ((textStyle: TextStyle[]) => React.ReactNode) | React.ReactNode;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
  elevation?: number;
  fullWidth?: boolean;
  style?: TextStyle & ViewStyle;
  variant?: "flat" | "contained" | "outlined" | "gradient";
};

export const Button: React.FunctionComponent<ButtonProps> = (props) => {
  const {
    color = "default",
    elevation,
    fullWidth,
    style,
    children,
    variant = "flat",
    ...rest
  } = props;
  const { disabled } = rest;

  const theme = useTheme();

  const containerStyle: StyleProp<ViewStyle> = [
    {
      borderRadius: style?.borderRadius || theme.shape.borderRadius,
      overflow: "hidden",
      width: (fullWidth && "100%") || undefined,
    },
    theme.elevation(
      elevation ||
        ((variant === "contained" || variant === "gradient") && 10) ||
        0
    ),
    style && pick(style, MarginStyleKeys),
  ];

  const paddingStyle: StyleProp<ViewStyle> = [
    {
      alignItems: "center",
      paddingHorizontal: style?.padding ? undefined : theme.spacing(3),
      paddingVertical: style?.padding ? undefined : theme.spacing(2),
    },
    style && pick(style, PaddingStyleKeys),
  ];

  const textStyle: StyleProp<TextStyle> = [
    {
      color: Object({
        contained: color === "default" ? theme.palette.text.primary : "white",
        flat:
          color === "default"
            ? theme.palette.text.primary
            : theme.palette[color],
        gradient: "white",
        outlined:
          color === "default"
            ? theme.palette.text.primary
            : theme.palette[color],
      })[variant],
    },
    theme.typography.button,
    style && pick(style, TextStyleKeys),
  ];

  const pressableStyle: PressableProps["style"] = ({ pressed }) => [
    {
      backgroundColor: Object.create({
        contained:
          color === "default" ? theme.palette.touchable : theme.palette[color],
        flat: theme.palette.touchable,
      })[variant],
      borderColor: Object({
        outlined:
          color === "default" ? theme.palette.divider : theme.palette[color],
      })[variant],
      borderRadius: theme.shape.borderRadius,
      borderWidth: Object.create({
        outlined: 1,
      })[variant],
      cursor: "pointer",
      justifyContent: "center",
      opacity:
        Platform.OS === "android"
          ? 1
          : Object.create({
              disabled: 0.3,
              pressed: 0.7,
              default: 1,
            })[(disabled && "disabled") || (pressed && "pressed") || "default"],
      userSelect: "none",
    },
    style,
  ];

  const Gradient: React.FunctionComponent = (gradientProps) => (
    <LinearGradient
      colors={
        color === "default"
          ? [theme.palette.primary, theme.palette.secondary]
          : [
              theme.palette[color],
              Color(theme.palette[color]).rotate(-30).hex(),
            ]
      }
      end={[1, 0]}
      start={[0, 1]}
      {...gradientProps}
    />
  );

  return (
    <View style={containerStyle}>
      {/**
       * We need LinearGradient as a parent of Pressable on Android to get the ripple effect
       */}
      <ConditionalWrapper
        condition={Platform.OS === "android" && variant === "gradient"}
        render={(child) => <Gradient>{child}</Gradient>}
      >
        <Pressable
          android_ripple={{
            color: Object({
              contained: "white",
              flat:
                color === "default"
                  ? theme.palette.text.secondary
                  : theme.palette[color],
              gradient: "white",
              outlined:
                color === "default"
                  ? theme.palette.text.secondary
                  : theme.palette[color],
            })[variant],
          }}
          {...props}
          style={pressableStyle}
        >
          {/**
           * For the other platforms, gradient is applied after Pressable to get opacity effect
           */}
          <ConditionalWrapper
            condition={Platform.OS !== "android" && variant === "gradient"}
            render={(child) => <Gradient>{child}</Gradient>}
          >
            <View style={paddingStyle}>
              <ConditionalWrapper
                condition={typeof children === "string"}
                render={(child) => <Text style={textStyle}>{child}</Text>}
              >
                <>
                  {children instanceof Function
                    ? children(textStyle as TextStyle[])
                    : children}
                </>
              </ConditionalWrapper>
            </View>
          </ConditionalWrapper>
        </Pressable>
      </ConditionalWrapper>
    </View>
  );
};

export default Button;
