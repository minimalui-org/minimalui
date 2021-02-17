import * as React from "react";
import { FlatListProps } from "react-native";
import { Breakpoint } from "./useTheme";
export declare type ResponsiveListProps<T> = Omit<FlatListProps<T>, "renderItem"> & {
    breakpoints: {
        [key in Breakpoint]?: number;
    };
    renderItem: NonNullable<FlatListProps<T>["renderItem"]>;
};
export declare function ResponsiveList<T>({ breakpoints, keyExtractor, renderItem, ...props }: React.PropsWithChildren<ResponsiveListProps<T>>): JSX.Element;
export default ResponsiveList;
