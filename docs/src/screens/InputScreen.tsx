import { Container, Input, ScrollView } from "@minimalui/core";
import * as React from "react";

export const InputScreen: React.FunctionComponent = () => {
  return (
    <ScrollView style={{ width: "100%" }}>
      <Container spacing={8}>
        <Input />
      </Container>
    </ScrollView>
  );
};

export default InputScreen;
