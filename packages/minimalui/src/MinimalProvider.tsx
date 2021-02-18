import * as React from "react";
import { Animated } from "react-native";

import createTheme from "./createTheme";
import PortalHost from "./Portal/PortalHost";
import ScrollProvider from "./ScrollProvider";
import Theme from "./Theme";
import ThemeProvider from "./ThemeProvider";

export type MinimalProviderProps = {
  theme?: Theme;
};

export const MinimalProvider: React.FunctionComponent<MinimalProviderProps> = ({
  children,
  theme,
}) => {
  const x = React.useRef(new Animated.Value(0)).current;
  const y = React.useRef(new Animated.Value(0)).current;

  return (
    <ThemeProvider theme={theme || createTheme()}>
      <ScrollProvider x={x} y={y}>
        <PortalHost>{children}</PortalHost>
      </ScrollProvider>
    </ThemeProvider>
  );
};

export default MinimalProvider;
