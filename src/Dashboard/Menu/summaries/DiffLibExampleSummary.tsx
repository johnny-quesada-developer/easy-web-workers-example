import { Collapsible, Button } from "@shared";
import merge from "easy-css-merge";
import { useExampleSummary } from "./useExampleSummary";

export const DiffLibExampleSummary = () => {
  const exampleName = "text-diff";

  const { isSelected, selectThisExample, collapsibleRef } =
    useExampleSummary(exampleName);

  return (
    <Collapsible ref={collapsibleRef} title="Compare text" isOpen={isSelected}>
      <div className="pt-3 flex flex-col gap-3">
        <p className="text-gray-600 text-justify">
          Difflib is a library for comparing sequences. It can be used for
          example, for comparing files, and can produce human-readable
          differences or can be used to compare arbitrary sequences of lines of
          text.
        </p>

        <p className="text-gray-600 text-justify">
          Let's see how we can implement it by using{" "}
          <strong>EasyWebWorker</strong>.
        </p>

        <div className="flex justify-end">
          <Button
            className={merge("text-white px-4 py-1 rounded-sm w-24", {
              "bg-stone-400": isSelected,
              "bg-gray-700": !isSelected,
            })}
            onClick={selectThisExample}
          >
            {isSelected ? "Selected" : "Select"}
          </Button>
        </div>
      </div>
    </Collapsible>
  );
};
