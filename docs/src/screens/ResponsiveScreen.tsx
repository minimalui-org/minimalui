import { Avatar, Container, ScrollView } from "@minimalui/core";
import React from "react";

export const ResponsiveScreen: React.FunctionComponent = () => {
  return (
    <ScrollView style={{ width: "100%" }}>
      <Container>
        <Avatar source={{ uri: "https://i.pravatar.cc/300" }} />
      </Container>
    </ScrollView>
  );
};

export default ResponsiveScreen;
