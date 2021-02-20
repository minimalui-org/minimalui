import { Container, useTheme } from "@minimalui/core";
import * as React from "react";
import { ViewStyle } from "react-native";

export const Example: React.FunctionComponent = ({ children }) => {
  const theme = useTheme();

  const containerStyle: ViewStyle = {
    borderColor: theme.palette.divider,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
  };

  return (
    <Container style={containerStyle} xs={3}>
      {children}
    </Container>
  );
};

export default Example;
