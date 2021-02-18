import { useCallback, useEffect, useState } from "react";
import { Dimensions, ScaledSize } from "react-native";

import { Breakpoint } from "./Theme";
import { useTheme } from "./useTheme";

type UseDimensions = (
  dim?: "window" | "screen"
) => { height: number; type: Breakpoint; width: number };

export const useDimensions: UseDimensions = (dim = "window") => {
  const theme = useTheme();
  const { height, width } = Dimensions.get(dim);

  const getBreakpoint = useCallback(
    (w: number): Breakpoint =>
      Object.entries(theme.breakpoint).reduce((prev, [breakpoint, value]) => {
        return w > value ? (breakpoint as Breakpoint) : prev;
      }, "xs" as Breakpoint),
    [theme.breakpoint]
  );

  const [dimensions, setDimensions] = useState<ReturnType<UseDimensions>>({
    height,
    type: getBreakpoint(width),
    width,
  });

  useEffect(() => {
    const handler = (change: { window: ScaledSize; screen: ScaledSize }) =>
      setDimensions({ ...change[dim], type: getBreakpoint(change[dim].width) });

    Dimensions.addEventListener("change", handler);

    return () => Dimensions.removeEventListener("change", handler);
  }, [dim, getBreakpoint]);

  return dimensions;
};

export default useDimensions;
