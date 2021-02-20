# Icon Button

## Icon Button

> IconButtonExample

```typescript 
import { Feather } from "@expo/vector-icons";
import { IconButton } from "@minimalui/core";
import * as React from "react";

export const IconButtonExample: React.FunctionComponent = () => {
  return (
    <IconButton onPress={() => null}>
        <Feather name="plus" />
    </IconButton>
  );
};

export default IconButtonExample;
```

## Props

| Name               | Type           | Default  | Description |
| ------------------ | -------------- | -------- | ----------- |
| `size`             | *number*       | 24       | Size (height and width) of the button that will be forwarded to the icon |

Any other props supplied will be provided to the root element [Button](/Page?file=components/button)