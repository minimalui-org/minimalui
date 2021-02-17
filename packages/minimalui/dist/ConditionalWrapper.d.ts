import * as React from "react";
export declare type ConditionalWrapperProps = {
    children: JSX.Element;
    condition: boolean;
    render: (children: JSX.Element) => JSX.Element;
};
export declare const ConditionalWrapper: React.FunctionComponent<ConditionalWrapperProps>;
export default ConditionalWrapper;
