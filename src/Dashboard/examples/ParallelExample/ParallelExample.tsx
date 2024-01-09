import { useEffect, useRef, useState } from "react";
import { EasyWebWorker, createEasyWebWorker } from "easy-web-worker";
import { Button, themeState } from "@shared";

const fibonacci = (n: number) => {
  if (n <= 1) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
};

export const ParallelExample: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  className,
  ...props
}) => {
  const fibonacciBase = 42;

  const [isRunning, setIsRunning] = useState(false);
  const [state, setState] = useState<"tap1" | "tap2" | "tap3">("tap1");

  const progressBarRef = useRef<HTMLDivElement>(null);
  const workerRef = useRef<EasyWebWorker<null, number>>(null);
  const timeTakenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    workerRef.current = createEasyWebWorker<null, number>(
      (easyWorker, context) => {
        const [fibonacciBase] = context.primitiveParameters as [number];

        const fibonacci = (n: number) => {
          if (n <= 1) return n;

          return fibonacci(n - 1) + fibonacci(n - 2);
        };

        easyWorker.onMessage((message) => {
          const result = fibonacci(fibonacciBase);

          message.resolve(result);
        });
      },
      {
        primitiveParameters: [fibonacciBase],
        maxWorkers: 4,
      }
    );

    return () => {
      workerRef.current?.dispose();
    };
  }, []);

  useEffect(() => {
    if (!isRunning) return;

    const intervalId = setInterval(() => {
      if (!isRunning) return;

      let width = (parseInt(progressBarRef.current.style.width) ?? 0) + 1;
      width = width >= 100 ? 0 : width;

      progressBarRef.current.style.width = `${width}%`;
    }, 10);

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const scrollToTop = () => {
    timeTakenRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const executeInMainThread = () => {
    setIsRunning(true);

    timeTakenRef.current.innerHTML = `current computation time: <strong>0 seconds</strong>`;

    scrollToTop();

    setTimeout(() => {
      const time = Date.now();

      const result = fibonacci(fibonacciBase);

      setIsRunning(false);
      setState("tap2");

      const computedTime = (Date.now() - time) / 1000;

      timeTakenRef.current.innerHTML = `current computation time: <strong class="text-red-500">${computedTime} seconds</strong>, <strong class="text-purple-500">result: ${result}</strong>`;
    }, 0);
  };

  const executeInWorker = async () => {
    setIsRunning(true);

    scrollToTop();

    const time = Date.now();
    let computedTime = 0;

    const intervalId = setInterval(() => {
      computedTime = (Date.now() - time) / 1000;

      timeTakenRef.current.innerHTML = `current computation time: <strong  class="text-red-500">${computedTime} seconds</strong>`;
    }, 100);

    const promises = [
      workerRef.current.send(),
      workerRef.current.send(),
      workerRef.current.send(),
    ];

    const [result] = await Promise.all(promises);

    timeTakenRef.current.innerHTML = `current computation time: <strong  class="text-red-500">${computedTime} seconds</strong>, <strong class="text-purple-500">result: ${result}</strong>`;

    clearInterval(intervalId);

    setIsRunning(false);
    setState("tap3");
  };

  themeState.highlight();

  return (
    <div className={`${className} flex flex-col gap-6`} {...props}>
      <h3 className="font-bold text-gray-600 border-b border-gray-200 pb-2">
        Did you know that javascript is single-threaded?
      </h3>
      <p className="text-gray-600  ">
        Single-threaded means that only one task can be executed at a time. If a
        task is running, any other tasks will have to wait until the first. This
        can cause problems when a task is computationally expensive, like
        sorting a large array or rendering a large list.
      </p>

      <h3 className="font-bold text-gray-600 ">
        But, what if you could run multiple tasks at the same time?
      </h3>

      <p className="text-gray-600  ">
        With <strong>EasyWebWorker</strong> you can create multiple workers
        instances from a single worker file or template.
      </p>

      <h3 className="font-bold text-gray-600 border-b border-gray-200 ">
        Let's see an example:
      </h3>

      <p ref={timeTakenRef} className="text-gray-600  ">
        current computation time: <strong>0</strong> seconds
      </p>

      {/* progress bar */}
      <div className={isRunning ? "" : "hidden"}>
        <p className="text-gray-600  ">
          <strong>Running...</strong>
        </p>

        <div className="h-2 border-2 border-gray-500 bg-stone-100 rounded-sm overflow-hidden animate-fade-in">
          <div
            ref={progressBarRef}
            className="h-full bg-gradient-to-r from-indigo-100 to-indigo-300"
            style={{ width: "10%" }}
          />
        </div>
      </div>

      {state === "tap1" && !isRunning && (
        <div className="flex flex-col gap-2">
          <p className="text-gray-600  ">
            Let's calculate the fibonacci number of{" "}
            <strong>{fibonacciBase}</strong> in the main thread an review the
            time that it takes for calculating. Click the button below to start
            the calculation.
          </p>

          <p className="text-gray-600  ">
            This will block the main thread a couple of seconds, you'll also
            notice that the main menu will be unresponsive. This is because the
            main thread is gonna be busy. Please be patient and wait for the
            result.
          </p>

          <Button
            className={`w-24 bg-gray-700 text-white px-4 py-1 rounded-sm`}
            onClick={executeInMainThread}
          >
            Run
          </Button>

          <pre className="bg-stone-100 rounded-sm p-3 animate-fade-in">
            <code className="language-javascript block overflow-scroll">{`const fibonacci = (n: number) => {
  if (n <= 1) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
}`}</code>
          </pre>
        </div>
      )}

      {state === "tap1" && isRunning && (
        <div className="flex flex-row gap-2 w-full">
          <p className="text-gray-600  ">
            Now you can expect an delay and some unresponsiveness in the main
            thread. You could notice for example that the main is unresponsive,
            freeze or laggy.
          </p>
        </div>
      )}

      {state === "tap2" && !isRunning && (
        <>
          <p className="text-gray-600  ">
            <strong>Finished Great!</strong> It took a little bit, and the
            progreess bar wasn't even able to move cause the main thread was
            busy.
          </p>
          <p className="text-gray-600  ">
            Now, let's perform the same calculation in a separate thread using a
            web worker.{" "}
            <strong className=" text-purple-500">
              And! let's make the calculation 3 times intead of one!!{" "}
              <span className="text-2xl">Lets Go!</span>
            </strong>
          </p>
          <p className="text-gray-600  ">
            Take a look on the code below. Once you are ready, click the button
            for start the calculation.
          </p>
          <pre className="bg-stone-100 rounded-sm p-3 animate-fade-in">
            <code className="language-javascript block overflow-scroll">
              {`useEffect(() => {
    workerRef.current = createEasyWebWorker<null, number>(
      (easyWorker, context) => {
        const [fibonacciBase] = context.primitiveParameters;

        const fibonacci = (n: number) => {
          if (n <= 1) return n;

          return fibonacci(n - 1) + fibonacci(n - 2);
        };

        easyWorker.onMessage((message) => {
          const result = fibonacci(fibonacciBase);

          message.resolve(result);
        });
      },
      {
        primitiveParameters: [fibonacciBase],
        maxWorkers: 4,
      }
    );

    return () => {
      workerRef.current?.dispose();
    };
  }, [])`}
            </code>
          </pre>
          <div className="flex gap-2 items-center">
            <Button
              className={` w-40 bg-gray-700 text-white px-4 py-1 rounded-sm`}
              onClick={executeInWorker}
            >
              Run In Worker
            </Button>
            Let's see how much time it takes to calculate the fibonacci number 3
            times in a separate thread.
          </div>
        </>
      )}

      {state === "tap2" && isRunning && (
        <>
          <p className="text-gray-600  ">
            Do you see the progress bar moving? That's because the calculation
            is being performed in a separate thread.
          </p>

          <p className="text-gray-600  ">
            Now the menu is responsive, and there is no any kind of
            unresponsiveness.
          </p>
        </>
      )}

      {state === "tap3" && (
        <>
          <p className="text-gray-600  ">
            <strong>Finished Great!</strong> It took a little bit, but we
            compute the fibonacci number 3 times in parallel! With no extra
            delay or unresponsiveness in the main thread.
          </p>

          <p className="text-gray-600  ">
            <strong>
              Lets see how the code was looking in the main thread:
            </strong>
          </p>

          <pre className="bg-stone-100 rounded-sm p-3 animate-fade-in">
            <code className="language-javascript block overflow-scroll">{`setIsRunning(true);

const time = Date.now();

const intervalId = setInterval(() => {
  // update the progress bar
}, 100);

/**
 * Promises for a web worker? That's so cool!
 * as you see we are sending 3 messages, and since our easy web worker is configured to use 4 workers, 
 * the 3 messages will be processed in parallel.
*/
const promises = [
  workerRef.current.send(),
  workerRef.current.send(),
  workerRef.current.send(),
];

const [result] = await Promise.all(promises);

clearInterval(intervalId);

setIsRunning(false);`}</code>
          </pre>

          <p className="text-gray-600  ">
            Just like that easy web worker created 3 separate workers, 3
            separate threads! and executed the calculation in parallel without
            blocking the main thread... <strong>Easy!</strong>
          </p>

          <p className="text-gray-600  ">
            And with cancelable promises!! which also allows to report progress
            from inside the worker to the main thread!! (take a look at the
            other examples or hit the button start again)
          </p>

          <Button
            className={` w-40 bg-gray-700 text-white px-4 py-1 rounded-sm`}
            onClick={() => {
              setState("tap2");
            }}
          >
            Start Again
          </Button>

          <p className="text-gray-600  ">
            You can also review the developer tools and see the workers in the
            Sources tab.
          </p>

          <p className="text-gray-600  ">
            In this specific example since we are concurrent workers each
            message will create a new worker until the maxWorkers limit is
            reached. Once the limit is reached, the messages will be queued; and
            once all the messages are processed, the workers will be disposed to
            free up resources.
          </p>

          <p className="text-gray-600  ">
            By default easy web worker is configured to use 1 worker at the
            time, this worker is created once a new instance of easy web worker
            is created, and it keeps alive unless the instance is disposed
            programatically. When using concurrent workers this are created on
            demand until the maxWorkers limit is reached.
          </p>

          <p className="text-gray-600  ">
            You can modify this and other configurations by passing a second and
            optional parameter to the createEasyWebWorker function. please take
            a look in the documentation
            <a
              href="https://www.npmjs.com/package/easy-web-worker"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              {" "}
              here
            </a>
          </p>
        </>
      )}
    </div>
  );
};
