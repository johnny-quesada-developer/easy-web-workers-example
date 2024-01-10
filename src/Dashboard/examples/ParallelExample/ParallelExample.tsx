import { useEffect, useRef, useState } from "react";
import { EasyWebWorker, createEasyWebWorker } from "easy-web-worker";
import { Button, themeState, selectedExample } from "@shared";

const fibonacci = (index: number) => {
  if (index <= 1) return index;

  return fibonacci(index - 1) + fibonacci(index - 2);
};

export const ParallelExample: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  className,
  ...props
}) => {
  const [isRunning, setIsRunning] = useState(false);
  const [state, setState] = useState<"tap1" | "tap2" | "tap3" | "tap4">("tap1");

  const [{ maxWorkers, firstRunFinished, terminationDelay }, setConfig] =
    useState({
      maxWorkers: 4,
      terminationDelay: 1000,
      firstRunFinished: false,
    });

  const [fibonacciIndexes, setFibonacciIndexes] = useState([42, 38, 36]);
  const [messagesCount, setMessagesCount] = useState(1);

  const progressBarRef = useRef<HTMLDivElement>(null);
  const workerRef = useRef<
    EasyWebWorker<
      {
        fibonacciIndex: number;
      },
      number
    >
  >(null);
  const timeTakenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    workerRef.current = createEasyWebWorker<
      {
        fibonacciIndex: number;
      },
      number
    >(
      (easyWorker) => {
        const fibonacci = (index: number) => {
          if (index <= 1) return index;

          return fibonacci(index - 1) + fibonacci(index - 2);
        };

        easyWorker.onMessage((message) => {
          const { fibonacciIndex } = message.payload;
          const result = fibonacci(fibonacciIndex);

          message.resolve(result);
        });
      },
      {
        maxWorkers,
        terminationDelay,
      }
    );

    return () => {
      workerRef.current?.dispose();
    };
  }, [maxWorkers, terminationDelay]);

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

    timeTakenRef.current.innerHTML = `<span>current computation time: <strong>0 seconds</strong></span>`;

    scrollToTop();

    setTimeout(() => {
      const time = Date.now();

      const result = fibonacci(fibonacciIndexes[0]);

      setIsRunning(false);
      setState("tap2");

      const computedTime = (Date.now() - time) / 1000;

      timeTakenRef.current.innerHTML = `<span>current computation time: <strong class="text-red-500">${computedTime} seconds</strong></span> <strong class="text-purple-500">result: ${result}</strong>`;
    }, 10);
  };

  const executeInWorker = async (params: {
    messagesCount?: number;
    fibonacciIndexes?: number[];
  }) => {
    setIsRunning(true);

    scrollToTop();

    const time = Date.now();
    let computedTime = 0;

    const intervalId = setInterval(() => {
      computedTime = (Date.now() - time) / 1000;

      timeTakenRef.current.innerHTML = `<span>current computation time: <strong  class="text-red-500">${computedTime} seconds</strong></span>`;
    }, 100);

    const results = await Promise.all(
      new Array(params.messagesCount ?? 1).fill(0).map((_, index) =>
        workerRef.current.send({
          fibonacciIndex:
            params.fibonacciIndexes?.[index] ?? fibonacciIndexes[0],
        })
      )
    );

    timeTakenRef.current.innerHTML = `<span>current computation time: <strong  class="text-red-500">${computedTime} seconds</strong></span> <strong class="text-purple-500">result${
      results.length > 1 ? "s" : ""
    }: ${results.join(", ")}</strong>`;

    clearInterval(intervalId);

    setIsRunning(false);
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

      <p ref={timeTakenRef} className="text-gray-600  flex flex-col gap-2">
        <span>
          current computation time: <strong>0</strong> seconds
        </span>
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
            Let's calculate the fibonacci index{" "}
            <strong>{fibonacciIndexes[0]}</strong> in the main thread an review
            the time that it takes for calculating.
          </p>

          <p className="text-gray-600  ">
            This will block the main thread a couple of seconds, you'll also
            notice that the main menu will be unresponsive. This is because the
            main thread is gonna be busy. Please be patient and wait for the
            result.
          </p>

          <pre className="bg-stone-100 rounded-sm p-3 animate-fade-in">
            <code className="language-javascript block overflow-scroll">{`const fibonacci = (index: number) => {
  if (index <= 1) return index;

  return fibonacci(index - 1) + fibonacci(index - 2);
}`}</code>
          </pre>

          <p className="text-gray-600  ">
            Once you are ready reviewin the code, click the button for start the
            calculation.
          </p>

          <Button
            className={`w-24 bg-gray-700 text-white px-4 py-1 rounded-sm`}
            onClick={executeInMainThread}
          >
            Run
          </Button>
        </div>
      )}

      {state === "tap1" && isRunning && (
        <div className="flex flex-row gap-2 w-full">
          <p className="text-gray-600  ">
            Now you can expect a delay and some unresponsiveness in the main
            thread. You could notice for example that the main is unresponsive,
            freeze or laggy.
          </p>
        </div>
      )}

      {state === "tap2" && !isRunning && (
        <>
          {!firstRunFinished && (
            <>
              <p className="text-gray-600  ">
                <strong>Finished Great!</strong> It took a little bit, and the
                progreess bar wasn't even able to move cause the main thread was
                busy.
              </p>

              <p className="text-gray-600  ">
                Now, let's perform the same calculation in a separate thread
                using a web worker.
              </p>

              <p className="text-gray-600  ">Take a look on the code below.</p>
            </>
          )}

          {!firstRunFinished && (
            <pre className="bg-stone-100 rounded-sm p-3 animate-fade-in">
              <code className="language-javascript block overflow-scroll">
                {`useEffect(() => {
  workerRef.current = createEasyWebWorker(
    (easyWorker) => {
      const fibonacci = (index) => {
        if (index <= 1) return index;

        return fibonacci(index - 1) + fibonacci(index - 2);
      };

      easyWorker.onMessage((message) => {
        const { fibonacciIndex } = message.payload;
        const result = fibonacci(fibonacciIndex);

        message.resolve(result);
      });
    },
  );

  return () => {
    workerRef.current?.dispose();
  };
}, [])`}
              </code>
            </pre>
          )}

          {!firstRunFinished && (
            <>
              <p className="text-gray-600  ">
                For sending a new message to our worker, we just need to call
                the send method of our easy web worker instance:
              </p>

              <pre className="bg-stone-100 rounded-sm p-3 animate-fade-in">
                <code className="language-javascript block overflow-scroll">
                  {`setIsRunning(true);

await workerRef.current.send();

setIsRunning(false);`}
                </code>
              </pre>
            </>
          )}

          {firstRunFinished && (
            <>
              <h3 className="font-bold text-purple-600 border-b border-gray-200 ">
                Add your own configuration
              </h3>

              <form className="flex flex-col gap-2">
                <label className="text-gray-600  flex flex-col gap-2">
                  How many messages do you want to send to the worker?
                  <input
                    autoComplete="off"
                    className="w-24 border border-gray-500 rounded-sm indent-3"
                    type="number"
                    max={50}
                    value={messagesCount}
                    onChange={(e) => {
                      const value = parseInt(e.target.value ?? "1");
                      const numericValue = isNaN(value) ? 1 : value;

                      setMessagesCount(numericValue);

                      if (numericValue !== fibonacciIndexes.length) {
                        setFibonacciIndexes(
                          new Array(numericValue).fill(0).map((_, index) => {
                            return fibonacciIndexes[index] ?? 40;
                          })
                        );
                      }
                    }}
                  />
                </label>

                <div className="flex flex-col gap-2 border border-gray-500 rounded-sm p-3">
                  {new Array(messagesCount).fill(0).map((_, index) => (
                    <label
                      key={index}
                      className="text-gray-600 flex flex-col gap-2 animate-fade-in"
                    >
                      Add the fibonacci index for the message {index + 1}
                      <input
                        autoComplete="off"
                        className="w-24 border border-gray-500 rounded-sm indent-3"
                        type="number"
                        value={fibonacciIndexes[index] ?? 40}
                        onChange={(e) => {
                          setFibonacciIndexes((state) => {
                            const newState = [...state];
                            const value = parseInt(e.target.value ?? "1");
                            newState[index] = isNaN(value) ? 1 : value;

                            return newState;
                          });
                        }}
                      />
                    </label>
                  ))}
                </div>

                <label className="text-gray-600 flex flex-col gap-2">
                  How many workers do you want to use?
                  <input
                    autoComplete="off"
                    className="w-24 border border-gray-500 rounded-sm indent-3"
                    type="number"
                    max={10}
                    value={maxWorkers}
                    onChange={(e) => {
                      const value = parseInt(e.target.value ?? "1");
                      const numericValue = isNaN(value) ? 1 : value;

                      setConfig((state) => ({
                        ...state,
                        maxWorkers: numericValue,
                      }));
                    }}
                  />
                </label>

                <label className="text-gray-600 flex flex-col gap-2">
                  How many milliseconds do you want to wait before disposing the
                  workers?
                  <input
                    autoComplete="off"
                    className="w-24 border border-gray-500 rounded-sm indent-3"
                    type="number"
                    max={100000}
                    value={terminationDelay}
                    onChange={(e) => {
                      const value = parseInt(e.target.value ?? "1");
                      const numericValue = isNaN(value) ? 1 : value;

                      setConfig((state) => ({
                        ...state,
                        terminationDelay: numericValue,
                      }));
                    }}
                  />
                </label>
              </form>

              <pre className="bg-stone-100 rounded-sm p-3 animate-fade-in">
                <code className="language-javascript block overflow-scroll">
                  {`setIsRunning(true);

const promises = [
  ${new Array(messagesCount)
    .fill(0)
    .map((_, index) => {
      return `workerRef.current.send({ fibonacciIndex: ${
        fibonacciIndexes[index] ?? 1
      } })`;
    })
    .join(",\n  ")}
];

const results = await Promise.all(promises);

setIsRunning(false);`}
                </code>
              </pre>
            </>
          )}

          <p className="text-gray-600  ">
            Once you are ready, click the button for start the calculation.
          </p>

          <div className="flex gap-2 items-center">
            <Button
              className={` w-40 bg-gray-700 text-white px-4 py-1 rounded-sm`}
              onClick={async () => {
                await executeInWorker({
                  messagesCount: !firstRunFinished ? 1 : messagesCount,
                  fibonacciIndexes,
                });

                setState(!firstRunFinished ? "tap3" : "tap4");
              }}
            >
              Run In Worker
            </Button>
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

      {state === "tap3" && !isRunning && (
        <>
          <p className="text-gray-600  ">
            <strong>Finished Great!</strong> It took a little bit, but we
            compute the fibonacci number in a separate thread! With no extra
            delay or unresponsiveness in the main thread.
          </p>

          <h3 className="font-bold text-gray-600 border-b border-gray-200 ">
            No so impressive yet, right?
          </h3>

          <p className="text-gray-600  ">
            The advantage of using a web worker is that you can execute multiple
            tasks in parallel, like for example calculating the fibonacci number
            3 times.
          </p>

          <p className="text-gray-600  ">
            Normally performing the same calculation 3 times in a row would take
            3 times the time that it takes for performing the calculation once,
            right?{" "}
          </p>

          <h3 className="font-bold text-purple-500 border-b border-gray-200 ">
            But what if you could perform these calculations in parallel?
          </h3>

          <p className="text-gray-600  ">
            With <strong>EasyWebWorker</strong> you can create multiple workers
            instances from a single worker file or template. The{" "}
            <strong>maxWorkers</strong> parameter will do the trick. and the{" "}
            <strong>EasyWebWorker</strong> will take care of the rest. Take a
            look at the definition of the worker below:
          </p>

          <pre className="bg-stone-100 rounded-sm p-3 animate-fade-in">
            <code className="language-javascript block overflow-scroll">
              {`useEffect(() => {
  workerRef.current = createEasyWebWorker(
    (easyWorker) => {
      const fibonacci = (index: number) => {
        if (index <= 1) return index;

        return fibonacci(index - 1) + fibonacci(index - 2);
      };

      easyWorker.onMessage((message) => {
        const { fibonacciIndex } = message.payload;
        const result = fibonacci(fibonacciIndex);

        message.resolve(result);
      });
    },
    {
      /**
       * the only change is that now the native 
       * Workers will be created on demand,
       * here we are telling to easy web worker to
       * use a maximum of 4 workers at the same time.
      */
      maxWorkers: 4,
    }
  );

  return () => {
    workerRef.current?.dispose();
  };
}, [])`}
            </code>
          </pre>

          <p className="text-gray-600  ">
            After processing the messages the workers will be disposed to free
            up resources. (But you can also customize this behavior)
          </p>

          <p className="text-gray-600  ">
            Now let's take a look at the of the main thread:
          </p>

          <pre className="bg-stone-100 rounded-sm p-3 animate-fade-in">
            <code className="language-javascript block overflow-scroll">
              {`setIsRunning(true);

const promises = [
  workerRef.current.send({ fibonacciIndex: ${fibonacciIndexes[0]} }),
  workerRef.current.send({ fibonacciIndex: ${fibonacciIndexes[1]} }),
  workerRef.current.send({ fibonacciIndex: ${fibonacciIndexes[2]} }),
];

const results = await Promise.all(promises);

setIsRunning(false);`}
            </code>
          </pre>

          <p className="text-gray-600  ">
            From the main thread perspective consider you worker as an WEB API,
            you can send multiple HTTP request to the same API, right? well, in
            the same way you can send multiple messages to the same
            EasyWebWorker, and if you are using concurrent workers, instead of
            queueing the messages, the EasyWebWorker will create a new worker on
            demand until the maxWorkers limit is reached.
          </p>

          <p className="text-gray-600  ">
            Once you are ready, click the button for start the calculation.
          </p>

          <Button
            className={` w-40 bg-gray-700 text-white px-4 py-1 rounded-sm`}
            onClick={async () => {
              await executeInWorker({
                messagesCount: !firstRunFinished ? 3 : messagesCount,
                fibonacciIndexes: fibonacciIndexes,
              });

              setState("tap4");
            }}
          >
            Run In Worker
          </Button>
        </>
      )}

      {state === "tap3" && isRunning && (
        <>
          <p className="text-gray-600  ">
            Is super cool, right? Now we are computing the fibonacci number 3
            times!
          </p>

          <p className="text-gray-600  ">
            the menu still working, and there is no any kind of lag or
            unresponsiveness.{" "}
            <strong className="text-purple-500">Awesome!</strong>
          </p>
        </>
      )}

      {state === "tap4" && (
        <>
          {!firstRunFinished && (
            <>
              <p className="text-gray-600  ">
                <strong>Finished Great!</strong> It took basically the same time
                as the previous example, but now we compute the fibonacci number
                3 times in parallel!
              </p>

              <p className="text-gray-600  ">
                Just like that easy web worker created 3 separate workers, 3
                separate threads! and executed the calculation in parallel
                without blocking the main thread... <strong>Easy!</strong>
              </p>

              <p className="text-gray-600  ">
                And with cancelable promises!! which also allows to report
                progress from inside the worker to the main thread!! (take a
                look at the{" "}
                <a
                  onClick={() => selectedExample.setCurrent("progress-bar")}
                  className="text-blue-500 hover:underline cursor-pointer"
                >
                  report progress example
                </a>{" "}
                or hit the button below for start the example again with extra
                configuration)
              </p>
            </>
          )}

          <Button
            className={` w-40 bg-gray-700 text-white px-4 py-1 rounded-sm`}
            onClick={() => {
              setConfig((state) => ({ ...state, firstRunFinished: true }));
              setState("tap2");
              setFibonacciIndexes([40]);

              timeTakenRef.current.innerHTML = `current computation time: <strong>0 seconds</strong>`;
            }}
          >
            Start Again
          </Button>

          {!firstRunFinished && (
            <>
              <p className="text-gray-600  ">
                You can also review the developer tools and see the workers in
                the Sources tab.
              </p>

              <p className="text-gray-600  ">
                In this specific example since we are concurrent workers each
                message will create a new worker until the maxWorkers limit is
                reached. Once the limit is reached, the messages will be queued;
                and once all the messages are processed, the workers will be
                disposed to free up resources.
              </p>

              <p className="text-gray-600  ">
                By default easy web worker is configured to use 1 worker at the
                time, this worker is created once a new instance of easy web
                worker is created, and it keeps alive unless the instance is
                disposed programatically. When using concurrent workers this are
                created on demand until the maxWorkers limit is reached.
              </p>

              <p className="text-gray-600  ">
                You can modify this and other configurations by passing a second
                and optional parameter to the createEasyWebWorker function.
                please take a look in the documentation
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
        </>
      )}
    </div>
  );
};
