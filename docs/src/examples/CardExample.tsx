import { Card, Container, ScrollView } from "@minimalui/core";
import * as React from "react";

export const CardExample = () => {
  return (
    <ScrollView style={{ width: "100%" }}>
      <Container xs={8}>
        <Card>
          <Card.Title title="Hello" />
        </Card>
      </Container>
    </ScrollView>
  );
};

export default CardExample;
