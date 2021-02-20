# Switch

## Example

> SwitchExample

```typescript
import { Switch } from "@minimalui/core";
import * as React from "react";

export const SwitchExample: React.FunctionComponent = () => {
  const [state, setState] = React.useState(false);

  const handleChange = () => setState(!state);

  return <Switch onValueChange={handleChange} value={state} />;
};

export default SwitchExample;
```

## Props

| Name               | Type           | Default  | Description |
| ------------------ |:--------------:| --------:|------------:|
| `activeThumbColor` | *string*       |          | Color of the switch when it's on (only for Android and Web). Like `thumbColor` but when it's on. |

Any other props supplied will be provided to the root element [Switch](https://reactnative.dev/docs/switch)