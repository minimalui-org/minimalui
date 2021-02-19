import { Text, useTheme } from "@minimalui/core";
import * as React from "react";

export const Code: React.FunctionComponent = ({ children }) => {
  const theme = useTheme();

  const textStyle = {
    backgroundColor: theme.palette.background.paper,
    fontFamily: "Inconsolata",
    fontSize: 14,
    padding: theme.spacing(0.5),
  };

  return <Text style={textStyle}>{children}</Text>;
};

export default Code;
