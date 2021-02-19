import * as React from "react";
import {
  Linking,
  Pressable,
  PressableProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";

import Text from "./Typography/Text";
import useTheme from "./useTheme";

export type LinkProps = PressableProps & {
  href?: string;
};

export const Link: React.FunctionComponent<LinkProps> = ({
  children,
  href,
  style,
  ...props
}) => {
  const theme = useTheme();

  const handlePress = React.useCallback(async () => {
    if (href) {
      const supported = await Linking.canOpenURL(href);

      if (supported) {
        await Linking.openURL(href);
      } else {
        // eslint-disable-next-line no-console
        console.error(`Don't know how to open this URL: ${href}`);
      }
    }
  }, [href]);

  const pressableStyle: StyleProp<ViewStyle> = [
    {
      cursor: "pointer",
    } as ViewStyle,
  ];

  const textStyle: StyleProp<TextStyle> = [
    {
      color: theme.palette.primary,
      textDecorationLine: "underline",
    },
    style as TextStyle,
  ];

  return (
    <Pressable onPress={handlePress} style={pressableStyle} {...props}>
      <Text style={textStyle}>{children}</Text>
    </Pressable>
  );
};

export default Link;
