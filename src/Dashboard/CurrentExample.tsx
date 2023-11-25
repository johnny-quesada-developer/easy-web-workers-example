import { useSelectedExample } from "../_shared/stores/SelectedExample";
import { ImagesExample, TextDiffExample } from "./examples";

export type CurrentExampleProps = {};

export const CurrentExample: React.FC<CurrentExampleProps> = () => {
  const [{ name: exampleName }] = useSelectedExample();

  if (exampleName === "images") {
    return <ImagesExample />;
  }

  return <TextDiffExample />;
};
