"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconButton = void 0;
var React = require("react");
var react_native_1 = require("react-native");
var Button_1 = require("./Button");
var useTheme_1 = require("./useTheme");
exports.IconButton = function (_a) {
    var children = _a.children, _b = _a.size, size = _b === void 0 ? 24 : _b, style = _a.style, props = __rest(_a, ["children", "size", "style"]);
    var theme = useTheme_1.default();
    var iconButtonStyle = [
        {
            borderRadius: 1000,
            padding: theme.spacing(1),
        },
        style,
    ];
    return (React.createElement(Button_1.default, __assign({}, props, { style: react_native_1.StyleSheet.flatten(iconButtonStyle) }), function (textStyle) {
        return React.cloneElement(children, {
            color: textStyle
                .map(function (t) { return t.color; })
                .filter(function (c) { return c; })
                .pop(),
            size: size,
        });
    }));
};
exports.default = exports.IconButton;
