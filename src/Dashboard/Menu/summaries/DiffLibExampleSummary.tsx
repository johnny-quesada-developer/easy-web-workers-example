import { Collapsible, Button, useSelectedExample } from "@shared";

export const DiffLibExampleSummary = () => {
  const exampleName = "text-diff";
  const [isSelected, actions] = useSelectedExample(
    (state) => state.name === exampleName
  );

  return (
    <Collapsible title="Compare text" isOpen={isSelected}>
      <p className="text-gray-600 text-justify mt-3">
        difflib is a library for comparing sequences. It can be used for
        example, for comparing files, and can produce human-readable differences
        or can be used to compare arbitrary sequences of lines of text.
      </p>

      <p className="text-gray-600 text-justify mt-3">
        Let's see how we can implement it by using{" "}
        <strong>EasyWebWorker</strong>.
      </p>

      <div className="flex justify-end">
        <Button
          className={`${
            isSelected ? "bg-stone-400" : "bg-gray-700"
          } text-white px-4 py-1 rounded-sm mt-3  w-24`}
          onClick={() => actions.setCurrent(exampleName)}
        >
          {isSelected ? "Selected" : "Select"}
        </Button>
      </div>
    </Collapsible>
  );
};
