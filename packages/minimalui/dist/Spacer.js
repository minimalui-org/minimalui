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
exports.Spacer = void 0;
var React = require("react");
var react_native_1 = require("react-native");
var useTheme_1 = require("./useTheme");
exports.Spacer = function (_a) {
    var _b = _a.spacing, spacing = _b === void 0 ? 2 : _b, style = _a.style, props = __rest(_a, ["spacing", "style"]);
    var theme = useTheme_1.default();
    var spacerStyle = [
        { height: theme.spacing(spacing), width: theme.spacing(spacing) },
        style,
    ];
    return React.createElement(react_native_1.View, __assign({}, props, { style: spacerStyle }));
};
exports.default = exports.Spacer;
