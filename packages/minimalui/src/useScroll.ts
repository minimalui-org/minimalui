import { useContext } from "react";

import { ScrollContext, ScrollContextType } from "./ScrollProvider";

export type UseScroll = () => ScrollContextType;

export const useScroll: UseScroll = () => useContext(ScrollContext);

export default useScroll;
