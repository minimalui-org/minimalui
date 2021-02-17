"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var PortalConsumer_1 = require("./PortalConsumer");
var PortalHost_1 = require("./PortalHost");
var Portal = function (_a) {
    var children = _a.children;
    return (React.createElement(PortalHost_1.PortalContext.Consumer, null, function (manager) { return (React.createElement(PortalConsumer_1.default, { manager: manager }, children)); }));
};
exports.default = Portal;
