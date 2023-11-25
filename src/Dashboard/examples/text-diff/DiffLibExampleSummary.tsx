import { Card, Collapsible } from "../../../_shared/components";
import { Button } from "../../../_shared/components/Button";
import { useSelectedExample } from "../../../_shared/stores/SelectedExample";

export const DiffLibExampleSummary = () => {
  const exampleName = "text-diff";
  const [isSelected, setSelection] = useSelectedExample(
    (state) => state.name === exampleName || state.name === "intro"
  );

  return (
    <Card>
      <Collapsible title="Compare text" isOpen={isSelected}>
        <p className="text-gray-700 text-justify mt-3">
          difflib is a library for comparing sequences. It can be used for
          example, for comparing files, and can produce human-readable
          differences or can be used to compare arbitrary sequences of lines of
          text.
        </p>

        <p className="text-gray-700 text-justify mt-3">
          Let's see how we can implement it by using{" "}
          <strong>EasyWebWorker</strong>.
        </p>

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
    </Card>
  );
};
