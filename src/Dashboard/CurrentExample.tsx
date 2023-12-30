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
        className={`${exampleName === "images" ? "" : "hidden"}`}
      />

      <TextDiffExample
        className={`${exampleName === "text-diff" ? "" : "hidden"}`}
      />

      <IntroExample className={`${exampleName === "intro" ? "" : "hidden"}`} />
    </div>
  );
});
