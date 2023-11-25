import { Card, Collapsible } from "../../_shared/components";
import { useSelectedExample } from "../../_shared/stores/SelectedExample";

export const Intro: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  className,
  ...props
}) => {
  const exampleName = "intro";
  const [isSelected] = useSelectedExample(
    (state) => state.name === exampleName
  );

  return (
    <Card>
      <Collapsible title="Introduction" isOpen={isSelected}>
        <article className={`${className} mt-3`} {...props}>
          <p className="text-gray-700 text-justify">
            <strong>EasyWebWorker</strong> Is a lightweight and easy-to-use
            library for creating web workers in JavaScript applications. With
            Easy Web Worker, you can move computationally expensive tasks and
            logic off the main thread and into a separate thread, improving the
            performance and responsiveness of your application. The library has
            several benefits, including improved performance, an easy-to-use
            API, and TypeScript support.
          </p>
        </article>
      </Collapsible>
    </Card>
  );
};
