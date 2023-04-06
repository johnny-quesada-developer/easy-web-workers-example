import { Aside, Main, Header } from "./dashboard";

function App() {
  return (
    <div className="app grid grid-cols-1 h-full animate-fade-in duration-200">
      <Header />
      <Aside />
      <Main />
    </div>
  );
}

export default App;
