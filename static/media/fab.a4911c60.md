# Variable: Fab

• `Const` **Fab**: *React.FunctionComponent*<[*ButtonProps*](../types/buttonprops.md) & [*IconButtonProps*](../types/iconbuttonprops.md) & [*FabProps*](../types/fabprops.md)\>

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

Defined in: [src/Fab.tsx:33](https://github.com/minimal-ui/minimal-ui/blob/main/packages/minimalui/src/Fab.tsx#L33)
