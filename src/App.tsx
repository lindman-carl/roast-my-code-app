import {} from "react";
import CodeInput from "./component/CodeInput";

const App = () => {
  return (
    <div
      id="app-contianer"
      className="flex h-screen w-full items-center justify-center bg-teal-600 text-white"
    >
      <div className="flex w-full max-w-2xl flex-col items-center justify-center bg-teal-900 p-16 shadow-lg">
        <h1 className="mb-16 text-4xl font-bold">Roast my code</h1>
        <CodeInput active={true} />
      </div>
    </div>
  );
};

export default App;
