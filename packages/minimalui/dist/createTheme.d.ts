import { TextStyle, ViewStyle } from "react-native";
export declare type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";
export declare type Theme = {
    breakpoint: {
        [key in Breakpoint]: number;
    };
    elevation: (depth: number) => ViewStyle;
    palette: {
        background: {
            default: string;
            paper: string;
        };
        divider: string;
        error: string;
        info: string;
        primary: string;
        secondary: string;
        success: string;
        text: {
            disabled: string;
            primary: string;
            secondary: string;
        };
        touchable: string;
        type: "dark" | "light";
        warning: string;
    };
    shape: {
        borderRadius: number;
    };
    spacing: (size: number) => number;
    typography: {
        [key in "button" | "caption" | "headline" | "paragraph" | "subheading" | "title"]: TextStyle;
    };
};
declare type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
};
export declare const createTheme: (userTheme?: DeepPartial<Theme>) => Theme;
export default createTheme;
