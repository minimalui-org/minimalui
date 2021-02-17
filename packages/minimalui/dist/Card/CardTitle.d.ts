import * as React from "react";
import { ViewProps } from "react-native";
export declare type CardTitleProps = ViewProps & {
    left?: (props: {
        size: number;
    }) => React.ReactNode;
    right?: (props: {
        size: number;
    }) => React.ReactNode;
    subtitle?: React.ReactNode;
    subtitleNumberOfLines?: number;
    title: React.ReactNode;
    titleNumberOfLines?: number;
};
export declare const CardTitle: React.FunctionComponent<CardTitleProps>;
export default CardTitle;
