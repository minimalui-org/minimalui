import { Feather } from "@expo/vector-icons";
import { Container, Fab, Spacer, Title } from "@minimalui/core";
import * as React from "react";
import { View } from "react-native";

export const FabExample: React.FunctionComponent = () => {
  const variants = ["flat", "contained", "outlined", "gradient"] as const;
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
    <Container flex>
      {variants.map((variant) => (
        <View key={`${variant}`}>
          <Title>{variant}</Title>
          <Container
            style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}
          >
            {colors.map((color) => (
              <Fab
                key={`${variant}.${color}`}
                color={color}
                onPress={() => null}
                style={{ margin: 8, position: "relative" }}
                variant={variant}
              >
                <Feather name="plus" />
              </Fab>
            ))}
          </Container>
          <Spacer spacing={2} />
        </View>
      ))}
    </Container>
  );
};

export default FabExample;
