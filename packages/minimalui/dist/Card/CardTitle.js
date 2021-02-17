"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardTitle = void 0;
var React = require("react");
var react_native_1 = require("react-native");
var useTheme_1 = require("../useTheme");
var LEFT_SIZE = 40;
exports.CardTitle = function (_a) {
    var left = _a.left, right = _a.right, subtitle = _a.subtitle, _b = _a.subtitleNumberOfLines, subtitleNumberOfLines = _b === void 0 ? 1 : _b, title = _a.title, _c = _a.titleNumberOfLines, titleNumberOfLines = _c === void 0 ? 1 : _c;
    var theme = useTheme_1.default();
    var containerStyle = [
        {
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            minHeight: subtitle || left || right ? 72 : 50,
        },
    ];
    var leftStyle = [
        {
            height: LEFT_SIZE,
            justifyContent: "center",
            marginRight: 16,
            width: LEFT_SIZE,
        },
    ];
    var rightStyle = [];
    var contentStyle = [
        { flex: 1, flexDirection: "column", justifyContent: "center" },
    ];
    var titleStyle = [theme.typography.subheading];
    var subtitleStyle = [theme.typography.caption];
    return (React.createElement(react_native_1.View, { style: containerStyle },
        left ? (React.createElement(react_native_1.View, { style: leftStyle }, left({
            size: LEFT_SIZE,
        }))) : null,
        React.createElement(react_native_1.View, { style: contentStyle },
            title ? (React.createElement(react_native_1.Text, { numberOfLines: titleNumberOfLines, style: titleStyle }, title)) : null,
            subtitle ? (React.createElement(react_native_1.Text, { numberOfLines: subtitleNumberOfLines, style: subtitleStyle }, subtitle)) : null),
        React.createElement(react_native_1.View, { style: rightStyle }, right ? right({ size: 24 }) : null)));
};
exports.default = exports.CardTitle;
