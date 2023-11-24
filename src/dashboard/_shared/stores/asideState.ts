import { createGlobalState, StoreTools } from "react-global-state-hooks";

export type AsideState = {
  isMenuOpen: boolean;
};

const initialState: AsideState = {
  isMenuOpen: true,
};

export const useAsideState = createGlobalState(initialState, {
  actions: {
    open() {
      return ({ setState }: StoreTools<typeof initialState>) => {
        setState((state) => ({ ...state, isMenuOpen: true }));
      };
    },

    close() {
      return ({ setState }: StoreTools<typeof initialState>) => {
        setState((state) => ({ ...state, isMenuOpen: false }));
      };
    },
  } as const,
});
