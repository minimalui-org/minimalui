import { AppBar, Container, ScrollView } from "@minimalui/core";
import React from "react";

export const AppBarScreen: React.FunctionComponent = () => {
  return (
    <ScrollView style={{ width: "100%" }}>
      <Container>
        <AppBar />
      </Container>
    </ScrollView>
  );
};

export default AppBarScreen;
