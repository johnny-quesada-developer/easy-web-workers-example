import {
  createGlobalStateWithDecoupledFuncs,
  StoreTools,
} from "react-global-state-hooks";

export type MenuState = {
  isMenuOpen: boolean;
};

const initialState: MenuState = {
  isMenuOpen: true,
};

export const [useMenuState, getMenuState, menuStateActions] =
  createGlobalStateWithDecoupledFuncs(initialState, {
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
