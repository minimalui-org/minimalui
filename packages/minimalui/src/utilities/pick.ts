import { TextStyle, ViewStyle } from "react-native";

type Style = TextStyle | ViewStyle;

export const MarginStyleKeys: Array<
  | "margin"
  | "marginTop"
  | "marginLeft"
  | "marginRight"
  | "marginBottom"
  | "marginHorizontal"
  | "marginVertical"
> = [
  "margin",
  "marginTop",
  "marginLeft",
  "marginRight",
  "marginBottom",
  "marginHorizontal",
  "marginVertical",
];

export const PaddingStyleKeys: Array<
  | "padding"
  | "paddingTop"
  | "paddingLeft"
  | "paddingRight"
  | "paddingBottom"
  | "paddingHorizontal"
  | "paddingVertical"
> = [
  "padding",
  "paddingTop",
  "paddingLeft",
  "paddingRight",
  "paddingBottom",
  "paddingHorizontal",
  "paddingVertical",
];

export const TextStyleKeys: Array<
  | "color"
  | "fontFamily"
  | "fontSize"
  | "fontStyle"
  | "fontWeight"
  | "letterSpacing"
  | "lineHeight"
  | "textAlign"
  | "textDecorationLine"
  | "textDecorationStyle"
  | "textDecorationColor"
  | "textShadowColor"
  | "textShadowOffset"
  | "textShadowRadius"
  | "textTransform"
> = [
  "color",
  "fontFamily",
  "fontSize",
  "fontStyle",
  "fontWeight",
  "letterSpacing",
  "lineHeight",
  "textAlign",
  "textDecorationLine",
  "textDecorationStyle",
  "textDecorationColor",
  "textShadowColor",
  "textShadowOffset",
  "textShadowRadius",
  "textTransform",
];

export function pick<T extends Style, U extends keyof T>(
  obj: T,
  paths: Array<U>
): Pick<T, U> {
  const ret = Object.create(null);

  paths.forEach((k) => {
    if (obj[k] !== undefined) ret[k] = obj[k];
    // eslint-disable-next-line no-param-reassign
    delete obj[k];
  });

  return ret;
}

export default pick;
