"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortalConsumer = void 0;
var React = require("react");
exports.PortalConsumer = function (_a) {
    var children = _a.children, manager = _a.manager;
    var key = React.useRef();
    React.useEffect(function () {
        if (!manager) {
            throw new Error("Looks like you forgot to wrap your root component with `MinimalProvider` component from `@minimalui/core`.\n\n" +
                "Please read our getting-started guide and make sure you've followed all the required steps.\n\n" +
                "https://minimalui-org.github.io/GetStarted");
        }
        if (!key.current) {
            key.current = manager.mount(children);
        }
        else {
            manager.update(key.current, children);
        }
        return function () {
            if (key.current)
                manager.unmount(key.current);
        };
    }, [children, manager]);
    return null;
};
exports.default = exports.PortalConsumer;
