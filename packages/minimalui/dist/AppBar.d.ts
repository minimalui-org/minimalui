import * as React from "react";
import { ViewProps } from "react-native";
declare type AppBarProps = ViewProps & {
    left?: React.ReactNode;
    title?: string;
    right?: React.ReactNode;
};
export declare const AppBar: React.FunctionComponent<AppBarProps>;
export default AppBar;
