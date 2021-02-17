import * as React from "react";
import { ButtonProps } from "./Button";
export declare type IconButtonProps = ButtonProps & {
    children: JSX.Element;
    color?: string;
    size?: number;
};
export declare const IconButton: React.FunctionComponent<IconButtonProps>;
export default IconButton;
