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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortalContext = void 0;
/* eslint-disable */
var React = require("react");
var react_native_1 = require("react-native");
var PortalManager_1 = require("./PortalManager");
exports.PortalContext = React.createContext(null);
var PortalHost = /** @class */ (function (_super) {
    __extends(PortalHost, _super);
    function PortalHost() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.setManager = function (manager) {
            _this.manager = manager;
        };
        _this.mount = function (children) {
            var key = _this.nextKey++;
            if (_this.manager) {
                _this.manager.mount(key, children);
            }
            else {
                _this.queue.push({ type: "mount", key: key, children: children });
            }
            return key;
        };
        _this.update = function (key, children) {
            if (_this.manager) {
                _this.manager.update(key, children);
            }
            else {
                var op = { type: "mount", key: key, children: children };
                var index = _this.queue.findIndex(function (o) { return o.type === "mount" || (o.type === "update" && o.key === key); });
                if (index > -1) {
                    // @ts-ignore
                    _this.queue[index] = op;
                }
                else {
                    _this.queue.push(op);
                }
            }
        };
        _this.unmount = function (key) {
            if (_this.manager) {
                _this.manager.unmount(key);
            }
            else {
                _this.queue.push({ type: "unmount", key: key });
            }
        };
        _this.nextKey = 0;
        _this.queue = [];
        return _this;
    }
    PortalHost.prototype.componentDidMount = function () {
        var manager = this.manager;
        var queue = this.queue;
        while (queue.length && manager) {
            var action = queue.pop();
            if (action) {
                // eslint-disable-next-line default-case
                switch (action.type) {
                    case "mount":
                        manager.mount(action.key, action.children);
                        break;
                    case "update":
                        manager.update(action.key, action.children);
                        break;
                    case "unmount":
                        manager.unmount(action.key);
                        break;
                }
            }
        }
    };
    PortalHost.prototype.render = function () {
        return (React.createElement(exports.PortalContext.Provider, { value: {
                mount: this.mount,
                update: this.update,
                unmount: this.unmount,
            } },
            React.createElement(react_native_1.View, { collapsable: false, pointerEvents: "box-none", style: styles.container }, this.props.children),
            React.createElement(PortalManager_1.default, { ref: this.setManager })));
    };
    PortalHost.displayName = "Portal.Host";
    return PortalHost;
}(React.Component));
exports.default = PortalHost;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
    },
});
