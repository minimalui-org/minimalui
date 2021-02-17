"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var React = require("react");
var react_native_1 = require("react-native");
/**
 * Portal host is the component which actually renders all Portals.
 */
var PortalManager = /** @class */ (function (_super) {
    __extends(PortalManager, _super);
    function PortalManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            portals: [],
        };
        _this.mount = function (key, children) {
            _this.setState(function (state) { return ({
                portals: __spreadArrays(state.portals, [{ key: key, children: children }]),
            }); });
        };
        _this.update = function (key, children) {
            return _this.setState(function (state) { return ({
                portals: state.portals.map(function (item) {
                    if (item.key === key) {
                        return __assign(__assign({}, item), { children: children });
                    }
                    return item;
                }),
            }); });
        };
        _this.unmount = function (key) {
            return _this.setState(function (state) { return ({
                portals: state.portals.filter(function (item) { return item.key !== key; }),
            }); });
        };
        return _this;
    }
    PortalManager.prototype.render = function () {
        return this.state.portals.map(function (_a) {
            var key = _a.key, children = _a.children;
            return (React.createElement(react_native_1.View, { key: key, collapsable: false /* Need collapsable=false here to clip the elevations, otherwise they appear above sibling components */, pointerEvents: "box-none", style: react_native_1.StyleSheet.absoluteFill }, children));
        });
    };
    return PortalManager;
}(React.PureComponent));
exports.default = PortalManager;
