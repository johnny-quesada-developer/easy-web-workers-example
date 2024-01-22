import { Collapsible, Button } from "@shared";
import merge from "easy-css-merge";
import { useExampleSummary } from "./useExampleSummary";

export const TypescriptExampleSummary = () => {
  const exampleName = "typescript";
  const { isSelected, selectThisExample, collapsibleRef } =
    useExampleSummary(exampleName);

  return (
    <Collapsible
      ref={collapsibleRef}
      title="Typescript transpiler"
      isOpen={isSelected}
    >
      <p className="text-gray-600 text-justify mt-3">
        Not to much to say, this is a typescript online transpiler, you can
        write your code and see the transpiled result.
      </p>

      <div className="flex justify-end">
        <Button
          className={merge("text-white px-4 py-1 rounded-sm mt-3  w-24", {
            "bg-stone-400": isSelected,
            "bg-gray-700": !isSelected,
          })}
          onClick={selectThisExample}
        >
          {isSelected ? "Selected" : "Select"}
        </Button>
      </div>
    </Collapsible>
  );
};
