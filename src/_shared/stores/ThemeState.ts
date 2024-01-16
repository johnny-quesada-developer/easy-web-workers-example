import prismjs from "prismjs";
import {
  createGlobalStateWithDecoupledFuncs,
  StateConfigCallbackParam,
  StoreTools,
} from "react-global-state-hooks";

import prismTomorrowUrl from "prismjs/themes/prism-tomorrow.css?url";
import prismUrl from "prismjs/themes/prism.css?url";

const loadTheme = (value: string): Promise<void> => {
  const source = loadTheme as unknown as {
    promise: Promise<void>;
    isLoaded: boolean;
  };

  if (source.isLoaded) return Promise.resolve();
  if (source.promise) return source.promise;

  const mode = import.meta.env.MODE;
  const themeUrl = value === "prism-tomorrow" ? prismTomorrowUrl : prismUrl;

  if (mode !== "production") {
    source.promise = import(themeUrl).then(() => {
      source.isLoaded = true;
    });

    return source.promise;
  }

  source.promise = new Promise(async (resolve) => {
    const themeCss = await fetch(themeUrl).then((response) => response.text());

    const styleElement = document.createElement("style");

    styleElement.innerHTML = themeCss;
    document.head.appendChild(styleElement);

    styleElement.onload = () => {
      source.isLoaded = true;

      resolve();
    };
  });

  return source.promise;
};

export type ThemeState = "prism-tomorrow" | "prism";

export const [useTheme, getTheme, themeState] =
  createGlobalStateWithDecoupledFuncs("prism-tomorrow" as ThemeState, {
    localStorage: {
      key: "app-theme",
    },
    onInit: async ({ getState }) => {
      const value = getState();

      document.documentElement.classList.add(
        value === "prism-tomorrow" ? "dark" : "light"
      );

      await loadTheme(value);
    },
    actions: {
      highlight: () => {
        return async ({ getState }: StoreTools<ThemeState>) => {
          await loadTheme(getState());

          prismjs.highlightAll();
        };
      },
      highlightElement: (element: HTMLElement) => {
        return async ({ getState }: StoreTools<ThemeState>) => {
          await loadTheme(getState());

          prismjs.highlightElement(element);
        };
      },
      toggle: () => {
        return ({ setState }: StoreTools) => {
          setState((state) =>
            state === "prism-tomorrow" ? "prism" : "prism-tomorrow"
          );

          window.location.reload();
        };
      },
    } as const,
  });
