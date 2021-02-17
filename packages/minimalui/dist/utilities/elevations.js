"use strict";
/* eslint-disable sort-keys */
/**
 * React-Native cross-platform elevations: https://gist.github.com/mmazzarolo/84b36e89180a9ba22a32de5cdf813eb7
 * Based on https://ethercreative.github.io/react-native-shadow-generator/
 * The gist was buggy, Naeem fixed.
 *
 * Usage:
 * 1. Import "elevations" from this file
 *		import { elevations } from "config/elevations"
 * 2. Use it. Assuming you need an elevation of 2 (based on the Android
 *		elevation standard), doing the following will cast the same shadow
 *		on both platforms:
 *		return <View style={[{ width: 50, height: 50 }, elevations[2]]} />
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.elevations = void 0;
var react_native_1 = require("react-native");
var webDepth = {
    umbra: [
        "0px 0px 0px 0px",
        "0px 2px 1px -1px",
        "0px 3px 1px -2px",
        "0px 3px 3px -2px",
        "0px 2px 4px -1px",
        "0px 3px 5px -1px",
        "0px 3px 5px -1px",
        "0px 4px 5px -2px",
        "0px 5px 5px -3px",
        "0px 5px 6px -3px",
        "0px 6px 6px -3px",
        "0px 6px 7px -4px",
        "0px 7px 8px -4px",
        "0px 7px 8px -4px",
        "0px 7px 9px -4px",
        "0px 8px 9px -5px",
        "0px 8px 10px -5px",
        "0px 8px 11px -5px",
        "0px 9px 11px -5px",
        "0px 9px 12px -6px",
        "0px 10px 13px -6px",
        "0px 10px 13px -6px",
        "0px 10px 14px -6px",
        "0px 11px 14px -7px",
        "0px 11px 15px -7px",
    ],
    penumbra: [
        "0px 0px 0px 0px",
        "0px 1px 1px 0px",
        "0px 2px 2px 0px",
        "0px 3px 4px 0px",
        "0px 4px 5px 0px",
        "0px 5px 8px 0px",
        "0px 6px 10px 0px",
        "0px 7px 10px 1px",
        "0px 8px 10px 1px",
        "0px 9px 12px 1px",
        "0px 10px 14px 1px",
        "0px 11px 15px 1px",
        "0px 12px 17px 2px",
        "0px 13px 19px 2px",
        "0px 14px 21px 2px",
        "0px 15px 22px 2px",
        "0px 16px 24px 2px",
        "0px 17px 26px 2px",
        "0px 18px 28px 2px",
        "0px 19px 29px 2px",
        "0px 20px 31px 3px",
        "0px 21px 33px 3px",
        "0px 22px 35px 3px",
        "0px 23px 36px 3px",
        "0px 24px 38px 3px",
    ],
    ambient: [
        "0px 0px 0px 0px",
        "0px 1px 3px 0px",
        "0px 1px 5px 0px",
        "0px 1px 8px 0px",
        "0px 1px 10px 0px",
        "0px 1px 14px 0px",
        "0px 1px 18px 0px",
        "0px 2px 16px 1px",
        "0px 3px 14px 2px",
        "0px 3px 16px 2px",
        "0px 4px 18px 3px",
        "0px 4px 20px 3px",
        "0px 5px 22px 4px",
        "0px 5px 24px 4px",
        "0px 5px 26px 4px",
        "0px 6px 28px 5px",
        "0px 6px 30px 5px",
        "0px 6px 32px 5px",
        "0px 7px 34px 6px",
        "0px 7px 36px 6px",
        "0px 8px 38px 7px",
        "0px 8px 40px 7px",
        "0px 8px 42px 7px",
        "0px 9px 44px 8px",
        "0px 9px 46px 8px",
    ],
};
var webColor = {
    umbra: "rgba(0,0,0,0.2)",
    penumbra: "rgba(0,0,0,0.14)",
    ambient: "rgba(0,0,0,0.12)",
};
var derive = function (i, a, b, a2, b2) {
    return ((i - a) * (b2 - a2)) / (b - a) + a2;
};
var parseShadow = function (raw) {
    var values = raw.split(" ").map(function (val) { return +val.replace("px", ""); });
    return {
        x: values[0],
        y: values[1],
        blur: values[2],
        spread: values[3],
    };
};
var maxElevation = 24;
var generateElevationStyle = function (depth) {
    if (depth === void 0) { depth = 0; }
    var style = {};
    if (react_native_1.Platform.OS === "android") {
        style = {
            elevation: depth,
        };
    }
    else if (react_native_1.Platform.OS === "ios") {
        var s = parseShadow(webDepth.penumbra[depth]);
        var y = s.y === 1 ? 1 : Math.floor(s.y * 0.5);
        style = {
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: y,
            },
            shadowOpacity: depth <= 0 ? 0 : Number(derive(depth - 1, 1, 24, 0.2, 0.6).toFixed(2)),
            shadowRadius: Number(derive(s.blur, 1, 38, 1, 16).toFixed(2)),
        };
    }
    else if (react_native_1.Platform.OS === "web") {
        style = {
            elevation: depth,
            zIndex: depth,
            boxShadow: "\n\t\t\t\t" + webDepth.umbra[depth] + " " + webColor.umbra + ",\n\t\t\t\t" + webDepth.penumbra[depth] + " " + webColor.penumbra + ",\n\t\t\t\t" + webDepth.ambient[Math.max(0, depth - 1)] + " " + webColor.ambient + "\n\t\t\t",
        };
    }
    return style;
};
exports.elevations = new Array(maxElevation + 1)
    .fill(undefined)
    .map(function (x, index) { return generateElevationStyle(index); });
exports.default = exports.elevations;
