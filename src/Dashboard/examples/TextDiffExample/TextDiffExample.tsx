import "./TextDiffExample.scss";
import { Button, CodeFragment, write } from "@shared";
import { useCallback, useRef, useState } from "react";
import { EasyWebWorker } from "easy-web-worker";
import { DiffLibExampleComparePayload } from "./TextDiffExample.types";
import workerUrl from "./TextDiffExample.worker?worker&url";
import merge from "easy-css-merge";

// with vite we create the worker in different ways depending on if we are in production or development
const isProduction = import.meta.env.MODE === "production";

const worker = new EasyWebWorker(
  isProduction
    ? workerUrl
    : new URL("./TextDiffExample.worker.ts", import.meta.url),
  {
    workerOptions: {
      type: "module",
    },
  }
);

export const TextDiffExample: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  className,
  ...props
}) => {
  const formRef = useRef(null);
  const [result, setResult] = useState("");

  const compare = useCallback(async () => {
    const formData = new FormData(formRef.current);
    const [[, input1], [, input2]] = Array.from(formData.entries());

    const isFormFilled = input1 && input2;

    if (!isFormFilled) {
      alert("Please fill the form");

      return;
    }

    const result = await worker.sendToMethod<
      string,
      DiffLibExampleComparePayload
    >("compare", {
      input1: input1.toString(),
      input2: input2.toString(),
    });

    setResult(result);
  }, [formRef.current]);

  return (
    <div className={merge("mt-3", className)} {...props}>
      <h3 className="font-bold text-gray-500 border-b border-gray-200 pb-2">
        Comparing text input with{" "}
        <strong className=" text-black">JSDifflib</strong> and{" "}
        <strong className="text-black">EasyWebWorker</strong>
      </h3>

      <p className="text-gray-600 text-justify pt-3">
        Please add to different inputs will analyze the differences between them
        and show the result.
      </p>

      <form ref={formRef}>
        <fieldset className="text-diff-example-inputs-grid mt-3 grid grid-cols-2 gap-3">
          <label
            className="text-gray-600 border-b border-gray-200 pb-2 text-sm font-semibold"
            htmlFor="input1"
          >
            Input 1
          </label>

          <label
            className="text-gray-600 border-b border-gray-200 pb-2 text-sm font-semibold"
            htmlFor="input2"
          >
            Input 2
          </label>

          <textarea
            className="border border-gray-200 rounded-sm p-2 bg-indigo-25"
            name="input1"
            rows={10}
          />

          <textarea
            className="border border-gray-200 rounded-sm p-2 bg-indigo-25"
            name="input2"
            rows={10}
          />

          <div className="flex justify-end col-span-2">
            <Button
              className="bg-gray-700 text-white px-4 py-1 rounded-sm mt-3"
              onClick={compare}
            >
              Compare
            </Button>
          </div>
        </fieldset>

        <div
          className="text-diff-example-result mt-6 text-gray-600 text-justify border border-gray-200 p-3 bg-indigo-25"
          dangerouslySetInnerHTML={{
            __html:
              result ||
              `<span class="text-gray-400">awaiting for results...</span>`,
          }}
        ></div>

        <p className="text-gray-600 mt-3">
          For this example we are using an Static Easy Web Worker.. Which is
          composed by separate file instead of the function template.
        </p>

        <p className="text-gray-600 mt-3">
          Creating is also simple as with the function template, take a look at
          the code below:
        </p>

        <CodeFragment className="text-gray-600 mt-3">
          {write(
            "// worker.ts Instead of using the function template, we just create a new instance of StaticEasyWebWorker into our worker file"
          )
            .newLine(0, "const easyWorker = new StaticEasyWebWorker();")
            .newLine(0, "")
            .newLine(
              0,
              "// by using the API of the static worker we can keep the same cancelable promise pattern into our worker API"
            )
            .newLine(
              0,
              "easyWorker.onMessage<DiffLibExampleComparePayload, string>("
            )
            .newLine(4, '"compare",')
            .newLine(4, "(message) => {")
            .newLine(8, "const { input1, input2 } = message.payload;")
            .newLine(8, "")
            .newLine(8, "const textDiff = new TextDiff();")
            .newLine(8, "")
            .newLine(8, "// HEAVY OPERATION")
            .newLine(8, "const diff = textDiff.main(input1, input2);")
            .newLine(8, "")
            .newLine(8, "const diffDisplay = textDiff.prettyHtml(diff);")
            .newLine(8, "")
            .newLine(8, "message.resolve(diffDisplay);")
            .newLine(4, "}")
            .newLine(0, ");")
            .concat()}
        </CodeFragment>

        <p className="text-gray-600 mt-3">
          Consuming our worker then is a very easy task:
        </p>

        <CodeFragment className="text-gray-600 mt-3">
          {write("const result = await easyWebWorker.sendToMethod<")
            .newLine(6, "string, //Result type")
            .newLine(6, "{ input1: string; input2: string } // Payload type")
            .newLine(0, ">(")
            .newLine(4, '"compare", {')
            .newLine(8, "input1,")
            .newLine(8, "input2,")
            .newLine(4, "});")
            .newLine(0, "")
            .newLine(0, "setResult(result);")
            .concat()}
        </CodeFragment>
      </form>
    </div>
  );
};
