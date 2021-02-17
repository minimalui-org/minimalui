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
exports.Frame = void 0;
var React = require("react");
var react_native_1 = require("react-native");
var useTheme_1 = require("./useTheme");
exports.Frame = function (_a) {
    var maxWidth = _a.maxWidth, style = _a.style, props = __rest(_a, ["maxWidth", "style"]);
    var theme = useTheme_1.default();
    /**
     * Needed if maxWidth is provided to center the view
     */
    var centeredStyle = {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
    };
    var frameStyle = [
        {
            flex: 1,
            maxWidth: maxWidth && theme.breakpoint[maxWidth],
        },
        style,
    ];
    return (React.createElement(react_native_1.View, { style: centeredStyle },
        React.createElement(react_native_1.View, __assign({}, props, { style: frameStyle }))));
};
exports.default = exports.Frame;
