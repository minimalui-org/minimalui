import * as React from "react";
import { ViewProps } from "react-native";

import PortalConsumer from "./PortalConsumer";
import { PortalContext } from "./PortalHost";

export type PortalProps = ViewProps;

const Portal: React.FunctionComponent<PortalProps> = ({ children }) => {
  return (
    <PortalContext.Consumer>
      {(manager) => (
        <PortalConsumer manager={manager}>{children}</PortalConsumer>
      )}
    </PortalContext.Consumer>
  );
};

export default Portal;
