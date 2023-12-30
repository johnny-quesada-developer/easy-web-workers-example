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
        window.history.pushState({}, "", `/${value}`);

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
    const selectedExample = window.location.pathname.replace(
      "/",
      ""
    ) as TExample;

    setState((state) => ({ ...state, name: selectedExample || "intro" }));

    if (selectedExample) return;

    window.history.pushState({}, "", `/intro`);
  },
});
