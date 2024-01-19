import { createStaticEasyWebWorker } from "easy-web-worker";
import * as ts from "typescript";

createStaticEasyWebWorker<string, string>((message) => {
  const { payload: code } = message;
  const { outputText: javascriptCode } = ts.transpileModule(code, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2015,
    },
  });

  message.resolve(javascriptCode);
});
