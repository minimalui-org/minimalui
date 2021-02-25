import * as React from "react";
import { Platform, TextInput, TextInputProps } from "react-native";

import useTheme from "./useTheme";

/** Any other props supplied will be provided to the element [TextInput](https://reactnative.dev/docs/textinput). */
export type InputProps = Record<string, unknown>;

/**
 * > InputExample
 *
 * ```typescript
 * import { Input } from "@minimalui/core";
 * import * as React from "react";
 *
 * export const InputExample = () => {
 *   return <Input />;
 * };
 *
 * export default InputExample;
 * ```
 */
export const Input: React.FunctionComponent<TextInputProps & InputProps> = ({
  style,
  ...props
}) => {
  const theme = useTheme();

  const inputStyle: TextInputProps["style"] = [
    {
      backgroundColor: theme.palette.touchable,
      borderRadius: theme.shape.borderRadius,
      paddingHorizontal: theme.spacing(3),
      paddingVertical: theme.spacing(2),
    },
    Platform.OS === "web"
      ? ({ outlineColor: theme.palette.primary } as TextInputProps["style"])
      : undefined,
    style,
  ];
  return (
    <TextInput
      placeholderTextColor={theme.palette.text.disabled}
      selectionColor={theme.palette.primary}
      style={inputStyle}
      {...props}
    />
  );
};

export default Input;
