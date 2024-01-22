import EasyWebWorker, { createEasyWebWorker } from "easy-web-worker";
import workerUrl from "./TypescriptExample.worker?worker&url";
import { Button, CodeFragment, Collapsible, theme } from "@src/_shared";
import { useRef, useState, useEffect } from "react";
import merge from "easy-css-merge";

// with vite we create the worker in different ways depending on if we are in production or development
const isProduction = import.meta.env.MODE === "production";

export const TypescriptExample: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  className,
  ...props
}) => {
  const workerRef = useRef<EasyWebWorker<string, string>>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [result, setResult] = useState<string>();

  useEffect(() => {
    workerRef.current = createEasyWebWorker(
      isProduction
        ? workerUrl
        : new URL("./TypescriptExample.worker.ts", import.meta.url),
      {
        workerOptions: {
          type: "module",
        },
      }
    );

    return () => {
      workerRef.current.dispose();
    };
  }, []);

  useEffect(() => {
    const inputJavascript = containerRef.current.querySelector(
      "textarea[name='input-javascript']"
    ) as HTMLTextAreaElement;

    inputJavascript.oninput = () => {
      localStorage.setItem("typescript-example", inputJavascript.value);
    };

    inputJavascript.value = localStorage.getItem("typescript-example") || "";
  }, []);

  return (
    <div
      className={merge("flex flex-col gap-6", className)}
      {...props}
      ref={containerRef}
    >
      <h3 className="font-bold text-gray-500 border-b border-gray-200">
        Lets transpile <strong className=" text-black">Typescript</strong> with{" "}
        EasyWebWorker
      </h3>

      <Collapsible title="Typescript code" isOpen={!result} className="w-full">
        <textarea
          className={merge(
            "border border-gray-300 rounded-sm h-96 p-4 w-full",
            "bg-rose-25 dark:bg-black dark:text-gray-300"
          )}
          name="input-javascript"
          placeholder="Write some typescript code here"
        ></textarea>
      </Collapsible>

      <hr className="border-gray-300" />

      <Collapsible title="Javascript code" isOpen={true} className="w-full">
        <CodeFragment className="max-w-full overflow-hidden">
          {result ? result : "// Your transpiled code will appear here"}
        </CodeFragment>
      </Collapsible>

      <Button
        className="flex justify-center items-center bg-stone-400 text-white px-4 py-1 rounded-sm mt-3  w-32"
        onClick={() => {
          const inputJavascript = containerRef.current.querySelector(
            "textarea[name='input-javascript']"
          ) as HTMLTextAreaElement;

          if (!inputJavascript) return;

          return workerRef.current.send(inputJavascript.value).then(setResult);
        }}
      >
        Transpile
      </Button>
    </div>
  );
};
