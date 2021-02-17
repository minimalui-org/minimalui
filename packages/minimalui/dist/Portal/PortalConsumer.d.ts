import * as React from "react";
import { ViewProps } from "react-native";
import type { PortalMethods } from "./PortalHost";
declare type PortalConsumerProps = ViewProps & {
    manager: PortalMethods;
};
export declare const PortalConsumer: React.FunctionComponent<PortalConsumerProps>;
export default PortalConsumer;
