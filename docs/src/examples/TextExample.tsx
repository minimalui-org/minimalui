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
