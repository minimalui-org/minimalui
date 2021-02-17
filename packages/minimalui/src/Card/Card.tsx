import * as React from "react";
import { StyleProp, View, ViewProps, ViewStyle } from "react-native";

// import useTheme from "../useTheme";
import CardMedia from "./CardMedia";
import CardTitle from "./CardTitle";

export type CardProps = ViewProps;

type CardComponent<T> = React.FunctionComponent<T> & {
  Media: typeof CardMedia;
  Title: typeof CardTitle;
};

export const Card: CardComponent<CardProps> = ({ style, ...props }) => {
  // const theme = useTheme();

  const cardStyle: StyleProp<ViewStyle> = [
    {
      // borderRadius: theme.shape.borderRadius,
      // backgroundColor: theme.palette.background.paper,
      overflow: "hidden",
    },
    // theme.elevation(5),
    style,
  ];

  return <View {...props} style={cardStyle} />;
};

Card.Media = CardMedia;
Card.Title = CardTitle;

export default Card;
