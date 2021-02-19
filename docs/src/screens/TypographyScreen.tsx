import {
  Caption,
  Container,
  Headline,
  Paragraph,
  ScrollView,
  Subheading,
  Title,
} from "@minimalui/core";
import * as React from "react";

export const TypographyScreen: React.FunctionComponent = () => {
  const variants = ["text", "contained", "outlined", "gradient"] as const;
  const colors = [
    "default",
    "primary",
    "secondary",
    "error",
    "info",
    "success",
    "warning",
  ] as const;

  return (
    <ScrollView style={{ width: "100%" }}>
      <Container spacing={8}>
        <Headline>Headline</Headline>
        <Title>Title</Title>
        <Subheading>Subheading</Subheading>
        <Paragraph>Paragraph</Paragraph>
        <Caption>Caption</Caption>
      </Container>
    </ScrollView>
  );
};

export default TypographyScreen;
