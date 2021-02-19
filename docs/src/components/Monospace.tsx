import { Text } from "@minimalui/core";
import * as React from "react";

export const Monospace: React.FunctionComponent = ({ children }) => {
  const textStyle = {
    fontFamily: "Inconsolata",
  };

  return <Text style={textStyle}>{children}</Text>;
};

export default Monospace;
