import { Avatar, Container, ScrollView } from "@minimalui/core";
import * as React from "react";

export const UtilitiesScreen: React.FunctionComponent = () => {
  return (
    <ScrollView style={{ width: "100%" }}>
      <Container spacing={8}>
        <Avatar source={{ uri: "https://i.pravatar.cc/300" }} />
      </Container>
    </ScrollView>
  );
};

export default UtilitiesScreen;
