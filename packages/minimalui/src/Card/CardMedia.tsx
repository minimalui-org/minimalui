import * as React from "react";
import {
  Image,
  ImageProps,
  ImageStyle,
  StyleProp,
  View,
  ViewStyle,
} from "react-native";

import useTheme from "../useTheme";

export type CardMediaProps = ImageProps;

export const CardMedia: React.FunctionComponent<CardMediaProps> = ({
  style,
  ...props
}) => {
  const theme = useTheme();

  const containerStyle: StyleProp<ViewStyle> = [
    {
      backgroundColor: theme.palette.touchable,
      borderRadius: theme.shape.borderRadius,
      height: 195,
      overflow: "hidden",
    },
  ];

  const mediaStyle: StyleProp<ImageStyle> = [
    {
      flex: 1,
      height: undefined,
      justifyContent: "flex-end",
      padding: 16,
      resizeMode: "cover",
      width: undefined,
    },
    style,
  ];

  return (
    <View style={containerStyle}>
      <Image {...props} style={mediaStyle} />
    </View>
  );
};

export default CardMedia;
