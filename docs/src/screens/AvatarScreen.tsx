import { Avatar, Container, ScrollView } from "@minimalui/core";
import React from "react";

export const AvatarScreen: React.FunctionComponent = () => {
  return (
    <ScrollView style={{ width: "100%" }}>
      <Container>
        <Avatar source={{ uri: "https://i.pravatar.cc/300" }} />
      </Container>
    </ScrollView>
  );
};

export default AvatarScreen;
