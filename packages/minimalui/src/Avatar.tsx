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

type AvatarProps = ImageProps & {
  size?: number;
  style?: StyleProp<ViewStyle>;
};

export const Avatar: React.FunctionComponent<AvatarProps> = ({
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
