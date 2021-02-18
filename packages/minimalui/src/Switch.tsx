import * as Color from "color";
import * as React from "react";
import {
  Platform,
  Switch as LegacySwitch,
  SwitchProps as LegacySwitchProps,
} from "react-native";

import useTheme from "./useTheme";

export type SwitchProps = LegacySwitchProps & {
  activeThumbColor?: string;
};

export const Switch: React.FunctionComponent<SwitchProps> = (props) => {
  const theme = useTheme();

  return (
    <LegacySwitch
      activeThumbColor={
        Platform.OS === "web" ? theme.palette.primary : undefined
      }
      thumbColor={
        Platform.OS === "ios" ? undefined : theme.palette.background.paper
      }
      trackColor={{
        false: Color(theme.palette.touchable).darken(0.3).hex(),
        true: Color(theme.palette.primary).lighten(0.3).hex(),
      }}
      {...props}
    />
  );
};

export default Switch;
