import {
  createGlobalStateWithDecoupledFuncs,
  StoreTools,
} from "react-global-state-hooks";

export const MIN_WITH_FOR_TWO_COLUMNS = 768;

export type MenuState = {
  isMenuOpen: boolean;
  isMenuVisible: boolean;
};

const initialState: MenuState = {
  isMenuOpen: true,
  isMenuVisible: true,
};

export const [useMenuState, getMenuState, menu] =
  createGlobalStateWithDecoupledFuncs(initialState, {
    actions: {
      open() {
        return ({ setState }: StoreTools<typeof initialState>) => {
          window.scrollTo({ top: 0, behavior: "smooth" });

          setState((state) => ({ ...state, isMenuOpen: true }));
        };
      },

      close() {
        return ({ setState }: StoreTools<typeof initialState>) => {
          setState((state) => ({ ...state, isMenuOpen: false }));
        };
      },

      setVisibility(isMenuVisible: boolean) {
        return ({ setState }: StoreTools<typeof initialState>) => {
          const isOneColumn = window.innerWidth < MIN_WITH_FOR_TWO_COLUMNS;

          setState((state) => ({
            ...state,
            isMenuVisible,
            isMenuOpen:
              isOneColumn && !isMenuVisible ? false : state.isMenuOpen,
          }));
        };
      },
    } as const,
    localStorage: {
      key: "app-menu",
      encrypt: true,
    },
  });
