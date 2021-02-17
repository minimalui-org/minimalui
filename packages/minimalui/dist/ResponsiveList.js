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
exports.ResponsiveList = void 0;
var React = require("react");
var react_native_1 = require("react-native");
var useDimensions_1 = require("./useDimensions");
var useScroll_1 = require("./useScroll");
var useTheme_1 = require("./useTheme");
function ResponsiveList(_a) {
    var breakpoints = _a.breakpoints, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _b = _a.keyExtractor, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    keyExtractor = _b === void 0 ? function (i) { return i.key; } : _b, renderItem = _a.renderItem, props = __rest(_a, ["breakpoints", "keyExtractor", "renderItem"]);
    var width = useDimensions_1.default().width;
    var _c = useScroll_1.default(), x = _c.x, y = _c.y;
    var theme = useTheme_1.default();
    var numColumns = 1;
    Object.entries(breakpoints).forEach(function (_a) {
        var breakpoint = _a[0], value = _a[1];
        if (value && width > theme.breakpoint[breakpoint]) {
            numColumns = value;
        }
    });
    return (React.createElement(react_native_1.FlatList, __assign({ key: numColumns, columnWrapperStyle: numColumns > 1
            ? {
                flex: 1,
                justifyContent: "flex-start",
            }
            : undefined, keyExtractor: keyExtractor, numColumns: numColumns, onScroll: x &&
            y &&
            react_native_1.Animated.event([
                {
                    nativeEvent: { contentOffset: { x: x, y: y } },
                },
            ], { useNativeDriver: false }), renderItem: function (params) { return (React.createElement(react_native_1.View, { key: keyExtractor(params.item, params.index), style: { flex: 1 / numColumns } }, renderItem(params))); }, scrollEventThrottle: 30 }, props)));
}
exports.ResponsiveList = ResponsiveList;
exports.default = ResponsiveList;
