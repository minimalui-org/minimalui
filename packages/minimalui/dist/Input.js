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
exports.Input = void 0;
var React = require("react");
var react_native_1 = require("react-native");
var useTheme_1 = require("./useTheme");
exports.Input = function (_a) {
    var style = _a.style, props = __rest(_a, ["style"]);
    var theme = useTheme_1.default();
    var inputStyle = [
        {
            backgroundColor: theme.palette.touchable,
            borderRadius: theme.shape.borderRadius,
            paddingHorizontal: theme.spacing(3),
            paddingVertical: theme.spacing(2),
        },
        react_native_1.Platform.OS === "web"
            ? { outlineColor: theme.palette.primary }
            : undefined,
        style,
    ];
    return (React.createElement(react_native_1.TextInput, __assign({ placeholderTextColor: theme.palette.text.disabled, selectionColor: theme.palette.primary, style: inputStyle }, props)));
};
exports.default = exports.Input;
