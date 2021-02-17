"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pick = exports.TextStyleKeys = exports.PaddingStyleKeys = exports.MarginStyleKeys = void 0;
exports.MarginStyleKeys = [
    "margin",
    "marginTop",
    "marginLeft",
    "marginRight",
    "marginBottom",
    "marginHorizontal",
    "marginVertical",
];
exports.PaddingStyleKeys = [
    "padding",
    "paddingTop",
    "paddingLeft",
    "paddingRight",
    "paddingBottom",
    "paddingHorizontal",
    "paddingVertical",
];
exports.TextStyleKeys = [
    "color",
    "fontFamily",
    "fontSize",
    "fontStyle",
    "fontWeight",
    "letterSpacing",
    "lineHeight",
    "textAlign",
    "textDecorationLine",
    "textDecorationStyle",
    "textDecorationColor",
    "textShadowColor",
    "textShadowOffset",
    "textShadowRadius",
    "textTransform",
];
function pick(obj, paths) {
    var ret = Object.create(null);
    paths.forEach(function (k) {
        ret[k] = obj[k];
        // eslint-disable-next-line no-param-reassign
        delete obj[k];
    });
    return ret;
}
exports.pick = pick;
exports.default = pick;
