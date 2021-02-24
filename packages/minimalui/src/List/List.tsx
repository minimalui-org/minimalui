import * as React from "react";
import { View, ViewProps } from "react-native";

import ListItem from "./ListItem";

export type ListProps = ViewProps;

type ListComponent<T> = React.FunctionComponent<T> & {
  Item: typeof ListItem;
};

export const List: ListComponent<ListProps> = (props) => {
  return <View {...props} />;
};

List.Item = ListItem;

export default List;
