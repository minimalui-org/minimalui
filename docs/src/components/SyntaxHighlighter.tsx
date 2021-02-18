import { useTheme } from "@minimalui/core";
import React from "react";
import { Text, TextStyle, View } from "react-native";
import Highlighter, { SyntaxHighlighterProps } from "react-syntax-highlighter";
import {
  tomorrow as lightStyle,
  tomorrowNight as darkStyle,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

type Node = {
  children?: Node[];
  properties?: {
    className: string[];
  };
  tagName?: string;
  type: string;
  value?: string;
};

type StyleSheet = { [key: string]: TextStyle };

type RendererParams = {
  rows: Node[];
  stylesheet: StyleSheet;
};

export const SyntaxHighlighter: React.FunctionComponent<SyntaxHighlighterProps> = (
  props
) => {
  const theme = useTheme();

  let stylesheet: StyleSheet;

  const renderNode = (nodes: Node[], key = "0", className: string[] = []) =>
    nodes.reduce<React.ReactNode[]>((acc, node, index) => {
      if (node.children) {
        acc.push(
          ...renderNode(
            node.children,
            `${key}.${index}`,
            node.properties?.className
          )
        );
      }

      if (node.value) {
        acc.push(
          <Text
            // eslint-disable-next-line react/no-array-index-key
            key={`${key}.${index}`}
            style={[
              {
                color: stylesheet.hljs.color,
              },
              ...className.map((c) => stylesheet[c]),
              {
                fontSize: 14,
                fontFamily: "Inconsolata",
              },
            ]}
          >
            {node.value}
          </Text>
        );
      }

      return acc;
    }, []);

  const nativeRenderer = (params: RendererParams) => {
    stylesheet = params.stylesheet;
    return (
      <View
        style={[
          stylesheet.hljs,
          { backgroundColor: theme.palette.background.paper, padding: 16 },
        ]}
      >
        {renderNode(params.rows)}
      </View>
    );
  };

  return (
    <Highlighter
      {...props}
      CodeTag={View}
      customStyle={{
        padding: 0,
      }}
      PreTag={View}
      renderer={nativeRenderer}
      style={theme.palette.type === "light" ? lightStyle : darkStyle}
    />
  );
};

export default SyntaxHighlighter;
