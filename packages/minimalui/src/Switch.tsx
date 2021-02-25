import * as Color from "color";
import * as React from "react";
import {
  Platform,
  Switch as LegacySwitch,
  SwitchProps as LegacySwitchProps,
} from "react-native";

import useTheme from "./useTheme";

/** Any other props supplied will be provided to the element [Switch](https://reactnative.dev/docs/switch). */
export type SwitchProps = {
  /** Color of the switch when it's on (only for Android and Web). Like `thumbColor` but when it's on. */
  activeThumbColor?: string;
};

/**
 * > SwitchExample
 *
 * ```typescript
 * import { Switch } from "@minimalui/core";
 * import * as React from "react";
 *
 * export const SwitchExample: React.FunctionComponent = () => {
 *   const [state, setState] = React.useState(false);
 *
 *   const handleChange = () => setState(!state);
 *
 *   return <Switch onValueChange={handleChange} value={state} />;
 * };
 *
 * export default SwitchExample;
 * ```
 */
export const Switch: React.FunctionComponent<
  LegacySwitchProps & SwitchProps
> = (props) => {
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
