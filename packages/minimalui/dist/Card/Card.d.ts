import * as React from "react";
import { ViewProps } from "react-native";
import CardMedia from "./CardMedia";
import CardTitle from "./CardTitle";
export declare type CardProps = ViewProps;
declare type CardComponent<T> = React.FunctionComponent<T> & {
    Media: typeof CardMedia;
    Title: typeof CardTitle;
};
export declare const Card: CardComponent<CardProps>;
export default Card;
