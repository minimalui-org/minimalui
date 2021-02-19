import {
  Cell,
  Container,
  Headline,
  Link,
  Paragraph,
  Row,
  ScrollView,
  Spacer,
  Subheading,
  Switch,
  Table,
  Title,
} from "@minimalui/core";
import { Code, Monospace, SyntaxHighlighter } from "components";
import * as React from "react";

export const SwitchScreen: React.FunctionComponent = () => {
  const [state, setState] = React.useState(false);

  return (
    <ScrollView style={{ width: "100%" }}>
      <Container spacing={8}>
        <Headline>Switch</Headline>
        <Spacer spacing={4} />
        <Title>Example</Title>
        <Spacer />
        <Switch onValueChange={() => setState(!state)} value={state} />
        <Spacer />
        <SyntaxHighlighter language="typescript">
          {`import * as React from 'react';
import { Switch } from '@minimalui/core';

export default () => {
    const [state, setState] = React.useState(false);

    return (
        <Switch value={state} onValueChange={() => setState(!state)} />
    );
}`}
        </SyntaxHighlighter>
        <Spacer spacing={8} />
        <Title>Props</Title>
        <Spacer />
        <Table>
          <Row>
            <Cell>
              <Subheading>Name</Subheading>
            </Cell>
            <Cell>
              <Subheading>Type</Subheading>
            </Cell>
            <Cell>
              <Subheading>Default</Subheading>
            </Cell>
            <Cell>
              <Subheading>Description</Subheading>
            </Cell>
          </Row>
          <Row>
            <Cell>
              <Monospace>activeThumbColor</Monospace>
            </Cell>
            <Cell>
              <Paragraph color="secondary">string</Paragraph>
            </Cell>
            <Cell />
            <Cell>
              <Paragraph>
                Color of the switch when it's on (only for Android and Web).
                Like <Code>thumbColor</Code> but when it's on.
              </Paragraph>
            </Cell>
          </Row>
        </Table>
        <Spacer />
        <Paragraph>
          Any other props supplied will be provided to the root element (
          <Link href="https://reactnative.dev/docs/switch">Switch</Link>).
        </Paragraph>
        <Spacer />
      </Container>
    </ScrollView>
  );
};

export default SwitchScreen;
