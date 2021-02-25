# Variable: Button

• `Const` **Button**: *React.FunctionComponent*<*Omit*<PressableProps, *children* \| *style*\> & [*ButtonProps*](../types/buttonprops.md)\>

## Text Button

> ButtonExample

```typescript
import { Button } from "@minimalui/core";
import * as React from "react";

export const ButtonExample: React.FunctionComponent = () => {
  return (
    <Button onPress={() => null}>
        I am a button
    </Button>
  );
};

export default ButtonExample;
```

Defined in: [src/Button.tsx:69](https://github.com/minimal-ui/minimal-ui/blob/main/packages/minimalui/src/Button.tsx#L69)
