import * as React from "react";
import { ViewProps, ViewStyle } from "react-native";
export declare type ContainerProps = ViewProps & {
    align?: ViewStyle["alignItems"];
    direction?: "column" | "row";
    flex?: number | true;
    justify?: ViewStyle["justifyContent"];
    spacing?: number;
};
export declare const Container: React.FunctionComponent<ContainerProps>;
export default Container;
