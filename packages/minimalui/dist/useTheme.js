"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTheme = void 0;
var react_1 = require("react");
var ThemeProvider_1 = require("./ThemeProvider");
exports.useTheme = function () {
    var theme = react_1.useContext(ThemeProvider_1.ThemeContext).theme;
    if (!theme) {
        throw new Error("Looks like you forgot to wrap your root component with `MinimalProvider` component from `@minimalui/core`.\n\n" +
            "Please read our getting-started guide and make sure you've followed all the required steps.\n\n" +
            "https://minimalui-org.github.io/GetStarted");
    }
    return theme;
};
exports.default = exports.useTheme;
