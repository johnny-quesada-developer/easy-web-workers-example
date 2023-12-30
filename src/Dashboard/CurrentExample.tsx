import { useSelectedExample } from "@shared";
import { ImagesExample, TextDiffExample } from "./examples";
import React from "react";
import { IntroExample } from "@src/Dashboard/examples";

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

      <TextDiffExample
        className={`${
          exampleName === "text-diff" ? "" : "hidden"
        }  animate-fade-in`}
      />

      <IntroExample
        className={`${
          exampleName === "intro" ? "" : "hidden"
        }  animate-fade-in`}
      />
    </div>
  );
});
