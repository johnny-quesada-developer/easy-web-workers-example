import { Button, Collapsible } from "@shared";
import merge from "easy-css-merge";
import { useExampleSummary } from "./useExampleSummary";

export const ParallelExampleSummary: React.FC<
  React.HTMLAttributes<HTMLElement>
> = ({ className, ...props }) => {
  const exampleName = "parallel";
  const { isSelected, selectThisExample, collapsibleRef } =
    useExampleSummary(exampleName);

  return (
    <Collapsible
      ref={collapsibleRef}
      title="Parallel computation"
      isOpen={isSelected}
    >
      <div className="pt-3 flex flex-col gap-3">
        <article
          className={merge("flex flex-col gap-3 text-gray-600", className)}
          {...props}
        >
          <p className="">
            Create multiple workers to perform parallel computation never was so
            easy.
          </p>

          <p className="text-gray-600">
            With <strong>easy-web-worker</strong> you can create multiple
            workers instances from a single worker file or template.
          </p>

          <p className="text-gray-600">
            Let's explore the potencial and advantages of{" "}
            <strong>multythreading JavaScript</strong> with{" "}
            <strong>EasyWebWorker</strong>.
          </p>
        </article>

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
