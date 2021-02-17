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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDimensions = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var useTheme_1 = require("./useTheme");
exports.useDimensions = function (dim) {
    if (dim === void 0) { dim = "window"; }
    var theme = useTheme_1.useTheme();
    var _a = react_native_1.Dimensions.get(dim), height = _a.height, width = _a.width;
    var getBreakpoint = react_1.useCallback(function (w) {
        return Object.entries(theme.breakpoint).reduce(function (prev, _a) {
            var breakpoint = _a[0], value = _a[1];
            return w > value ? breakpoint : prev;
        }, "xs");
    }, [theme.breakpoint]);
    var _b = react_1.useState({
        height: height,
        type: getBreakpoint(width),
        width: width,
    }), dimensions = _b[0], setDimensions = _b[1];
    react_1.useEffect(function () {
        var handler = function (change) {
            return setDimensions(__assign(__assign({}, change[dim]), { type: getBreakpoint(change[dim].width) }));
        };
        react_native_1.Dimensions.addEventListener("change", handler);
        return function () { return react_native_1.Dimensions.removeEventListener("change", handler); };
    }, [dim, getBreakpoint]);
    return dimensions;
};
exports.default = exports.useDimensions;
