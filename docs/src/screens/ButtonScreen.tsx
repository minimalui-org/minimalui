import { Button, Container, ScrollView } from "@minimalui/core";
import * as React from "react";

export const ButtonScreen: React.FunctionComponent = () => {
  const variants = ["text", "contained", "outlined", "gradient"] as const;
  const colors = [
    "default",
    "primary",
    "secondary",
    "error",
    "info",
    "success",
    "warning",
  ] as const;

  return (
    <ScrollView style={{ width: "100%" }}>
      <Container spacing={8}>
        {variants.map((variant) =>
          colors.map((color) => (
            <Container key={`${variant} ${color}`}>
              <Button color={color} onPress={() => null} variant={variant}>
                {`${variant} ${color}`}
              </Button>
            </Container>
          ))
        )}
      </Container>
    </ScrollView>
  );
};

export default ButtonScreen;
