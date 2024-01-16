import { themeState } from "@src/_shared";
import React, { useRef, useState } from "react";

type WorkerCodeExamplesProps = React.HTMLAttributes<HTMLDivElement> & {};
type TExample = "javascript" | "react" | "react_ts";

const MyComponent: React.FC<WorkerCodeExamplesProps> = ({
  className,
  ...prop
}) => {
  const [example, setExample] = useState<TExample>("javascript");

  const elementRef = useRef<HTMLDivElement>(null);

  themeState.highlight();

  return (
    <div className={`${className}`} {...prop} ref={elementRef}>
      <div className="w-full flex justify-end">
        {(["javascript", "react", "react_ts"] as TExample[]).map((item) => (
          <button
            key={item}
            className={`text-sm font-semibold text-gray-600 mr-3 mb-3 ${
              example === item ? "text-purple-500" : ""
            }`}
            onClick={() => setExample(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <pre className="bg-stone-100 rounded-sm p-3 animate-fade-in">
        <code
          className={`language-javascript block overflow-scroll animate-fade-in ${
            example !== "javascript" ? "hidden" : ""
          }`}
        >
          {`const worker = createEasyWebWorker(({ onMessage }) => {
  const fibonacci = (index) => {
    if (index <= 1) return index;

    return fibonacci(index - 1) + fibonacci(index - 2);
  };

  onMessage((message) => {
    const { fibonacciIndex } = message.payload;
    const result = fibonacci(fibonacciIndex);

    message.resolve(result);
  });
});`}
        </code>

        <code
          className={`language-javascript block overflow-scroll animate-fade-in ${
            example !== "react" ? "hidden" : ""
          }`}
        >{`/**
 * If the worker should not be globally available,
 * you can use the useRef combined with useEffect to create and dispose the worker.
 */
const workerRef = useRef(null);

useEffect(() => {
  workerRef.current = createEasyWebWorker(({ onMessage }) => {
    const fibonacci = (index) => {
      if (index <= 1) return index;

      return fibonacci(index - 1) + fibonacci(index - 2);
    };

    onMessage((message) => {
      const { fibonacciIndex } = message.payload;
      const result = fibonacci(fibonacciIndex);

      message.resolve(result);
    });
  });

  return () => {
    workerRef.current?.dispose();
  };
}, []);`}</code>

        <code
          className={`language-javascript block overflow-scroll animate-fade-in ${
            example !== "react_ts" ? "hidden" : ""
          }`}
        >{`/**
 * If the worker should not be globally available,
 * you can use the useRef combined with useEffect to create and dispose the worker.
 */
type TPayload = number;
type TResult = number;

const workerRef = useRef<EasyWebWorker<TPayload, TResult>>(null);

useEffect(() => {
  workerRef.current = createEasyWebWorker<TPayload, TResult>(
    ({ onMessage }) => {
      const fibonacci = (index: number) => {
        if (index <= 1) return index;

        return fibonacci(index - 1) + fibonacci(index - 2);
      };

      onMessage((message) => {
        const { fibonacciIndex } = message.payload;
        const result = fibonacci(fibonacciIndex);

        message.resolve(result);
      });
    }
  );

  return () => {
    workerRef.current?.dispose();
  };
}, []);`}</code>
      </pre>
    </div>
  );
};

export default MyComponent;
