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
exports.Container = void 0;
var React = require("react");
var react_native_1 = require("react-native");
var useTheme_1 = require("./useTheme");
exports.Container = function (_a) {
    var align = _a.align, _b = _a.direction, direction = _b === void 0 ? "column" : _b, flex = _a.flex, justify = _a.justify, style = _a.style, _c = _a.spacing, spacing = _c === void 0 ? 2 : _c, props = __rest(_a, ["align", "direction", "flex", "justify", "style", "spacing"]);
    var theme = useTheme_1.default();
    var containerStyle = [
        {
            alignItems: align,
            flex: flex === true ? 1 : flex,
            flexDirection: direction,
            justifyContent: justify,
            padding: theme.spacing(spacing),
        },
        style,
    ];
    return React.createElement(react_native_1.View, __assign({}, props, { style: containerStyle }));
};
exports.default = exports.Container;
