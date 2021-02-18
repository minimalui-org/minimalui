import {
  Container,
  Headline,
  Paragraph,
  ScrollView,
  Spacer,
  Title,
  View,
} from "@minimalui/core";
import { SyntaxHighlighter } from "components";
import React from "react";
import { Platform } from "react-native";

export const GetStartedScreen: React.FunctionComponent = () => {
  return (
    <ScrollView style={{ width: "100%" }}>
      <Container spacing={8}>
        <Headline>Get Started</Headline>
        <Spacer spacing={4} />
        <Title>Why should you try Minimal UI?</Title>
        <Spacer />
        <Paragraph>
          Don't reinvent the wheel. Create beautiful React Native apps by using
          Minimal UI, a set of usable components for all your basic needs.
          Extends the existing ones, create your own theme and build new modern
          apps.
        </Paragraph>
        <Spacer />
        <Paragraph>
          Minimal UI is ready to use for Android, iOS and Web.
        </Paragraph>

        <Spacer spacing={8} />

        <Title>Installation</Title>
        <Spacer />
        <Paragraph>Open a terminal in your project's folder and run:</Paragraph>
        <Spacer />
        <SyntaxHighlighter language="bash">
          yarn add @minimalui/core
        </SyntaxHighlighter>
        <Spacer />
        <Paragraph>or</Paragraph>
        <Spacer />
        <SyntaxHighlighter language="bash">
          npm install --save @minimalui/core
        </SyntaxHighlighter>

        <Spacer spacing={8} />

        <Title>Usage</Title>
        <Spacer />
        <Paragraph>
          Wrap your root component in MinimalProvider from @minimalui/core. If
          you have a vanilla React Native project, it's a good idea to add it in
          the component which is passed to AppRegistry.registerComponent. This
          will usually be in the index.js file. If you have an Expo project, you
          can do this inside the exported component in the App.js file.
        </Paragraph>
        <Spacer />
        <SyntaxHighlighter language="bash">
          {`import * as React from 'react';
import { AppRegistry } from 'react-native';
import { MinimalProvider } from '@minimalui/core';
import { name as appName } from './app.json';
import App from './src/App';

export default function Main() {
  return (
    <MinimalProvider>
      <App />
    </MinimalProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);`}
        </SyntaxHighlighter>
        <Spacer />
        <Paragraph>
          MinimalProvider will provides your App with context values to manage
          theming, responsiveness, scrolling. It also acts as a portal for
          components that need to be rendered at the root level.
        </Paragraph>
      </Container>
    </ScrollView>
  );
};

export default GetStartedScreen;
