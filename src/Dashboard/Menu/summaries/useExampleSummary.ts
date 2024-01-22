import {
  CollapsibleRef,
  TExample,
  getSelectedExample,
  useSelectedExample,
} from "@src/_shared";
import { useEffect, useRef } from "react";

export const useExampleSummary = (exampleName: TExample) => {
  const collapsibleRef = useRef<CollapsibleRef>(null);

  const [isSelected, actions] = useSelectedExample(
    (state) => state.name === exampleName
  );

  const selectThisExample = () => {
    actions.setCurrent(exampleName);
  };

  useEffect(() => {
    if (!collapsibleRef.current) return;

    const unsubscribe = getSelectedExample<true>((subscribe) => {
      subscribe((state) => {
        const [, actions] = collapsibleRef.current;

        if (state.name === exampleName) return;

        actions.close();
      });
    });

    return () => unsubscribe();
  }, []);

  return {
    collapsibleRef: collapsibleRef,
    isSelected,
    selectThisExample,
  };
};
