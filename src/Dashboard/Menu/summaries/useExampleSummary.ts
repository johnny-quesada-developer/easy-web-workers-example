import { CollapsibleRef, TExample, selectedExample$ } from "@src/_shared";
import { useEffect, useRef } from "react";

export const useExampleSummary = (exampleName: TExample) => {
  const collapsibleRef = useRef<CollapsibleRef>(null);

  const [isSelected, actions] = selectedExample$.use(
    (state) => state.name === exampleName
  );

  const selectThisExample = () => {
    actions.setCurrent(exampleName);
  };

  useEffect(() => {
    if (!collapsibleRef.current) return;

    const unsubscribe = selectedExample$.subscribe((state) => {
      const [, actions] = collapsibleRef.current;

      if (state.name === exampleName) return;

      actions.close();
    });

    return () => unsubscribe();
  }, []);

  return {
    collapsibleRef: collapsibleRef,
    isSelected,
    selectThisExample,
  };
};
