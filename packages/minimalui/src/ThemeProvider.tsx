import { Theme } from "createTheme";
import * as React from "react";

export type ThemeContextType = {
  theme?: Theme;
};

export const ThemeContext = React.createContext<ThemeContextType>({
  theme: undefined,
});

export const ThemeProvider: React.FunctionComponent<ThemeContextType> = ({
  theme,
  ...props
}) => <ThemeContext.Provider value={{ theme }} {...props} />;

export default ThemeProvider;
