# Button

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

## Props

| Name               | Type           | Default  | Description |
| ------------------ | -------------- | -------- | ----------- |
| `color`            | *"default" \| "primary" \| "secondary" \| "error" \| "info" \| "success" \| "warning"*       | "default"         | Color of the button |
| `elevation`         | *number*       |           | Elevation (shadow) of the button |
| `fullWidth`         | *boolean*      | false     | If the button should take all width space |
| `style`             | *TextStyle & ViewStyle* | | Styles to be applied to the button. Text related properties will be automatically forwarded to the Text component |
| `variant`           | *"flat" \| "contained" \| "outlined" \| "gradient"*       | "text"         | Variant of the button |

Any other props supplied will be provided to the root element [Pressable](https://reactnative.dev/docs/pressable)
