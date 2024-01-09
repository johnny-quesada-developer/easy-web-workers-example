import { useSelectedExample } from "@shared";
import {
  ProgressBarExample,
  ImagesExample,
  TextDiffExample,
  ParallelExample,
} from "./examples";
import React from "react";

export type CurrentExampleProps = {};

export const CurrentExample: React.FC<CurrentExampleProps> = React.memo(() => {
  const [{ name: exampleName }] = useSelectedExample();

  return (
    <div>
      <ImagesExample
        className={`${
          exampleName === "images" ? "" : "hidden"
        } animate-fade-in`}
      />

      <ParallelExample
        className={`${
          exampleName === "parallel" ? "" : "hidden"
        } animate-fade-in`}
      />

      <TextDiffExample
        className={`${
          exampleName === "text-diff" ? "" : "hidden"
        }  animate-fade-in`}
      />

      <ProgressBarExample
        className={`${
          exampleName === "progress-bar" ? "" : "hidden"
        }  animate-fade-in`}
      />
    </div>
  );
});
