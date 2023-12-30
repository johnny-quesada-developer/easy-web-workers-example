import prismjs from "prismjs";
import { createGlobalStateWithDecoupledFuncs } from "react-global-state-hooks";
import {
  StateConfigCallbackParam,
  StoreTools,
} from "react-hooks-global-states";

import prismTomorrowUrl from "prismjs/themes/prism-tomorrow.css?url";
import prismUrl from "prismjs/themes/prism.css?url";

const loadTheme = (async (value: string) => {
  if ((loadTheme as unknown as { isLoaded: boolean }).isLoaded) return;

  await import(value === "prism-tomorrow" ? prismTomorrowUrl : prismUrl);

  prismjs.theme = value;
}) as (
  value: string
) => Promise<void> & { isLoaded: boolean; promise: Promise<void> };

export const [useTheme, getTheme, theme] = createGlobalStateWithDecoupledFuncs(
  "prism-tomorrow",
  {
    localStorage: {
      key: "app-theme",
    },
    onInit: async ({
      getState,
    }: StateConfigCallbackParam<string, null, null>) => {
      const value = getState();

      document.body.classList.add(
        value === "prism-tomorrow" ? "dark" : "light"
      );

      await loadTheme(value);
    },
    actions: {
      highlight: () => {
        return async ({ getState }: StoreTools<string>) => {
          await loadTheme(getState());

          prismjs.highlightAll();
        };
      },
      toggle: () => {
        return ({ setState }: StoreTools<string>) => {
          setState((state) =>
            state === "prism-tomorrow" ? "prism" : "prism-tomorrow"
          );

          window.location.reload();
        };
      },
    },
  }
);
