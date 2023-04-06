import { Aside, Main, Header } from "./dashboard";

function App() {
  return (
    <div className="app grid grid-cols-1 h-full">
      <Header />
      <Aside />
      <Main />
    </div>
  );
}

export default App;
