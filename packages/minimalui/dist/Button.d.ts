import * as React from "react";
import { PressableProps, TextStyle, ViewStyle } from "react-native";
export declare type ButtonProps = Omit<PressableProps, "children" | "style"> & {
    children: ((textStyle: TextStyle[]) => React.ReactNode) | React.ReactNode;
    color?: "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning";
    elevation?: number;
    fullWidth?: boolean;
    style?: TextStyle & ViewStyle;
    variant?: "text" | "contained" | "outlined" | "gradient";
};
export declare const Button: React.FunctionComponent<ButtonProps>;
export default Button;
