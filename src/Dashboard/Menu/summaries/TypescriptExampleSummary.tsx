import { Collapsible, Button, useSelectedExample } from "@shared";

export const TypescriptExampleSummary = () => {
  const exampleName = "typescript";
  const [isSelected, actions] = useSelectedExample(
    (state) => state.name === exampleName
  );

  return (
    <Collapsible title="Typescript transpiler" isOpen={isSelected}>
      <p className="text-gray-600 text-justify mt-3">
        Not to much to say, this is a typescript online transpiler, you can
        write your code and see the transpiled result.
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
