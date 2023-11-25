import { createGlobalState } from "react-global-state-hooks";

export type TExample = "text-diff" | "images" | "intro";

export type SelectedExample = {
  name: TExample;
};

const initialState: SelectedExample = {
  name: "intro",
};

export const useSelectedExample = createGlobalState(initialState);
