import {
  StoreTools,
  createGlobalState,
  createGlobalStateWithDecoupledFuncs,
} from "react-global-state-hooks";
import { StateConfigCallbackParam } from "react-hooks-global-states";
import { MIN_WITH_FOR_TWO_COLUMNS } from "./MenuState";

export type TExample =
  | "text-diff"
  | "images"
  | "progress-bar"
  | "parallel"
  | "typescript";

export type SelectedExample = {
  name: TExample;
};

const availableExamples: TExample[] = [
  "text-diff",
  "images",
  "progress-bar",
  "parallel",
  "typescript",
];

const initialState: SelectedExample = {
  name: "parallel",
};

export const [useSelectedExample, getSelectedExample, selectedExample] =
  createGlobalStateWithDecoupledFuncs(initialState, {
    actions: {
      setCurrent: (value: TExample) => {
        return ({ setState }: StoreTools<SelectedExample>) => {
          const baseUrl = window.location.href.split("#")[0];

          window.history.pushState({}, "", `${baseUrl}#${value}`);

          const isOneColumn = window.innerWidth < MIN_WITH_FOR_TWO_COLUMNS;

          if (!isOneColumn) {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }

          setState((state) => ({ ...state, name: value }));
        };
      },
    },
    onInit: ({ setState }) => {
      const urlParams = new URLSearchParams(window.location.search);

      let selectedExampleQueryParameters = urlParams.get("example") as TExample;

      selectedExampleQueryParameters =
        selectedExampleQueryParameters ??
        (window.location.href.split("#")[1] as TExample);

      const isValidExampleParam = availableExamples.includes(
        selectedExampleQueryParameters
      );

      const selectedExample = isValidExampleParam
        ? selectedExampleQueryParameters
        : "parallel";

      setState((state) => ({
        ...state,
        name: isValidExampleParam ? selectedExample : "parallel",
      }));

      const { origin, pathname } = window.location;
      const baseUrl = `${origin}${pathname}`;

      window.history.pushState({}, "", `${baseUrl}#${selectedExample}`);
    },
  });
