/* eslint-disable sort-keys  */
/* eslint-disable camelcase */
import {
  NotoSans_400Regular,
  NotoSans_700Bold,
  useFonts,
} from "@expo-google-fonts/noto-sans";
import { ScrollProvider } from "@minimalui/core";
import React, { useRef } from "react";
import { Animated } from "react-native";

import Navigator from "./src/Navigator";

export default function App(): JSX.Element | null {
  const [loaded] = useFonts({
    NotoSansRegular: NotoSans_400Regular,
    NotoSansBold: NotoSans_700Bold,
  });
  const x = useRef(new Animated.Value(0)).current;
  const y = useRef(new Animated.Value(0)).current;

  if (!loaded) {
    return null;
  }

  return (
    <ScrollProvider x={x} y={y}>
      <Navigator />
    </ScrollProvider>
  );
}
