import { Breakpoint } from "./createTheme";
declare type UseDimensions = (dim?: "window" | "screen") => {
    height: number;
    type: Breakpoint;
    width: number;
};
export declare const useDimensions: UseDimensions;
export default useDimensions;
