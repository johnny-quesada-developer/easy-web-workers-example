import "./textDiffExample.scss";
import { Button } from "../../../../_shared/components/Button";
import { useCallback, useRef, useState } from "react";
import { EasyWebWorker } from "easy-web-worker";
import { DiffLibExampleComparePayload } from "./TextDiffExample.types";
import workerScript from "./textDiffExample.worker?worker&url";

// with vite we create the worker in different ways depending on if we are in production or development
const easyWebWorker = (() => {
  const mode = import.meta.env.MODE;

  if (mode === "production") {
    return new EasyWebWorker(workerScript);
  }

  const workerUrl = new URL("./TextDiffExample.worker.ts", import.meta.url);
  const worker = new Worker(workerUrl, {
    type: "module",
  });

  return new EasyWebWorker(worker, {
    url: workerUrl.href,
  });
})();

export const TextDiffExample = () => {
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

    const result = await easyWebWorker.sendToMethod<
      string,
      DiffLibExampleComparePayload
    >("compare", {
      input1: input1.toString(),
      input2: input2.toString(),
    });

    setResult(result);
  }, [formRef.current]);

  return (
    <>
      <h3 className="font-bold text-gray-500 border-b border-gray-200 pb-2">
        Comparing text input with{" "}
        <strong className=" text-black">JSDifflib</strong> and{" "}
        <strong className="text-black">EasyWebWorker</strong>
      </h3>

      <p className="text-gray-700 text-justify pt-3">
        Please add to different inputs will analyze the differences between them
        and show the result.
      </p>

      <form ref={formRef}>
        <fieldset className="text-diff-example-inputs-grid mt-3 grid grid-cols-2 gap-3">
          <label
            className="text-gray-700 border-b border-gray-200 pb-2 text-sm font-semibold"
            htmlFor="input1"
          >
            Input 1
          </label>

          <label
            className="text-gray-700 border-b border-gray-200 pb-2 text-sm font-semibold"
            htmlFor="input2"
          >
            Input 2
          </label>

          <textarea
            className="border border-gray-200 rounded-sm p-2 bg-blue-50"
            name="input1"
            rows={10}
          />

          <textarea
            className="border border-gray-200 rounded-sm p-2 bg-blue-50"
            name="input2"
            rows={10}
          />

          <div className="flex justify-end col-span-2">
            <Button
              className="bg-blue-400 text-white px-4 py-1 rounded-sm mt-3"
              onClick={compare}
            >
              Compare
            </Button>
          </div>
        </fieldset>

        <div
          className="text-diff-example-result mt-6 text-gray-700 text-justify border border-gray-200 p-3"
          dangerouslySetInnerHTML={{
            __html:
              result ||
              `<span class="text-gray-400">awaiting for results...</span>`,
          }}
        ></div>
      </form>
    </>
  );
};
