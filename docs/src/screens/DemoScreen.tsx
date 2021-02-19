import {
  Container,
  Headline,
  Paragraph,
  ScrollView,
  Spacer,
  Title,
} from "@minimalui/core";
import * as React from "react";

export const DemoScreen: React.FunctionComponent = () => {
  return (
    <ScrollView style={{ width: "100%" }}>
      <Container spacing={8}>
        <Headline>Demo</Headline>
        <Spacer spacing={4} />
        <Title>Web</Title>
        <Spacer />
        <Paragraph>
          This documentation site was made with Minimal UI. All the components
          you see in the doc are real components exported from the library.
        </Paragraph>
        <Spacer />

        <Spacer spacing={8} />

        <Title>Android</Title>
        <Spacer />
        <Paragraph>Soon.</Paragraph>
        <Spacer />
      </Container>
    </ScrollView>
  );
};

export default DemoScreen;
