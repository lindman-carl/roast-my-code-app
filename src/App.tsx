import {} from "react";
import CodeInput from "./components/CodeInput";
import Header from "./components/Header";

const App = () => {
  return (
    <div
      id="app-contianer"
      className="flex h-screen w-full items-center justify-center bg-teal-600 text-white"
    >
      <div className="flex w-full max-w-2xl flex-col items-center justify-center gap-y-8 bg-cyan-900 p-16 py-12 shadow-lg">
        <Header />
        <CodeInput active={true} />
        <button className="self-end rounded bg-rose-950 px-8 py-4 font-mono text-2xl font-black uppercase tracking-wider shadow">
          R0ast away
        </button>
      </div>
    </div>
  );
};

export default App;
