import * as React from "react";
import { Animated } from "react-native";

export type ScrollContextType = {
  x?: Animated.Value;
  y?: Animated.Value;
};

export const ScrollContext = React.createContext<ScrollContextType>({
  x: undefined,
  y: undefined,
});

export const ScrollProvider: React.FunctionComponent<ScrollContextType> = ({
  x,
  y,
  ...props
}) => <ScrollContext.Provider value={{ x, y }} {...props} />;

export default ScrollProvider;
