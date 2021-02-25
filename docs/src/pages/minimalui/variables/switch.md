# Variable: Switch

• `Const` **Switch**: *React.FunctionComponent*<LegacySwitchProps & [*SwitchProps*](../types/switchprops.md)\>

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

Defined in: [src/Switch.tsx:35](https://github.com/minimal-ui/minimal-ui/blob/main/packages/minimalui/src/Switch.tsx#L35)
