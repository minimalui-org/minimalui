import * as React from "react";
declare type Props = {
    children: React.ReactNode;
};
export declare type PortalMethods = {
    mount: (children: React.ReactNode) => number;
    update: (key: number, children: React.ReactNode) => void;
    unmount: (key: number) => void;
};
export declare const PortalContext: React.Context<PortalMethods>;
export default class PortalHost extends React.Component<Props> {
    static displayName: string;
    componentDidMount(): void;
    private setManager;
    private mount;
    private update;
    private unmount;
    private nextKey;
    private queue;
    private manager;
    render(): JSX.Element;
}
export {};
