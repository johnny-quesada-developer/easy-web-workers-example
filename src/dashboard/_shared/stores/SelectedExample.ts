import { createGlobalState, StoreTools } from "react-global-state-hooks";

export type SelectedExample = {
  name: "text-diff" | "images";
};

const initialState: SelectedExample = {
  name: "text-diff",
};

export const useSelectedExample = createGlobalState(initialState);
