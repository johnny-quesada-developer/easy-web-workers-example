import { useRef } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { EasyWebWorker, IEasyWebWorkerMessage } from 'easy-web-worker';

const progressStyle = {
  height: '20px',
  backgroundColor: '#2196F3',
  borderRadius: '4px',
};

const buttonStyle = {
  margin: '1em 0',
  padding: '0.5em 1em',
};

type Payload = {
  isRunning: boolean;
};

const counterWorker = new EasyWebWorker<Payload>((easy) => {
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
    } else {
      stopRunning();
    }
  });
});

function App() {
  const ref = useRef<HTMLDivElement>(null);

  const state = useRef({
    count: 0,
    isRunning: false,
  });

  const handleToggleProgress = () => {
    const { current } = state;

    current.isRunning = !current.isRunning;

    counterWorker.send({ isRunning: current.isRunning }).onProgress((count) => {
      ref.current.style.width = `${count}%`;
    });
  };

  return (
    <div className='App'>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>

        <a href='https://reactjs.org' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className='card'>
        <div ref={ref} style={progressStyle}></div>

        <button style={buttonStyle} onClick={handleToggleProgress}>
          Toggle Progress
        </button>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
