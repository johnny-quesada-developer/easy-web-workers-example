import React, { useEffect } from "react";
import { Card } from "../_shared/components";
import { CurrentExample } from "./CurrentExample";
import { menuStateActions } from "../_shared";
import { Menu } from "./Menu/Menu";

export const Dashboard: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  className,
  style,
  ...props
}) => {
  useEffect(() => {
    const handler = () => {
      const minWidth = 768;

      if (window.innerWidth >= minWidth) {
        menuStateActions.open();

        return;
      }

      menuStateActions.close();
    };

    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  return (
    <main
      {...props}
      className={`
      ${className} 
      
      dashboard p-6 grid`}
      style={{
        ...style,
      }}
    >
      <Menu />

      <div
        className={`         
        h-fit-content flex flex-col justify-between gap-6 
      `}
      >
        <Card className="">
          <CurrentExample />
        </Card>
      </div>
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
