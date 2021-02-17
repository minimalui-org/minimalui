"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useScroll = void 0;
var react_1 = require("react");
var ScrollProvider_1 = require("./ScrollProvider");
exports.useScroll = function () { return react_1.useContext(ScrollProvider_1.ScrollContext); };
exports.default = exports.useScroll;
