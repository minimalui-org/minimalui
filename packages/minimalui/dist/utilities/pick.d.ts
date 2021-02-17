import { TextStyle, ViewStyle } from "react-native";
declare type Style = TextStyle | ViewStyle;
export declare const MarginStyleKeys: Array<"margin" | "marginTop" | "marginLeft" | "marginRight" | "marginBottom" | "marginHorizontal" | "marginVertical">;
export declare const PaddingStyleKeys: Array<"padding" | "paddingTop" | "paddingLeft" | "paddingRight" | "paddingBottom" | "paddingHorizontal" | "paddingVertical">;
export declare const TextStyleKeys: Array<"color" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textDecorationLine" | "textDecorationStyle" | "textDecorationColor" | "textShadowColor" | "textShadowOffset" | "textShadowRadius" | "textTransform">;
export declare function pick<T extends Style, U extends keyof T>(obj: T, paths: Array<U>): Pick<T, U>;
export default pick;
