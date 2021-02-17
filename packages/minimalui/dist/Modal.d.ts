import * as React from "react";
import { ModalProps as LegacyModalProps } from "react-native";
export declare type ModalProps = LegacyModalProps & {
    onClose: () => void;
    variant?: "default" | "bottomSheet";
};
export declare const Modal: React.FunctionComponent<ModalProps>;
