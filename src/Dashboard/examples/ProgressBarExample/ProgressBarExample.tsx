import { useEffect, useRef, useState } from "react";
import { EasyWebWorker } from "easy-web-worker";
import { Button } from "@shared";

type ProgressBarExamplePayload = {
  shouldDisplayLogs?: boolean;
};

export const ProgressBarExample: React.FC<
  React.HTMLAttributes<HTMLElement>
> = ({ className, ...props }) => {
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [isWorkerRunning, setWorkerState] = useState(false);
  const [shouldDisplayLogs, setShouldDisplayLogs] = useState(false);
  const [executedFirstTime, setExecutedFirstTime] = useState(false);

  const workerRef = useRef<EasyWebWorker<ProgressBarExamplePayload>>(null);

  useEffect(() => {
    /**
     * For more simple web workers we don't need use an external file
     * we can just use a function as a worker template,
     *
     * also notice that you can also create more complex APIs in the worker with specific methods
     */
    workerRef.current = new EasyWebWorker<ProgressBarExamplePayload>(
      (easyWorker) => {
        let intervalId: NodeJS.Timeout;
        let count = 0;

        const workerState = {
          isRunning: false,
          shouldDisplayLogs: false,
        };

        easyWorker.onMessage("start", (message) => {
          intervalId = setInterval(() => {
            count = count >= 100 ? 0 : count + 0.4;

            if (workerState.shouldDisplayLogs) {
              console.log(`progress inside worker: ${count}%`);
            }

            message.reportProgress(count);
          }, 10);
        });

        easyWorker.onMessage<ProgressBarExamplePayload>(
          "updateState",
          (message) => {
            const {
              payload: { shouldDisplayLogs },
            } = message;

            Object.assign(workerState, {
              shouldDisplayLogs,
            });

            message.resolve();
          }
        );

        easyWorker.onMessage("pause", (message) => {
          clearInterval(intervalId);

          message.resolve();
        });
      }
    );

    return () => {
      workerRef.current?.dispose();
    };
  }, []);

  const toggleWorkerRunning = () => {
    setWorkerState(!isWorkerRunning);
    setExecutedFirstTime(true);

    if (isWorkerRunning) {
      workerRef.current.sendToMethod("pause");

      return;
    }

    workerRef.current
      .sendToMethod("start")
      .onProgress((progress) => {
        progressBarRef.current.style.width = `${progress}%`;
      })
      .finally(() => {
        console.log("worker finished");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const toggleWorkerLogs = () => {
    setShouldDisplayLogs(!shouldDisplayLogs);

    workerRef.current.sendToMethod("updateState", {
      shouldDisplayLogs: !shouldDisplayLogs,
    });
  };

  return (
    <div className={`${className} flex flex-col gap-6`} {...props}>
      <h3 className="font-bold text-gray-600 border-b border-gray-200 pb-2">
        Reporting progress from a web worker
      </h3>

      <p className="text-gray-600  ">
        There are several operations that can be very expensive in terms of CPU
        and memory, like sorting a large array, or doing a heavy calculation.
        These operations can block the main thread and make the UI unresponsive.
      </p>

      <p className="text-gray-600  ">
        Web Workers are a great way to fix this problem, but by default, the{" "}
        <strong>WebWorker</strong> API doesn't provide a way to report progress
        from the worker to the main thread.
      </p>

      <strong className="block text-gray-600">
        So what about if we can implement cancelable promises pattern with web
        workers along with an intuitive way to report progress to the main
        thread?
      </strong>

      {/* progress bar */}
      <div className="h-12 border-2 border-gray-500 bg-stone-100 rounded-sm overflow-hidden">
        <div
          ref={progressBarRef}
          className="h-full bg-gradient-to-r from-indigo-100 to-indigo-300"
          style={{ width: "10%" }}
        />
      </div>

      {executedFirstTime && (
        <p className="text-gray-600   animate-fade-in">
          The progress bar above is updated by a Web Worker running in the
          background. Click the button below again to toggle between start and
          pause.
        </p>
      )}

      <div className="flex flex-row gap-2">
        <Button
          className="w-24 bg-gray-700 text-white px-4 py-1 rounded-sm mt-3"
          onClick={toggleWorkerRunning}
        >
          {isWorkerRunning ? "Pause" : "Start"}
        </Button>

        {isWorkerRunning && (
          <Button
            className="w-46 bg-indigo-400 text-white px-4 py-1 rounded-sm mt-3 animate-fade-in hover:bg-indigo-500 transition-colors duration-300"
            onClick={toggleWorkerLogs}
          >
            {shouldDisplayLogs ? "Remove console logs" : "Show console logs"}
          </Button>
        )}
      </div>

      {executedFirstTime && (
        <p className="text-gray-600   animate-fade-in">
          You can see the code for this example{" "}
          <a
            href="https://github.com/johnny-quesada-developer/easy-web-workers-example/tree/main/src/Dashboard/examples"
            target="_blank"
            className="text-gray-600"
          >
            here
          </a>
          .
        </p>
      )}

      <div>
        <h3 className="font-bold text-gray-600 border-b border-gray-200 mb-3 py-3">
          How can you achieve this with <strong>EasyWebWorker</strong>?
        </h3>

        <p className="text-gray-600  my-3">
          <strong>EasyWebWorker</strong> implements a cancellable promise
          pattern, which also allows you to subscribe to an onProgress callback.
          This makes it super easy to read and intuitive. Just like any other
          promise, it's extensible.
        </p>

        <pre>
          <code className="language-javascript block overflow-scroll">
            {`// Starts the worker
worker
  .sendToMethod("start")
  .onProgress((progress) => {
    progressBarRef.current.style.width = \`\${progress}%\`;
  })
  .finally(() => {
    console.log("worker finished");
  })
  .catch((error) => {
    console.log(error);
  });


// Pauses the worker
worker
  .sendToMethod("pause");
`}
          </code>
        </pre>

        <p className="text-gray-600  my-3">
          Just like that, you can run any heavy operation in the background
          without blocking the main thread.
        </p>

        <h3 className="font-bold text-gray-600 border-b border-gray-200 mb-3 py-3">
          But how to create WebWorker?
        </h3>

        <p className="text-gray-600  my-3">
          For creating this simple worker, we don't need to create an external
          file, we can just use a function as a worker template. See the code
          below:
        </p>

        <pre>
          <code className="language-javascript block overflow-scroll">
            {`const worker = new EasyWebWorker<ProgressBarExamplePayload>(
  (easyWorker) => {
    let intervalId: NodeJS.Timeout;
    let count = 0;

    easyWorker.onMessage("start", (message) => {
      intervalId = setInterval(() => {
        count = count >= 100 ? 0 : count + 0.4;

        message.reportProgress(count);
      }, 10);
    });

    easyWorker.onMessage("pause", (message) => {
      clearInterval(intervalId);

      message.resolve();
    });
  }
);`}
          </code>
        </pre>

        <p className="text-gray-600  my-3">
          You can create APIs inside your web worker like in the previous
          example, or more simple single callback workers like this one:
        </p>

        <pre>
          <code className="language-javascript block overflow-scroll">
            {`const worker = new EasyWebWorker<ProgressBarExamplePayload>(
  (easyWorker) => {
    
    easyWorker.onMessage((message) => {
      const { payload } = message;

      // do something...

      message.resolve();
    });
  }
);`}
          </code>
        </pre>
      </div>
    </div>
  );
};
