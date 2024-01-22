import { CodeFragment, theme, write } from "@src/_shared";
import merge from "easy-css-merge";
import React, { useRef, useState } from "react";

type WorkerCodeExamplesProps = React.HTMLAttributes<HTMLDivElement> & {};
type TExample = "javascript" | "react" | "react_ts";

const MyComponent: React.FC<WorkerCodeExamplesProps> = ({
  className,
  ...prop
}) => {
  const [example, setExample] = useState<TExample>("javascript");

  const elementRef = useRef<HTMLDivElement>(null);

  return (
    <div className={merge(className)} {...prop} ref={elementRef}>
      <div className="w-full flex flex-wrap justify-end gap-3 pb-3">
        <span className=" text-purple-600 border-gray-200 flex-1 flex justify-start items-center">
          Take a look on the code below:
        </span>

        {(["javascript", "react", "react_ts"] as TExample[]).map((item) => (
          <button
            key={item}
            className={merge("text-sm font-semibold text-gray-600", {
              "text-purple-500": example === item,
            })}
            onClick={() => setExample(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {example === "javascript" && (
        <CodeFragment
          className={merge("bg-stone-100 rounded-sm p-3 animate-fade-in")}
        >
          {write("const worker = createEasyWebWorker(({ onMessage }) => {")
            .newLine(4, "const fibonacci = (index) => {")
            .newLine(8, "if (index <= 1) return index;")
            .newLine(8, "")
            .newLine(8, "return fibonacci(index - 1) + fibonacci(index - 2);")
            .newLine(4, "};")
            .newLine(4, "")
            .newLine(4, "onMessage((message) => {")
            .newLine(8, "const { fibonacciIndex } = message.payload;")
            .newLine(8, "const result = fibonacci(fibonacciIndex);")
            .newLine(8, "")
            .newLine(8, "message.resolve(result);")
            .newLine(4, "});")
            .newLine(0, "});")
            .concat()}
        </CodeFragment>
      )}

      {example === "react" && (
        <CodeFragment
          className={merge("bg-stone-100 rounded-sm p-3 animate-fade-in")}
        >
          {write("/**")
            .newLine(0, " * If the worker should not be globally available,")
            .newLine(
              0,
              " * you can use the useRef combined with useEffect to create and dispose the worker."
            )
            .newLine(0, " */")
            .newLine(0, "const workerRef = useRef(null);")
            .newLine(0, "")
            .newLine(0, "useEffect(() => {")
            .newLine(
              4,
              "workerRef.current = createEasyWebWorker(({ onMessage }) => {"
            )
            .newLine(8, "const fibonacci = (index) => {")
            .newLine(12, "if (index <= 1) return index;")
            .newLine(12, "")
            .newLine(12, "return fibonacci(index - 1) + fibonacci(index - 2);")
            .newLine(8, "};")
            .newLine(8, "")
            .newLine(8, "onMessage((message) => {")
            .newLine(12, "const { fibonacciIndex } = message.payload;")
            .newLine(12, "const result = fibonacci(fibonacciIndex);")
            .newLine(12, "")
            .newLine(12, "message.resolve(result);")
            .newLine(8, "});")
            .newLine(4, "});")
            .newLine(4, "")
            .newLine(4, "return () => {")
            .newLine(8, "workerRef.current?.dispose();")
            .newLine(4, "};")
            .newLine(0, "}, []);")
            .concat()}
        </CodeFragment>
      )}

      {example === "react_ts" && (
        <CodeFragment
          className={merge("bg-stone-100 rounded-sm p-3 animate-fade-in")}
        >
          {write("/**")
            .newLine(0, " * If the worker should not be globally available,")
            .newLine(
              0,
              " * you can use the useRef combined with useEffect to create and dispose the worker."
            )
            .newLine(0, " */")
            .newLine(0, "type TPayload = number;")
            .newLine(0, "type TResult = number;")
            .newLine(0, "")
            .newLine(
              0,
              "const workerRef = useRef<EasyWebWorker<TPayload, TResult>>(null);"
            )
            .newLine(0, "")
            .newLine(0, "useEffect(() => {")
            .newLine(
              4,
              "workerRef.current = createEasyWebWorker<TPayload, TResult>("
            )
            .newLine(8, "({ onMessage }) => {")
            .newLine(12, "const fibonacci = (index: number) => {")
            .newLine(16, "if (index <= 1) return index;")
            .newLine(16, "")
            .newLine(16, "return fibonacci(index - 1) + fibonacci(index - 2);")
            .newLine(12, "};")
            .newLine(12, "")
            .newLine(12, "onMessage((message) => {")
            .newLine(16, "const { fibonacciIndex } = message.payload;")
            .newLine(16, "const result = fibonacci(fibonacciIndex);")
            .newLine(16, "")
            .newLine(16, "message.resolve(result);")
            .newLine(12, "});")
            .newLine(8, "}")
            .newLine(4, ");")
            .newLine(4, "")
            .newLine(4, "return () => {")
            .newLine(8, "workerRef.current?.dispose();")
            .newLine(4, "};")
            .newLine(0, "}, []);")
            .concat()}
        </CodeFragment>
      )}
    </div>
  );
};

export default MyComponent;
