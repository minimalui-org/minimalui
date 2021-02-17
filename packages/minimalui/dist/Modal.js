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
exports.Modal = void 0;
var React = require("react");
var react_native_1 = require("react-native");
var useTheme_1 = require("./useTheme");
exports.Modal = function (_a) {
    var children = _a.children, onClose = _a.onClose, _b = _a.variant, variant = _b === void 0 ? "default" : _b, visible = _a.visible, style = _a.style, props = __rest(_a, ["children", "onClose", "variant", "visible", "style"]);
    var _c = React.useState(false), open = _c[0], setOpen = _c[1];
    React.useEffect(function () {
        if (visible) {
            setOpen(true);
        }
        else {
            setTimeout(function () { return setOpen(false); }, 300);
        }
    }, [visible]);
    var theme = useTheme_1.default();
    var overlayStyle = [
        {
            backgroundColor: "rgba(0,0,0,0.7)",
            flex: 1,
            justifyContent: variant === "bottomSheet" ? "flex-end" : "center",
            zIndex: 100,
        },
    ];
    var contentStyle = [
        {
            backgroundColor: theme.palette.background.paper,
            borderRadius: theme.shape.borderRadius,
            margin: theme.spacing(2),
            maxHeight: react_native_1.Dimensions.get("screen").height * 0.8,
            overflow: "hidden",
            paddingBottom: variant === "bottomSheet" ? 50 : 0,
            position: "relative",
            top: variant === "bottomSheet" ? 50 : 0,
        },
        style,
    ];
    var translateY = react_native_1.Dimensions.get("screen").height / 1.5;
    var slideInUp = {
        from: {
            translateY: translateY,
        },
        to: {
            translateY: 0,
        },
    };
    var slideOutDown = {
        from: {
            translateY: 0,
        },
        to: {
            translateY: translateY,
        },
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(react_native_1.Modal, __assign({ animationType: "fade", transparent: true, visible: open }, props),
            React.createElement(react_native_1.TouchableWithoutFeedback, { onPress: onClose },
                React.createElement(react_native_1.View, { style: overlayStyle },
                    React.createElement(react_native_1.TouchableWithoutFeedback, { onPress: function () { return null; } },
                        React.createElement(react_native_1.View, { style: contentStyle }, children)))))));
};
