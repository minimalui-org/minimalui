import * as React from "react";
import { Animated, FlatList, FlatListProps, View } from "react-native";

import useTheme from "./createTheme";
import { Breakpoint } from "./Theme";
import useDimensions from "./useDimensions";
import useScroll from "./useScroll";

export type ResponsiveListProps<T> = Omit<FlatListProps<T>, "renderItem"> & {
  breakpoints: {
    [key in Breakpoint]?: number;
  };
  renderItem: NonNullable<FlatListProps<T>["renderItem"]>;
};

export function ResponsiveList<T>({
  breakpoints,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  keyExtractor = (i: any) => i.key,
  renderItem,
  ...props
}: React.PropsWithChildren<ResponsiveListProps<T>>): JSX.Element {
  const { width } = useDimensions();
  const { x, y } = useScroll();
  const theme = useTheme();

  let numColumns = 1;
  Object.entries(breakpoints).forEach(([breakpoint, value]) => {
    if (value && width > theme.breakpoint[breakpoint as Breakpoint]) {
      numColumns = value;
    }
  });

  return (
    <FlatList
      key={numColumns}
      columnWrapperStyle={
        numColumns > 1
          ? {
              flex: 1,
              justifyContent: "flex-start",
            }
          : undefined
      }
      keyExtractor={keyExtractor}
      numColumns={numColumns}
      onScroll={
        x &&
        y &&
        Animated.event(
          [
            {
              nativeEvent: { contentOffset: { x, y } },
            },
          ],
          { useNativeDriver: false }
        )
      }
      renderItem={(params) => (
        <View
          key={keyExtractor(params.item, params.index)}
          style={{ flex: 1 / numColumns }}
        >
          {renderItem(params)}
        </View>
      )}
      scrollEventThrottle={30}
      {...props}
    />
  );
}

export default ResponsiveList;
