import { Card, Collapsible } from "../../../_shared/components";
import { Button } from "../../../_shared/components/Button";
import { useSelectedExample } from "../../../_shared/stores/SelectedExample";

export const ImagesExampleSummary = () => {
  const exampleName = "images";
  const [isSelected, setSelection] = useSelectedExample(
    (state) => state.name === exampleName
  );

  return (
    <li className="">
      <Card>
        <Collapsible title="Convert Images" isOpen={isSelected}>
          <div className="text-left text-gray-700 text-sm">
            <ul className="list-none">
              <li className="my-2">
                <strong>Improved Performance:</strong> Utilizing Web Workers for
                image resizing offloads intensive computations from the main
                browser UI thread, ensuring smoother user interactions without
                UI blockages.
              </li>
              <li className="mb-2">
                <strong>Responsiveness:</strong> By performing image resizing in
                a Web Worker, the main thread stays free for UI interactions,
                keeping the application responsive even during heavy processing
                tasks.
              </li>
              <li className="mb-2">
                <strong>Background Processing:</strong> Web Workers operate
                independently, allowing image resizing to be processed in the
                background, so users can continue interacting with the
                application without interruption.
              </li>
              <li className="mb-2">
                <strong>Resource Management:</strong> Web Workers help in more
                efficient resource management, potentially reducing memory usage
                on the main thread by offloading heavy tasks.
              </li>
              <li className="mb-2">
                <strong>Scalability:</strong> Delegating tasks like image
                resizing to workers helps the application scale better,
                preventing performance bottlenecks on the main thread.
              </li>
            </ul>
          </div>

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
    </li>
  );
};
