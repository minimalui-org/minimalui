/* eslint-disable no-param-reassign */
import { useMemo } from "react";
import { useWindowDimensions } from "react-native";

import { Breakpoint } from "./Theme";
import { useTheme } from "./useTheme";

type UseResponsive = <T>(breakpoints?: {
  xs?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
}) => T | undefined;

export const useResponsive: UseResponsive = (breakpoints = {}) => {
  const theme = useTheme();
  const { width } = useWindowDimensions();

  return useMemo(() => {
    const res = Object.entries({
      lg: breakpoints.lg,
      md: breakpoints.md,
      sm: breakpoints.sm,
      xl: breakpoints.xl,
    }).reduce((acc, [breakpoint, value]) => {
      if (value && width > theme.breakpoint[breakpoint as Breakpoint]) {
        return value;
      }
      return acc;
    }, breakpoints.xs);

    delete breakpoints.xs;
    delete breakpoints.sm;
    delete breakpoints.md;
    delete breakpoints.lg;
    delete breakpoints.xl;

    return res;
  }, [
    breakpoints.lg,
    breakpoints.md,
    breakpoints.sm,
    breakpoints.xl,
    breakpoints.xs,
    theme.breakpoint,
    width,
  ]);
};

export default useResponsive;
