import difflib from "difflib";
import { Card, Collapsible } from "../_shared/components";

export const Main = () => {
  return (
    <main className="main-grid grid grid-cols-1 p-6">
      <ul className="">
        <li className="">
          <Card>
            <Collapsible title="Difflib">
              <p className="text-gray-700 text-justify mt-3">
                difflib is a library for comparing sequences. It can be used for
                example, for comparing files, and can produce human-readable
                differences or can be used to compare arbitrary sequences of
                lines of text.
              </p>

              <p className="text-gray-700 text-justify mt-3">
                Let's see how we can implement it by using{" "}
                <strong>EasyWebWorker</strong>.
              </p>
            </Collapsible>
          </Card>
        </li>
      </ul>
      <div></div>
    </main>
  );
};

// const progressStyle = {
//     height: '20px',
//     backgroundColor: '#2196F3',
//     borderRadius: '4px',
//   };

//   const buttonStyle = {
//     margin: '1em 0',
//     padding: '0.5em 1em',
//   };

//   type Payload = {
//     isRunning: boolean;
//   };

//   const counterWorker = new EasyWebWorker<Payload>((easy) => {
//     let intervalId: number;
//     let count = 0;

//     const startRunning = (message: IEasyWebWorkerMessage<Payload>) => {
//       intervalId = setInterval(() => {
//         count = count >= 100 ? 0 : count + 1;
//         console.log(`progress inside worker: ${count}%`);

//         message.reportProgress(count);
//       }, 10);
//     };

//     const stopRunning = () => {
//       clearInterval(intervalId);
//     };

//     easy.onMessage((message) => {
//       const {
//         payload: { isRunning },
//       } = message;

//       message.onCancel(() => {
//         stopRunning();
//       });

//       startRunning(message);
//     });
//   });

//   const ref = useRef<HTMLDivElement>(null);

//   const state = useRef({
//     count: 0,
//     isRunning: false,
//     promise: null,
//   });

//   const handleToggleProgress = () => {
//     const { current } = state;

//     if (current.isRunning) {
//       current.promise.cancel();
//       current.isRunning = false;

//       return;
//     }

//     current.isRunning = true;
//     console.log('start progress');

//     current.promise = counterWorker
//       .send({ isRunning: current.isRunning })
//       .onProgress((count) => {
//         ref.current.style.width = `${count}%`;
//       })
//       .catch(() => {
//         console.log('worker finished');
//       });
//   };
