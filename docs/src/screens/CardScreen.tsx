import { Card, Container, ScrollView } from "@minimalui/core";
import * as React from "react";

export const CardScreen: React.FunctionComponent = () => {
  return (
    <ScrollView style={{ width: "100%" }}>
      <Container spacing={8}>
        <Card>
          <Card.Title title="Hello" />
        </Card>
      </Container>
    </ScrollView>
  );
};

export default CardScreen;
