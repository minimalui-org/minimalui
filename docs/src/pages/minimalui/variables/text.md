# Variable: Text

• `Const` **Text**: *React.FunctionComponent*<[*TextProps*](../types/textprops.md)\>

> TextExample

```typescript
import {
 Caption,
 Headline,
 Paragraph,
 Subheading,
 Title,
} from "@minimalui/core";
import * as React from "react";

export const TextExample: React.FunctionComponent = () => {
 return (
   <>
     <Headline>Headline</Headline>
     <Title>Title</Title>
     <Subheading>Subheading</Subheading>
     <Paragraph>Paragraph</Paragraph>
     <Caption>Caption</Caption>
   </>
 );
};

export default TextExample;

```

Defined in: [src/Text/Text.tsx:53](https://github.com/minimal-ui/minimal-ui/blob/main/packages/minimalui/src/Text/Text.tsx#L53)
