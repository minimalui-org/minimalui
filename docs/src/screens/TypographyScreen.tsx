import {
  Caption,
  Container,
  Headline,
  Paragraph,
  ScrollView,
  Title,
} from "@minimalui/core";
import React from "react";

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
      <Container>
        <Headline>Headline</Headline>
        <Title>Title</Title>
        <Paragraph>Paragraph</Paragraph>
        <Caption>Caption</Caption>
      </Container>
    </ScrollView>
  );
};

export default TypographyScreen;
