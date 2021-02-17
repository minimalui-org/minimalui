"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinimalProvider = void 0;
var React = require("react");
var react_native_1 = require("react-native");
var createTheme_1 = require("./createTheme");
var PortalHost_1 = require("./Portal/PortalHost");
var ScrollProvider_1 = require("./ScrollProvider");
var ThemeProvider_1 = require("./ThemeProvider");
exports.MinimalProvider = function (_a) {
    var children = _a.children, theme = _a.theme;
    var x = React.useRef(new react_native_1.Animated.Value(0)).current;
    var y = React.useRef(new react_native_1.Animated.Value(0)).current;
    return (React.createElement(PortalHost_1.default, null,
        React.createElement(ThemeProvider_1.default, { theme: theme || createTheme_1.default() },
            React.createElement(ScrollProvider_1.default, { x: x, y: y }, children))));
};
exports.default = exports.MinimalProvider;
