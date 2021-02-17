"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTheme = void 0;
var react_native_1 = require("react-native");
var elevations_1 = require("./utilities/elevations");
exports.useTheme = function () {
    var breakpoint = {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
    };
    var elevation = function (depth) {
        if (depth === void 0) { depth = 1; }
        return elevations_1.default[depth];
    };
    var lightPalette = {
        background: {
            default: "white",
            paper: "#eceff1",
        },
        divider: "#d3d3d3",
        error: "#f44336",
        info: "#2196f3",
        primary: "#45afe8",
        secondary: "#4bd1b8",
        success: "#4caf50",
        text: {
            disabled: "rgba(0, 0, 0, 0.38)",
            primary: "#000000",
            secondary: "#545454",
        },
        touchable: "#eeeeee",
        type: "light",
        warning: "#ff9800",
    };
    // const darkPalette: Theme["palette"] = {
    //   background: {
    //     default: "#212121",
    //     paper: "#333333",
    //   },
    //   divider: "white",
    //   error: "#f44336",
    //   info: "#2196f3",
    //   primary: "#45afe8",
    //   secondary: "#4bd1b8",
    //   success: "#4caf50",
    //   text: {
    //     disabled: "rgba(0, 0, 0, 0.38)",
    //     primary: "white",
    //     secondary: "white",
    //   },
    //   touchable: "#353535",
    //   type: "light",
    //   warning: "#ff9800",
    // };
    // const palette = (() => true)() ? lightPalette : darkPalette;
    var palette = lightPalette;
    var spacing = function (size) {
        if (size === void 0) { size = 1; }
        return size * 8;
    };
    var defaultFontSize = 14;
    var typography = react_native_1.StyleSheet.create({
        button: {
            fontWeight: "600",
            fontFamily: "NotoSansBold",
            fontSize: defaultFontSize,
        },
        caption: {
            color: palette.text.secondary,
            fontFamily: "NotoSansRegular",
            fontSize: defaultFontSize,
        },
        headline: {
            color: palette.text.primary,
            fontFamily: "NotoSansBold",
            fontSize: defaultFontSize * 1.5,
        },
        paragraph: {
            color: palette.text.secondary,
            fontFamily: "NotoSansRegular",
            fontSize: defaultFontSize,
        },
        subheading: {
            color: palette.text.primary,
            fontFamily: "NotoSansBold",
            fontSize: defaultFontSize * 1.1,
        },
        title: {
            color: palette.text.primary,
            fontFamily: "NotoSansBold",
            fontSize: defaultFontSize * 1.3,
        },
    });
    return {
        breakpoint: breakpoint,
        elevation: elevation,
        palette: palette,
        shape: {
            borderRadius: 15,
        },
        spacing: spacing,
        typography: typography,
    };
};
exports.default = exports.useTheme;
