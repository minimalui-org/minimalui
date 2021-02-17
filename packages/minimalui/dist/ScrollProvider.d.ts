import * as React from "react";
import { Animated } from "react-native";
export declare type ScrollContextType = {
    x?: Animated.Value;
    y?: Animated.Value;
};
export declare const ScrollContext: React.Context<ScrollContextType>;
export declare const ScrollProvider: React.FunctionComponent<ScrollContextType>;
export default ScrollProvider;
