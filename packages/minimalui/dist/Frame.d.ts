import * as React from "react";
import { ViewProps } from "react-native";
export declare type FrameProps = ViewProps & {
    maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
};
export declare const Frame: React.FunctionComponent<FrameProps>;
export default Frame;
