import { createGlobalState } from "react-global-state-hooks/createGlobalState";

export const MIN_WITH_FOR_TWO_COLUMNS = 768;

export type MenuState = {
  isMenuOpen: boolean;
  isMenuVisible: boolean;
};

const initialState: MenuState = {
  isMenuOpen: true,
  isMenuVisible: true,
};

export const useMenuState = createGlobalState(initialState, {
  localStorage: {
    key: "app-menu",
    encrypt: true,
  },
  actions: {
    open() {
      return ({ setState }) => {
        window.scrollTo({ top: 0, behavior: "smooth" });

        setState((state) => ({ ...state, isMenuOpen: true }));
      };
    },

    close() {
      return ({ setState }) => {
        setState((state) => ({ ...state, isMenuOpen: false }));
      };
    },

    setVisibility(isMenuVisible: boolean) {
      return ({ setState }) => {
        const isOneColumn = window.innerWidth < MIN_WITH_FOR_TWO_COLUMNS;

        setState((state) => ({
          ...state,
          isMenuVisible,
          isMenuOpen: isOneColumn && !isMenuVisible ? false : state.isMenuOpen,
        }));
      };
    },
  },
});

export const [getMenuState, menu] = useMenuState.stateControls();
