# easy-web-workers-example

# Easy Web Worker

Easy Web Worker is a lightweight and easy-to-use library for creating web workers in JavaScript applications. With Easy Web Worker, you can move computationally expensive tasks and logic off the main thread and into a separate thread, improving the performance and responsiveness of your application. [Live Example](https://johnny-quesada-developer.github.io/easy-web-workers-example/)

## Benefits

Using web workers with Easy Web Worker has several benefits, including:

- **Improved performance:** By running expensive tasks in a separate thread, your application's main thread is free to handle user interactions and other tasks, improving overall performance and responsiveness.

- **Easy-to-use API:** Easy Web Worker provides a simple and easy-to-use API for creating and using web workers, so you can focus on writing your application logic instead of worrying about the details of web workers.

- **Compatibility with TypeScript:** Easy Web Worker is written in TypeScript and provides full TypeScript support, so you can use it in your TypeScript projects with ease.

## Getting Started

To get started with Easy Web Worker, you can install it from npm:

```sh
npm install easy-web-worker
```

Once you have installed Easy Web Worker, you can import the `createWorker` function and use it to create a new web worker:

```tsx
import { EasyWebWorker } from "easy-web-worker";

type Payload = {
  isRunning: boolean;
};

/**
 * Note that the callback parameter of the EasyWebWorker() function is just a template,
 * and every sharing of data between the main thread and the worker should happen through the API.
 */
const counterWorker = new EasyWebWorker<Payload>((easy) => {
  // Inside the worker:
  let intervalId: number;
  let count = 0;

  const startRunning = (message: IEasyWebWorkerMessage<Payload>) => {
    intervalId = setInterval(() => {
      count = count >= 100 ? 0 : count + 1;
      console.log(`progress inside worker: ${count}%`);

      message.reportProgress(count);
    }, 10);
  };

  const stopRunning = () => {
    clearInterval(intervalId);
  };

  easy.onMessage((message) => {
    const {
      payload: { isRunning },
    } = message;

    if (isRunning) {
      startRunning(message);

      return;
    }

    stopRunning();

    message.resolve();
  });
});

// ... to use your worker in whatever place
const handleToggleProgress = (isRunning: boolean) => {
  console.log("start progress");

  counterWorker
    // send a new message to the worker
    .send({ isRunning })
    // subscribe an onProgress callback to the worker
    .onProgress((count) => {
      ref.current.style.width = `${count}%`;
    })
    // the messages returns CancelablePromise from cancelable-promise-jq which
    .then(() => {
      console.log("worker finished");
    });
};
```

## Documentation

For more information on how to use Easy Web Worker, including API documentation and examples, refer to the npm [easy-web-worker](https://www.npmjs.com/package/easy-web-worker)

## Contributing

If you find any issues or have suggestions for improvements, feel free to submit an issue or pull request on GitHub.

## License

Easy Web Worker is licensed under the MIT License. See the LICENSE file for details.
