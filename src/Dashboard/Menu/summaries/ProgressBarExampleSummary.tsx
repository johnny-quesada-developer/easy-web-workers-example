import { Button, Collapsible } from "@shared";
import merge from "easy-css-merge";
import { useExampleSummary } from "./useExampleSummary";

export const ProgressBarExampleSummary: React.FC<
  React.HTMLAttributes<HTMLElement>
> = ({ className, ...props }) => {
  const exampleName = "progress-bar";
  const { isSelected, selectThisExample, collapsibleRef } =
    useExampleSummary(exampleName);

  return (
    <Collapsible
      ref={collapsibleRef}
      title="Report progress"
      isOpen={isSelected}
    >
      <article className={merge("mt-3", className)} {...props}>
        <p className="text-gray-600 text-justify">
          With <strong>EasyWebWorker</strong>, you can move computationally
          expensive tasks and logic off the main thread and into a separate
          thread, improving the performance and responsiveness of your
          application. The library has
        </p>

        <br />

        <p className="text-gray-600 text-justify">
          Let's see how simple is to report progress from a worker to the main
          thread.
        </p>
      </article>

      <div className="flex justify-end">
        <Button
          className={merge("text-white px-4 py-1 rounded-sm mt-3 w-24", {
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
