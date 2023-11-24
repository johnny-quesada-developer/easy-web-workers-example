import { Card } from "../_shared/components";
import { CurrentExample } from "./CurrentExample";
import { DiffLibExampleSummary, ImagesExampleSummary } from "./examples";

export const Main = () => {
  return (
    <main className="main-grid grid grid-cols-1 p-6 gap-6">
      <ul className="">
        <DiffLibExampleSummary />
        <ImagesExampleSummary />
      </ul>

      <Card className="">
        <CurrentExample />
      </Card>
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
