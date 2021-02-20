# Floating Action Button (FAB)

## Example

> FabExample

```typescript 
import { Feather } from "@expo/vector-icons";
import { Fab } from "@minimalui/core";
import * as React from "react";

export const FabExample: React.FunctionComponent = () => {
  return (
    <Fab onPress={() => null}>
        <Feather name="plus" />
    </Fab>
  );
};

export default FabExample;
```

## Props

| Name               | Type           | Default  | Description |
| ------------------ | -------------- | -------- | ----------- |
| `align`            | *"center" \| "left" \| "right"*       | "center"       | Position on the screen where the Fab should be aligned. |

Any other props supplied will be provided to the root element [IconButton](/Page?file=components/icon_button)
