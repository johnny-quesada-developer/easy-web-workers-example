import { useRef } from "react";
import {
  Button,
  Collapsible,
  CollapsibleRef,
  useSelectedExample,
} from "@shared";
import merge from "easy-css-merge";

export const ParallelExampleSummary: React.FC<
  React.HTMLAttributes<HTMLElement>
> = ({ className, ...props }) => {
  const exampleName = "parallel";
  const [isSelected, actions] = useSelectedExample(
    (state) => state.name === exampleName
  );

  const collapseRef = useRef<CollapsibleRef>(null);

  return (
    <Collapsible
      ref={collapseRef}
      title="Parallel computation"
      isOpen={isSelected}
    >
      <article className={merge("mt-3", className)} {...props}>
        <p className="text-gray-600 text-justify">
          Create multiple workers to perform parallel computation never was so
          easy.
        </p>

        <br />

        <p className="text-gray-600 text-justify">
          With <strong>EasyWebWorker</strong> you can create multiple workers
          instances from a single worker file or template.
        </p>

        <br />

        <p className="text-gray-600 text-justify">
          Let's explore the potencial and advantages of{" "}
          <strong>multythreading JavaScript</strong> with{" "}
          <strong>EasyWebWorker</strong>.
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
