import * as React from "react";

export type ConditionalWrapperProps = {
  children: JSX.Element;
  condition: boolean;
  render: (children: JSX.Element) => JSX.Element;
};

export const ConditionalWrapper: React.FunctionComponent<ConditionalWrapperProps> = ({
  children,
  condition,
  render,
}) => (condition ? render(children) : children);

export default ConditionalWrapper;
