import { AppBar, Container, ScrollView } from "@minimalui/core";
import * as React from "react";

export const AppBarScreen: React.FunctionComponent = () => {
  return (
    <ScrollView style={{ width: "100%" }}>
      <Container spacing={8}>
        <AppBar />
      </Container>
    </ScrollView>
  );
};

export default AppBarScreen;
