import { Collapsible, Button } from "@shared";
import merge from "easy-css-merge";
import { useExampleSummary } from "./useExampleSummary";

export const ImagesExampleSummary = () => {
  const exampleName = "images";
  const { isSelected, selectThisExample, collapsibleRef } =
    useExampleSummary(exampleName);

  return (
    <Collapsible ref={collapsibleRef} title="Resize Images" isOpen={isSelected}>
      <div className="pt-3 flex flex-col gap-3">
        <ul className="list-none flex flex-col gap-3 text-gray-600">
          <li>
            <strong>Improved Performance:</strong> Utilizing Web Workers for
            image resizing offloads intensive computations from the main browser
            UI thread, ensuring smoother user interactions without UI blockages.
          </li>

          <li>
            <strong>Responsiveness:</strong> By performing image resizing in a
            Web Worker, the main thread stays free for UI interactions, keeping
            the application responsive even during heavy processing tasks.
          </li>

          <li>
            <strong>Background Processing:</strong> Web Workers operate
            independently, allowing image resizing to be processed in the
            background, so users can continue interacting with the application
            without interruption.
          </li>

          <li>
            <strong>Resource Management:</strong> Web Workers help in more
            efficient resource management, potentially reducing memory usage on
            the main thread by offloading heavy tasks.
          </li>

          <li>
            <strong>Scalability:</strong> Delegating tasks like image resizing
            to workers helps the application scale better, preventing
            performance bottlenecks on the main thread.
          </li>
        </ul>

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
