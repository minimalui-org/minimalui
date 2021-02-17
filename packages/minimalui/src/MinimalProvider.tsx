import * as React from "react";
import { Animated } from "react-native";

import createTheme, { Theme } from "./createTheme";
import PortalHost from "./Portal/PortalHost";
import ScrollProvider from "./ScrollProvider";
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
    <PortalHost>
      <ThemeProvider theme={theme || createTheme()}>
        <ScrollProvider x={x} y={y}>
          {children}
        </ScrollProvider>
      </ThemeProvider>
    </PortalHost>
  );
};

export default MinimalProvider;
