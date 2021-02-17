import * as React from "react";
import { ViewProps } from "react-native";

import type { PortalMethods } from "./PortalHost";

type PortalConsumerProps = ViewProps & {
  manager: PortalMethods;
};

export const PortalConsumer: React.FunctionComponent<PortalConsumerProps> = ({
  children,
  manager,
}) => {
  const key = React.useRef<number>();

  React.useEffect(() => {
    if (!manager) {
      throw new Error(
        "Looks like you forgot to wrap your root component with `MinimalProvider` component from `@minimalui/core`.\n\n" +
          "Please read our getting-started guide and make sure you've followed all the required steps.\n\n" +
          "https://minimalui-org.github.io/GetStarted"
      );
    }

    if (!key.current) {
      key.current = manager.mount(children);
    } else {
      manager.update(key.current, children);
    }

    return () => {
      if (key.current) manager.unmount(key.current);
    };
  }, [children, manager]);

  return null;
};

export default PortalConsumer;
