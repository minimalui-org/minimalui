"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConditionalWrapper = void 0;
exports.ConditionalWrapper = function (_a) {
    var children = _a.children, condition = _a.condition, render = _a.render;
    return (condition ? render(children) : children);
};
exports.default = exports.ConditionalWrapper;
