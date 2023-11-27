import TextDiff from "text-diff";
import { StaticEasyWebWorker } from "easy-web-worker";
import { DiffLibExampleComparePayload } from "./TextDiffExample.types";

const easyWorker = new StaticEasyWebWorker();

easyWorker.onMessage<DiffLibExampleComparePayload, string>(
  "compare",
  (message) => {
    const { input1, input2 } = message.payload;

    const textDiff = new TextDiff();
    const diff = textDiff.main(input1, input2);
    const diffDisplay = textDiff.prettyHtml(diff);

    message.resolve(diffDisplay);
  }
);
