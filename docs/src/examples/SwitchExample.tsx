import { Switch } from "@minimalui/core";
import * as React from "react";

export const SwitchExample = () => {
  const [state, setState] = React.useState(false);

  const handleChange = () => setState(!state);

  return <Switch onValueChange={handleChange} value={state} />;
};

export default SwitchExample;
