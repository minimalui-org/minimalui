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
exports.Button = void 0;
var Color = require("color");
var expo_linear_gradient_1 = require("expo-linear-gradient");
var React = require("react");
var react_native_1 = require("react-native");
var ConditionalWrapper_1 = require("./ConditionalWrapper");
var useTheme_1 = require("./useTheme");
var pick_1 = require("./utilities/pick");
exports.Button = function (props) {
    var _a = props.color, color = _a === void 0 ? "default" : _a, elevation = props.elevation, fullWidth = props.fullWidth, style = props.style, children = props.children, _b = props.variant, variant = _b === void 0 ? "text" : _b, rest = __rest(props, ["color", "elevation", "fullWidth", "style", "children", "variant"]);
    var disabled = rest.disabled;
    var theme = useTheme_1.default();
    var containerStyle = [
        {
            borderRadius: theme.shape.borderRadius,
            overflow: "hidden",
            width: (fullWidth && "100%") || undefined,
        },
        theme.elevation(elevation ||
            ((variant === "contained" || variant === "gradient") && 10) ||
            0),
        style && { borderRadius: style.borderRadius },
    ];
    var paddingStyle = [
        {
            alignItems: "center",
            paddingHorizontal: theme.spacing(3),
            paddingVertical: theme.spacing(2),
        },
        style && pick_1.default(style, pick_1.PaddingStyleKeys),
    ];
    var textStyle = [
        {
            color: Object({
                contained: color === "default" ? theme.palette.text.primary : "white",
                gradient: "white",
                outlined: color === "default"
                    ? theme.palette.text.primary
                    : theme.palette[color],
                text: color === "default"
                    ? theme.palette.text.primary
                    : theme.palette[color],
            })[variant],
        },
        theme.typography.button,
        style && pick_1.default(style, pick_1.TextStyleKeys),
    ];
    var pressableStyle = function (_a) {
        var pressed = _a.pressed;
        return [
            {
                backgroundColor: Object.create({
                    contained: color === "default" ? theme.palette.touchable : theme.palette[color],
                    text: theme.palette.touchable,
                })[variant],
                borderColor: Object({
                    outlined: color === "default" ? theme.palette.divider : theme.palette[color],
                })[variant],
                borderRadius: theme.shape.borderRadius,
                borderWidth: Object.create({
                    outlined: 1,
                })[variant],
                cursor: "pointer",
                justifyContent: "center",
                opacity: react_native_1.Platform.OS === "android"
                    ? 1
                    : Object.create({
                        disabled: 0.3,
                        pressed: 0.7,
                        default: 1,
                    })[(disabled && "disabled") || (pressed && "pressed") || "default"],
                userSelect: "none",
            },
            style,
        ];
    };
    var Gradient = function (gradientProps) { return (React.createElement(expo_linear_gradient_1.LinearGradient, __assign({ colors: color === "default"
            ? [theme.palette.primary, theme.palette.secondary]
            : [
                theme.palette[color],
                Color(theme.palette[color]).rotate(-30).hex(),
            ], end: [1, 0], start: [0, 1] }, gradientProps))); };
    return (React.createElement(react_native_1.View, { style: containerStyle },
        React.createElement(ConditionalWrapper_1.default, { condition: react_native_1.Platform.OS === "android" && variant === "gradient", render: function (child) { return React.createElement(Gradient, null, child); } },
            React.createElement(react_native_1.Pressable, __assign({ android_ripple: {
                    color: Object({
                        contained: "white",
                        gradient: "white",
                        outlined: color === "default"
                            ? theme.palette.text.secondary
                            : theme.palette[color],
                        text: color === "default"
                            ? theme.palette.text.secondary
                            : theme.palette[color],
                    })[variant],
                } }, props, { style: pressableStyle }),
                React.createElement(ConditionalWrapper_1.default, { condition: react_native_1.Platform.OS !== "android" && variant === "gradient", render: function (child) { return React.createElement(Gradient, null, child); } },
                    React.createElement(react_native_1.View, { style: paddingStyle },
                        React.createElement(ConditionalWrapper_1.default, { condition: typeof children === "string", render: function (child) { return React.createElement(react_native_1.Text, { style: textStyle }, child); } },
                            React.createElement(React.Fragment, null, children instanceof Function
                                ? children(textStyle)
                                : children))))))));
};
exports.default = exports.Button;
