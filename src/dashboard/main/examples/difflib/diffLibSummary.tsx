import { Card, Collapsible } from "../../../_shared/components";
import { Button } from "../../../_shared/components/button";

export const DiffLibSummary = () => {
  return (
    <li className="">
      <Card>
        <Collapsible title="Difflib">
          <p className="text-gray-700 text-justify mt-3">
            difflib is a library for comparing sequences. It can be used for
            example, for comparing files, and can produce human-readable
            differences or can be used to compare arbitrary sequences of lines
            of text.
          </p>

          <p className="text-gray-700 text-justify mt-3">
            Let's see how we can implement it by using{" "}
            <strong>EasyWebWorker</strong>.
          </p>

          <div className="flex justify-end">
            <Button className=" bg-blue-400 text-white px-4 py-1 rounded-sm mt-3">
              Play
            </Button>
          </div>
        </Collapsible>
      </Card>
    </li>
  );
};
