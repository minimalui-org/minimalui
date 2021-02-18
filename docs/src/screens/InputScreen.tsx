import { Container, Input, ScrollView } from "@minimalui/core";
import React from "react";

export const InputScreen: React.FunctionComponent = () => {
  return (
    <ScrollView style={{ width: "100%" }}>
      <Container>
        <Input />
      </Container>
    </ScrollView>
  );
};

export default InputScreen;
