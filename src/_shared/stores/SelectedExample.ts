import { createGlobalState, StoreTools } from "react-global-state-hooks";

export type SelectedExample = {
  name: "text-diff" | "images" | "intro";
};

const initialState: SelectedExample = {
  name: "intro",
};

export const useSelectedExample = createGlobalState(initialState);
