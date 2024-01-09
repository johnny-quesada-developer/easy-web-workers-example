import { StoreTools, createGlobalState } from "react-global-state-hooks";
import { StateConfigCallbackParam } from "react-hooks-global-states";
import { MIN_WITH_FOR_TWO_COLUMNS } from "./MenuState";

export type TExample = "text-diff" | "images" | "progress-bar" | "parallel";

export type SelectedExample = {
  name: TExample;
};

const initialState: SelectedExample = {
  name: "parallel",
};

export const useSelectedExample = createGlobalState(initialState, {
  actions: {
    setCurrent: (value: TExample) => {
      return ({ setState }: StoreTools<SelectedExample>) => {
        const baseUrl = window.location.href.includes("?")
          ? window.location.href.split("?")[0]
          : window.location.href;

        window.history.pushState({}, "", `${baseUrl}?example=${value}`);

        const isOneColumn = window.innerWidth < MIN_WITH_FOR_TWO_COLUMNS;

        if (!isOneColumn) {
          /**
           * scroll to top
           */
          window.scrollTo(0, 0);
        }

        setState((state) => ({ ...state, name: value }));
      };
    },
  },
  onInit: ({
    setState,
  }: StateConfigCallbackParam<SelectedExample, null, null>) => {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedExample = urlParams.get("example") as TExample;

    setState((state) => ({ ...state, name: selectedExample || "parallel" }));

    if (selectedExample) return;

    const baseUrl = window.location.href.includes("?")
      ? window.location.href.split("?")[0]
      : window.location.href;

    window.history.pushState({}, "", `${baseUrl}?example=parallel`);
  },
});
