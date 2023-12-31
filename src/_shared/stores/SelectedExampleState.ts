import { StoreTools, createGlobalState } from "react-global-state-hooks";
import { StateConfigCallbackParam } from "react-hooks-global-states";

export type TExample = "text-diff" | "images" | "intro";

export type SelectedExample = {
  name: TExample;
};

const initialState: SelectedExample = {
  name: "intro",
};

export const useSelectedExample = createGlobalState(initialState, {
  actions: {
    setCurrent: (value: TExample) => {
      return ({ setState }: StoreTools<SelectedExample>) => {
        const baseUrl = window.location.href.includes("?")
          ? window.location.href.split("?")[0]
          : window.location.href;

        window.history.pushState({}, "", `${baseUrl}?example=${value}`);

        /**
         * scroll to top
         */
        window.scrollTo(0, 0);

        setState((state) => ({ ...state, name: value }));
      };
    },
  },
  onInit: ({
    setState,
  }: StateConfigCallbackParam<SelectedExample, null, null>) => {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedExample = urlParams.get("example") as TExample;

    setState((state) => ({ ...state, name: selectedExample || "intro" }));

    if (selectedExample) return;

    const baseUrl = window.location.href.includes("?")
      ? window.location.href.split("?")[0]
      : window.location.href;

    window.history.pushState({}, "", `${baseUrl}?example=intro`);
  },
});
