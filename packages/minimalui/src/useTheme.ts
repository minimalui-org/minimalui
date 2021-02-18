import { useContext } from "react";

import { Theme } from "./Theme";
import { ThemeContext } from "./ThemeProvider";

export const useTheme: () => Theme = () => {
  const { theme } = useContext(ThemeContext);

  if (!theme) {
    throw new Error(
      "Looks like you forgot to wrap your root component with `MinimalProvider` component from `@minimalui/core`.\n\n" +
        "Please read our getting-started guide and make sure you've followed all the required steps.\n\n" +
        "https://minimalui-org.github.io/GetStarted"
    );
  }

  return theme;
};

export default useTheme;
