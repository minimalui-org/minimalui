import { Avatar, Container, ScrollView, Spacer } from "@minimalui/core";
import { SyntaxHighlighter } from "components";
import * as React from "react";

export const AvatarScreen: React.FunctionComponent = () => {
  return (
    <ScrollView style={{ width: "100%" }}>
      <Container spacing={8}>
        <Avatar source={{ uri: "https://i.pravatar.cc/300" }} />
        <Spacer />
        <SyntaxHighlighter language="typescript">
          {`import * as React from 'react';
import { Avatar } from '@minimalui/core';

export default () => {
  return (
    <Avatar source={{ uri: "https://i.pravatar.cc/300" }} />
  );
}`}
        </SyntaxHighlighter>
      </Container>
    </ScrollView>
  );
};

export default AvatarScreen;
