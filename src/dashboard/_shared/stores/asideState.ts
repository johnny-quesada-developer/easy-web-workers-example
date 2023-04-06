import { GlobalStore, StoreTools } from "react-global-state-hooks";

export type AsideState = {
  isMenuOpen: boolean;
};

const asideStore = new GlobalStore(
  {
    isMenuOpen: true,
  } as AsideState,
  null,
  {
    open() {
      return ({ setState }: StoreTools<AsideState>) => {
        setState((state) => ({ ...state, isMenuOpen: true }));
      };
    },

    close() {
      return ({ setState }: StoreTools<AsideState>) => {
        setState((state) => ({ ...state, isMenuOpen: false }));
      };
    },
  } as const
);

export const useAsideState = asideStore.getHook();

export const [_, asideState] = asideStore.getHookDecoupled();
