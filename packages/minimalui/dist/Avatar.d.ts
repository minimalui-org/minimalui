import * as React from "react";
import { ImageProps, StyleProp, ViewStyle } from "react-native";
declare type AvatarProps = ImageProps & {
    size?: number;
    style?: StyleProp<ViewStyle>;
};
export declare const Avatar: React.FunctionComponent<AvatarProps>;
export default Avatar;
