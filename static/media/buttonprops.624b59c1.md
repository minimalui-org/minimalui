# Type alias: ButtonProps

Ƭ **ButtonProps**: *object*

Any other props supplied will be provided to the root element [Pressable](https://reactnative.dev/docs/pressable).

#### Type declaration:

Name | Type | Description |
:------ | :------ | :------ |
`children` | (`textStyle`: TextStyle[]) => React.ReactNode \| React.ReactNode | - |
`color`? | *default* \| *primary* \| *secondary* \| *error* \| *info* \| *success* \| *warning* | Color of the button. Default is *default* which is the touchable color.   |
`elevation`? | *number* | Elevation (shadow) of the button.   |
`fullWidth`? | *boolean* | If the button should take all available horizontal space.   |
`style`? | TextStyle & ViewStyle | Styles to be applied to the button. Text related properties will be automatically forwarded to the Text component.   |
`variant`? | *flat* \| *contained* \| *outlined* \| *gradient* | Variant of the button. Default is *flat*.   |

Defined in: [src/Button.tsx:28](https://github.com/minimal-ui/minimal-ui/blob/main/packages/minimalui/src/Button.tsx#L28)
