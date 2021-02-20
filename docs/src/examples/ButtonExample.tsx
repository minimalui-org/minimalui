import { Button, Container, Spacer, Title } from "@minimalui/core";
import * as React from "react";
import { View } from "react-native";

export const ButtonExample: React.FunctionComponent = () => {
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
    <View style={{ flex: 1 }}>
      {variants.map((variant) => (
        <View key={`${variant}`}>
          <Title>{variant}</Title>
          <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
            {colors.map((color) => (
              <Button
                key={`${variant}.${color}`}
                color={color}
                onPress={() => null}
                style={{ marginVertical: 8, marginLeft: 0, marginRight: 16 }}
                variant={variant}
              >
                {`${color}`}
              </Button>
            ))}
          </View>
          <Spacer spacing={2} />
        </View>
      ))}
    </View>
  );
};

export default ButtonExample;
