import { useEffect, useRef } from "react";
import {
  Button,
  Collapsible,
  CollapsibleRef,
  useSelectedExample,
} from "../../_shared";

export const IntroExampleSummary: React.FC<
  React.HTMLAttributes<HTMLElement>
> = ({ className, ...props }) => {
  const exampleName = "intro";
  const [isSelected, setSelection] = useSelectedExample(
    (state) => state.name === exampleName
  );

  const collapseRef = useRef<CollapsibleRef>(null);

  return (
    <Collapsible ref={collapseRef} title="Introduction" isOpen={isSelected}>
      <article className={`${className} mt-3`} {...props}>
        <p className="text-gray-700 text-justify">
          <strong>EasyWebWorker</strong> Is a lightweight and easy-to-use
          library for creating web workers in JavaScript applications. With Easy
          Web Worker, you can move computationally expensive tasks and logic off
          the main thread and into a separate thread, improving the performance
          and responsiveness of your application. The library has several
          benefits, including improved performance, an easy-to-use API, and
          TypeScript support.
        </p>
      </article>

      <div className="flex justify-end">
        <Button
          className={`${
            isSelected ? "bg-gray-300" : "bg-blue-400"
          } text-white px-4 py-1 rounded-sm mt-3`}
          onClick={() => setSelection({ name: exampleName })}
        >
          {isSelected ? "Selected" : "Select"}
        </Button>
      </div>
    </Collapsible>
  );
};
