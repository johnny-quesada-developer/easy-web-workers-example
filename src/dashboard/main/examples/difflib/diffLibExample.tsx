import { Button } from "../../../_shared/components/button";

export const DiffLibExample = () => {
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

      <form>
        <fieldset className="mt-3 grid grid-cols-2 grid-rows-3 gap-3">
          <label
            className="text-gray-700 border-b border-gray-200 pb-2 text-sm"
            htmlFor="input1"
          >
            Input 1
          </label>

          <label
            className="text-gray-700 border-b border-gray-200 pb-2 text-sm"
            htmlFor="input2"
          >
            Input 2
          </label>

          <textarea
            className="border border-gray-200 rounded-sm p-2"
            id="input1"
            name="input1"
            rows={5}
          />

          <textarea
            className="border border-gray-200 rounded-sm p-2"
            id="input2"
            name="input2"
            rows={5}
          />

          <div className="flex justify-end col-span-2">
            <Button className="bg-blue-400 text-white px-4 py-1 rounded-sm mt-3">
              Compare
            </Button>
          </div>
        </fieldset>
      </form>
    </>
  );
};
