# Theming

## Applying a theme to the whole app
To support custom themes, you need to wrap your root component with the provider to be able to support themes.
You can provide a theme prop with a partial theme object that will be merged with the default theme:

```typescript
import * as React from 'react';
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
}
```

## Dark Mode
Dark Mode is supported out of the box. Simply pass the value "dark" in your `createTheme` call. You can see a real life example with the switch button on the top right corner of this website.
        
```typescript
import * as React from 'react';
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
}
```

## Access the theme in your components
To access the theme in your own components, you can use the useTheme hook exported from the library. This hook must be used in a component wrapper inside MinimalProvider.
        
```typescript
import * as React from 'react';
import { View } from 'react-native';
import { useTheme } from '@minimalui/core';

export default function ThemedComponent() {
    const theme = useTheme();

    return (
        <View style={{ backgroundColor: theme.palette.primary, height: 50, width: 50 }} />
    );
}
```

## Default Theme
```typescript
const defaultTheme = {
    breakpoint: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920
    },
    elevation: (depth: number) => {/* Helper returning the style corresponding to an elevation / shadow of ${depth} */},
    palette: {
        background: {
            default: "#ffffff",
            paper: "#f8f9fa"
        },
        divider: "#d3d3d3",
        error: "#f44336",
        info: "#2196f3",
        primary: "#45afe8",
        secondary: "#4bd1b8",
        success: "#4caf50",
        text: {
            disabled: "rgba(0, 0, 0, 0.38)",
            primary: "#000000",
            secondary: "#545454"
        },
        touchable: "#eeeeee",
        type: "light",
        warning: "#ff9800"
    },
    shape: {
        borderRadius: 15,
        spacing: 8,
    },
    spacing: (size: number) => {/* Helper returning ${shape.spacing} * ${size} */}
    typography: {
        fontBold: "InterBold",
        fontMedium: "InterMedium",
        fontRegular: "InterRegular",
        fontSize: 14,

        button: {/* Additionnal Text Style */},
        caption: {/* Additionnal Text Style */},
        headline: {/* Additionnal Text Style */},
        paragraph: {/* Additionnal Text Style */},
        subheading: {/* Additionnal Text Style */},
        title: {/* Additionnal Text Style */},
    }
}
```

## Overriding the default style of components
To override the default style of the exported components (for example remove the shadow / elevation from the Card component), you can use the "override" parameter of a theme. Use the component name as a key and add your style props. For certain components, you can have multiple keys for sub-components. Refer to their respective documentation page to learn more about it.
       
```typescript
import { createTheme, Theme } from '@minimalui/core';
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

export default createTheme(theme);
```