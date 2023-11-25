import { useRef, useState } from "react";
import { EasyWebWorker } from "easy-web-worker";
import { Button } from "../../../_shared";

type IntroExamplePayload = {
  shouldDisplayLogs?: boolean;
};

/**
 * For more simple web workers we don't need use an external file
 * we can just use a function as a worker template,
 *
 * also notice that you can also create more complex APIs in the worker with specific methods
 */
const progressBarWorker = new EasyWebWorker<IntroExamplePayload>(
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

    easyWorker.onMessage<IntroExamplePayload>("updateState", (message) => {
      const {
        payload: { shouldDisplayLogs },
      } = message;

      Object.assign(workerState, {
        shouldDisplayLogs,
      });

      message.resolve();
    });

    easyWorker.onMessage("pause", (message) => {
      clearInterval(intervalId);

      message.resolve();
    });
  }
);

export const IntroExample: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  className,
  ...props
}) => {
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [isWorkerRunning, setWorkerState] = useState(false);
  const [shouldDisplayLogs, setShouldDisplayLogs] = useState(false);
  const [executedFirstTime, setExecutedFirstTime] = useState(false);

  const toggleWorkerRunning = () => {
    setWorkerState(!isWorkerRunning);
    setExecutedFirstTime(true);

    if (isWorkerRunning) {
      progressBarWorker.sendToMethod("pause");

      return;
    }

    progressBarWorker
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

    progressBarWorker.sendToMethod("updateState", {
      shouldDisplayLogs: !shouldDisplayLogs,
    });
  };

  return (
    <div className={`${className} flex flex-col gap-6`} {...props}>
      <h3 className="font-bold text-blue-500 border-b border-gray-200 pb-2">
        Do you know what happens if you have an infinite loop in your main
        thread?
      </h3>

      <ul className="list-none flex flex-col gap-2 text-sm">
        <li className="leading-6">
          <strong className="text-sm mb-2 text-gray-700">
            Browser Unresponsiveness:
          </strong>{" "}
          The infinite loop will consume all the available processing time on
          the main thread, leaving no room for other operations. This results in
          the browser becoming unresponsive, and user interactions like clicks,
          scrolls, and keyboard inputs won't be processed, effectively freezing
          the page.
        </li>
        <li className="leading-6">
          <strong className="text-sm mb-2  text-gray-700">
            High CPU Usage:
          </strong>{" "}
          The loop continuously executes without any break, causing the CPU
          usage to spike. This can slow down not only the browser but also the
          entire operating system, impacting the performance of other
          applications.
        </li>
        <li className="leading-6">
          <strong className="text-sm mb-2  text-gray-700">
            Potential Crashes:
          </strong>{" "}
          Prolonged high CPU usage may lead to the browser or even the whole
          system crashing, especially if system resources are limited.
        </li>
        <li className="leading-6">
          <strong className="text-sm mb-2  text-gray-700">
            Difficulty in Debugging:
          </strong>{" "}
          Identifying and stopping an infinite loop can be challenging, as
          browser tools and extensions may also become unresponsive.
        </li>
      </ul>

      <p className="text-gray-700 text-sm leading-6">
        Heavy computations like image resizing images, reading large files, or a
        long-running loop can also cause the same issues.
      </p>

      <strong className="block text-blue-500">
        But what if we could run these operations in the background?
      </strong>

      {/* progress bar */}
      <div className="h-12 border-2 border-gray-200 rounded-sm overflow-hidden">
        <div
          ref={progressBarRef}
          className="h-full bg-green-400"
          style={{ width: "10%" }}
        />
      </div>

      {executedFirstTime && (
        <p className="text-gray-700 text-sm leading-6 animate-fade-in">
          The progress bar above is updated by a Web Worker running in the
          background. Click the button below again to toggle between start and
          pause.
        </p>
      )}

      <div className="flex flex-row gap-2">
        <Button
          className="w-24 bg-blue-500 text-white px-4 py-1 rounded-sm mt-3"
          onClick={toggleWorkerRunning}
        >
          {isWorkerRunning ? "Pause" : "Start"}
        </Button>

        {isWorkerRunning && (
          <Button
            className="w-46 bg-orange-400 text-white px-4 py-1 rounded-sm mt-3 animate-fade-in"
            onClick={toggleWorkerLogs}
          >
            {shouldDisplayLogs ? "Remove console logs" : "Show console logs"}
          </Button>
        )}
      </div>

      {executedFirstTime && (
        <p className="text-gray-700 text-sm leading-6 animate-fade-in">
          You can see the code for this example{" "}
          <a
            href="https://github.com/johnny-quesada-developer/easy-web-workers-example/tree/main/src/Dashboard/examples"
            target="_blank"
            className="text-blue-500"
          >
            here
          </a>
          .
        </p>
      )}
    </div>
  );
};
