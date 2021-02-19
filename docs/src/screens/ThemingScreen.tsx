import {
  Container,
  Headline,
  Paragraph,
  ScrollView,
  Spacer,
  Title,
} from "@minimalui/core";
import { SyntaxHighlighter } from "components";
import * as React from "react";

export const ThemingScreen: React.FunctionComponent = () => {
  return (
    <ScrollView style={{ width: "100%" }}>
      <Container spacing={8}>
        <Headline>Theming</Headline>
        <Spacer spacing={4} />
        <Title>Applying a theme to the whole app</Title>
        <Spacer />
        <Paragraph>
          To support custom themes, paper exports a Provider component. You need
          to wrap your root component with the provider to be able to support
          themes:
        </Paragraph>
        <Spacer />
        <SyntaxHighlighter language="typescript">
          {`import * as React from 'react';
import { MinimalProvider } from '@minimalui/core';
import App from './src/App';

export default function Main() {
    return (
        <MinimalProvider>
            <App />
        </MinimalProvider>
    );
}`}
        </SyntaxHighlighter>
        <Spacer />
        <Paragraph>
          If no prop is specified, this will apply the default theme to the
          components (see section below). You can also provide a theme prop with
          a partial theme object that will be merged with the default theme:
        </Paragraph>
        <Spacer />
        <SyntaxHighlighter language="typescript">
          {`import * as React from 'react';
import { createTheme, MinimalProvider } from '@minimalui/core';
import App from './src/App';

export default function Main() {
    const theme = createTheme({
        palette: {
            primary: "#757ce8",
            secondary: "#3f50b5",
        }
    });

    return (
        <MinimalProvider theme={theme}>
            <App />
        </MinimalProvider>
    );
}`}
        </SyntaxHighlighter>

        <Spacer spacing={8} />

        <Title>Dark Mode</Title>
        <Spacer />
        <Paragraph>
          Dark Mode is supported out of the box. Simply pass the value "dark" in
          your createTheme call. You can see a real life example with the switch
          button on the top right corner of this website.
        </Paragraph>
        <Spacer />
        <SyntaxHighlighter language="typescript">
          {`import * as React from 'react';
import { createTheme, MinimalProvider } from '@minimalui/core';
import App from './src/App';

export default function Main() {
    const theme = createTheme({
        palette: {
            type: "dark"
        }
    });

    return (
        <MinimalProvider theme={theme}>
            <App />
        </MinimalProvider>
    );
}`}
        </SyntaxHighlighter>

        <Spacer spacing={8} />

        <Title>Access the theme in your components</Title>
        <Spacer />
        <Paragraph>
          To access the theme in your own components, you can use the useTheme
          hook exported from the library. This hook must be used in a component
          wrapper inside MinimalProvider.
        </Paragraph>
        <Spacer />
        <SyntaxHighlighter language="typescript">
          {`import * as React from 'react';
import { View } from 'react-native';
import { useTheme } from '@minimalui/core';

export default function ThemedComponent() {
    const theme = useTheme();

    return (
        <View style={{ backgroundColor: theme.palette.primary, height: 50, width: 50 }} />
    );
}`}
        </SyntaxHighlighter>

        <Spacer spacing={8} />

        <Title>Overriding the default style of components</Title>
        <Spacer />
        <Paragraph>
          To override the default style of the exported components (for example
          remove the shadow / elevation from the Card component), you can use
          the "override" parameter of a theme. Use the component name as a key
          and add your style props. For certain components, you can have
          multiple keys for sub-components. Refer to their respective
          documentation page to learn more about it.
        </Paragraph>
        <Spacer />
        <SyntaxHighlighter language="typescript">
          {`import { createTheme, Theme } from '@minimalui/core';
const defaultTheme = createTheme();

const theme: Theme = {
    override: {
        Card: {
            ...defaultTheme.elevation(0),
            borderWidth: 1,
            borderColor: #EEEEEE,
        }
    }
};

export default createTheme(theme);`}
        </SyntaxHighlighter>
      </Container>
    </ScrollView>
  );
};

export default ThemingScreen;
