import { useRef } from "react";
import {
  Button,
  Collapsible,
  CollapsibleRef,
  useSelectedExample,
} from "@shared";
import merge from "easy-css-merge";

export const ProgressBarExampleSummary: React.FC<
  React.HTMLAttributes<HTMLElement>
> = ({ className, ...props }) => {
  const exampleName = "progress-bar";
  const [isSelected, actions] = useSelectedExample(
    (state) => state.name === exampleName
  );

  const collapseRef = useRef<CollapsibleRef>(null);

  return (
    <Collapsible ref={collapseRef} title="Report progress" isOpen={isSelected}>
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
          onClick={() => actions.setCurrent(exampleName)}
        >
          {isSelected ? "Selected" : "Select"}
        </Button>
      </div>
    </Collapsible>
  );
};
