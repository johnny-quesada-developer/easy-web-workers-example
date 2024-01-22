import { useSelectedExample } from "@shared";
import {
  ProgressBarExample,
  ImagesExample,
  TextDiffExample,
  ParallelExample,
  TypescriptExample,
} from "./examples";
import React from "react";
import merge from "easy-css-merge";

export type CurrentExampleProps = {};

export const CurrentExample: React.FC<CurrentExampleProps> = React.memo(() => {
  const [{ name: exampleName }] = useSelectedExample();

  return (
    <div>
      <ImagesExample
        className={merge("animate-fade-in", {
          hidden: exampleName !== "images",
        })}
      />
      <ParallelExample
        className={merge("animate-fade-in", {
          hidden: exampleName !== "parallel",
        })}
      />
      <TextDiffExample
        className={merge("animate-fade-in", {
          hidden: exampleName !== "text-diff",
        })}
      />
      <ProgressBarExample
        className={merge("animate-fade-in", {
          hidden: exampleName !== "progress-bar",
        })}
      />
      <TypescriptExample
        className={merge("animate-fade-in", {
          hidden: exampleName !== "typescript",
        })}
      />
    </div>
  );
});
