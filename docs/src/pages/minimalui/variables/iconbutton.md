# Variable: IconButton

• `Const` **IconButton**: *React.FunctionComponent*<[*ButtonProps*](../types/buttonprops.md) & [*IconButtonProps*](../types/iconbuttonprops.md)\>

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

Defined in: [src/IconButton.tsx:39](https://github.com/minimal-ui/minimal-ui/blob/main/packages/minimalui/src/IconButton.tsx#L39)
