import * as React from "react";
import {
  Image,
  ImageProps,
  ImageStyle,
  StyleProp,
  View,
  ViewStyle,
} from "react-native";

import useTheme from "./useTheme";

/** Any other props supplied will be provided to the element [Image](https://reactnative.dev/docs/image). */
export type AvatarProps = {
  /** Size of the image. Default is *64*. */
  size?: number;
  style?: StyleProp<ViewStyle>;
};

/**
 * > AvatarExample
 *
 * ```typescript
 * import { Avatar } from "@minimalui/core";
 * import * as React from "react";
 *
 * export const AvatarExample = () => {
 *   return <Avatar source={{ uri: "https://i.pravatar.cc/300" }} />;
 * };
 *
 * export default AvatarExample;
 * ```
 */
export const Avatar: React.FunctionComponent<ImageProps & AvatarProps> = ({
  size = 64,
  source,
  style,
  ...props
}) => {
  const theme = useTheme();

  const containerStyle: StyleProp<ViewStyle> = [
    {
      backgroundColor: theme.palette.touchable,
      borderRadius: size / 2,
      height: size,
      width: size,
    },
    style,
  ];

  const imageStyle: StyleProp<ImageStyle> = [
    {
      borderRadius: size / 2,
      height: size,
      width: size,
    },
    style,
  ];

  return (
    <View style={containerStyle} {...props}>
      <Image source={source} style={imageStyle} />
    </View>
  );
};

export default Avatar;
