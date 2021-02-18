/* eslint-disable sort-keys  */
/* eslint-disable camelcase */
import { Inconsolata_500Medium } from "@expo-google-fonts/inconsolata";
import {
  NotoSans_400Regular,
  NotoSans_700Bold,
  useFonts,
} from "@expo-google-fonts/noto-sans";
import { createTheme, MinimalProvider } from "@minimalui/core";
import React, { useState } from "react";

import Navigator from "./src/Navigator";

export default function App(): JSX.Element | null {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const theme = createTheme({
    palette: { type: darkMode ? "dark" : "light" },
  });

  const [loaded] = useFonts({
    NotoSansRegular: NotoSans_400Regular,
    NotoSansBold: NotoSans_700Bold,
    Inconsolata: Inconsolata_500Medium,
  });

  if (!loaded) {
    return null;
  }

  return (
    <MinimalProvider theme={theme}>
      <Navigator darkMode={darkMode} setDarkMode={setDarkMode} />
    </MinimalProvider>
  );
}
