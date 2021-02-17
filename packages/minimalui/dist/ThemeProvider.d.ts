import { Theme } from "createTheme";
import * as React from "react";
export declare type ThemeContextType = {
    theme?: Theme;
};
export declare const ThemeContext: React.Context<ThemeContextType>;
export declare const ThemeProvider: React.FunctionComponent<ThemeContextType>;
export default ThemeProvider;
