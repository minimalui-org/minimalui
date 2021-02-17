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
exports.AppBar = void 0;
var React = require("react");
var react_native_1 = require("react-native");
var useScroll_1 = require("./useScroll");
var useTheme_1 = require("./useTheme");
exports.AppBar = function (_a) {
    var left = _a.left, title = _a.title, right = _a.right, style = _a.style, props = __rest(_a, ["left", "title", "right", "style"]);
    var y = useScroll_1.default().y;
    var theme = useTheme_1.default();
    var inputRange = [0, 100];
    var appBarStyle = [
        {
            alignItems: "center",
            // backgroundColor: theme.palette.background.default,
            borderBottomWidth: 1,
            flexDirection: "row",
            height: 64,
            maxHeight: 64,
            overflow: "hidden",
            paddingHorizontal: theme.spacing(2),
            zIndex: 12,
        },
        y &&
            {
                borderBottomColor: y.interpolate({
                    inputRange: inputRange,
                    outputRange: [
                        theme.palette.background.default,
                        theme.palette.divider,
                    ],
                    extrapolate: "clamp",
                }),
            },
        style,
    ];
    var titleStyle = [
        theme.typography.headline,
        {
            flex: 1,
            marginHorizontal: theme.spacing(2),
        },
        y &&
            {
                opacity: y.interpolate({
                    inputRange: [0, 100],
                    outputRange: [0, 1],
                    extrapolate: "clamp",
                }),
                position: "relative",
                top: y.interpolate({
                    inputRange: inputRange,
                    outputRange: [50, 0],
                    extrapolate: "clamp",
                }),
            },
    ];
    return (React.createElement(react_native_1.Animated.View, __assign({}, props, { style: appBarStyle }),
        left,
        title && React.createElement(react_native_1.Animated.Text, { style: titleStyle }, title),
        right));
};
exports.default = exports.AppBar;
