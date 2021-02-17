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
exports.Avatar = void 0;
var React = require("react");
var react_native_1 = require("react-native");
var useTheme_1 = require("./useTheme");
exports.Avatar = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 64 : _b, source = _a.source, style = _a.style, props = __rest(_a, ["size", "source", "style"]);
    var theme = useTheme_1.default();
    var containerStyle = [
        {
            backgroundColor: theme.palette.touchable,
            borderRadius: size / 2,
            height: size,
            width: size,
        },
        style,
    ];
    var imageStyle = [
        {
            borderRadius: size / 2,
            height: size,
            width: size,
        },
        style,
    ];
    return (React.createElement(react_native_1.View, __assign({ style: containerStyle }, props),
        React.createElement(react_native_1.Image, { source: source, style: imageStyle })));
};
exports.default = exports.Avatar;
