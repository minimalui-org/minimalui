import {
  Caption,
  Headline,
  Paragraph,
  Subheading,
  Title,
  View,
} from "@minimalui/core";
import * as React from "react";

export const TextExample: React.FunctionComponent = () => {
  return (
    <View style={{ flexDirection: "column" }}>
      <Headline>Headline</Headline>
      <Title>Title</Title>
      <Subheading>Subheading</Subheading>
      <Paragraph>Paragraph</Paragraph>
      <Caption>Caption</Caption>
    </View>
  );
};

export default TextExample;
