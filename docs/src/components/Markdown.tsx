import {
  Cell,
  Headline,
  Link,
  Paragraph,
  Row,
  Spacer,
  Subheading,
  Table,
  Text,
  Title,
  View,
} from "@minimalui/core";
import { Code, Example, SyntaxHighlighter } from "components";
import * as React from "react";
import ReactMarkdown, { RenderRules } from "react-native-markdown-display";

export const Markdown: React.FunctionComponent = (props) => {
  const rules: RenderRules = {
    blockquote: (node) => (
      <Example key={node.key}>
        {React.createElement(
          // eslint-disable-next-line
          require(`../examples/${node.children[0].children[0].children[0].content}`)
            .default
        )}
      </Example>
    ),
    code_inline: (node) => <Code key={node.key}>{node.content}</Code>,
    em: (node, children) => (
      <Text key={node.key} color="secondary">
        {children}
      </Text>
    ),
    fence: (node) => (
      <View key={node.key}>
        <Spacer spacing={2} />
        <SyntaxHighlighter
          language={((node as unknown) as { sourceInfo: string }).sourceInfo}
        >
          {node.content.trim()}
        </SyntaxHighlighter>
        <Spacer spacing={2} />
      </View>
    ),
    hardbreak: (node, children) => (
      <View key={node.key} style={{ height: 8, width: "100%" }}>
        {children}
      </View>
    ),
    heading1: (node, children) => (
      <View key={node.key}>
        <Headline>{children}</Headline>
      </View>
    ),
    heading2: (node, children) => (
      <View key={node.key}>
        <Spacer spacing={4} />
        <Title style={{ fontFamily: "NotoSansBold" }}>{children}</Title>
        <Spacer spacing={2} />
      </View>
    ),
    heading3: (node, children) => (
      <View key={node.key}>
        <Spacer spacing={4} />
        <Subheading style={{ fontFamily: "NotoSansBold" }}>
          {children}
        </Subheading>
        <Spacer spacing={2} />
      </View>
    ),
    heading4: (node, children) => (
      <View key={node.key}>
        <Spacer spacing={4} />
        <Subheading style={{ fontFamily: "NotoSansBold" }}>
          {children}
        </Subheading>
        <Spacer spacing={2} />
      </View>
    ),
    link: (node, children) => (
      <Link key={node.key} href={node.attributes.href}>
        {children}
      </Link>
    ),
    paragraph: (node, children) => (
      <Paragraph key={node.key}>{children}</Paragraph>
    ),
    table: (node, children) => (
      <View key={node.key}>
        <Table>{children}</Table>
        <Spacer />
      </View>
    ),
    td: (node, children) => (
      <Cell key={node.key}>
        <Text>{children}</Text>
      </Cell>
    ),
    text: (node) => node.content,
    th: (node, children) => (
      <Cell key={node.key}>
        <Subheading>{children}</Subheading>
      </Cell>
    ),
    tr: (node, children) => <Row key={node.key}>{children}</Row>,
  };

  const { children } = props;
  return <ReactMarkdown rules={rules}>{children}</ReactMarkdown>;
};

export default Markdown;
