import {
  Container,
  Headline,
  Paragraph,
  ScrollView,
  Spacer,
  Title,
} from "@minimalui/core";
import { Code, SyntaxHighlighter } from "components";
import * as React from "react";

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
          Minimal UI, a set of reusable components for all your basic needs.
          Extends the existing ones, create your own theme and build new modern
          apps.
        </Paragraph>
        <Spacer />
        <Paragraph>
          Minimal UI is ready to use for React Native on Android, iOS and Web.
          We believe in the "code once, deploy everywhere" philosophy so all of
          our components are cross-platforms and we have dedicated components
          for screen size responsiveness.
        </Paragraph>
        <Spacer />
        <Paragraph>
          The library is written in Typescript and will work with both
          Javascript and Typescript projects. All the type definitions are
          exported directly from the main library.
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
          Wrap your root component in MinimalProvider from{" "}
          <Code>@minimalui/core</Code>. If you have a vanilla React Native
          project, it's a good idea to add it in the component which is passed
          to AppRegistry.registerComponent. This will usually be in the index.js
          file. If you have an Expo project, you can do this inside the exported
          component in the App.js file.
        </Paragraph>
        <Spacer />
        <SyntaxHighlighter language="typescript">
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
